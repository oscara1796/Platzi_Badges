import React from 'react';
import {Link}  from 'react-router-dom'
import '../components/styles/Badges.css';
import BadgesList from '../components/BadgesList';
import confLogo from '../images/confLogo.png';
import Loader from '../components/Loader.js';
import Toogle from '../components/Toogle';
import PageError from '../components/PageError';
import Api from '../Api.js'

const API = 'https://us-central1-api-cv-3b8cb.cloudfunctions.net/react'
const API_RICK = 'https://rickandmortyapi.com/api/character/'

class Badges extends React.Component{
  /*En el constructor se inicializa el estado */
  constructor(props){
  super(props)
  console.log('1:ocurre primero constructor')
  this.state={
    nextPage:1,
    loading: true,
    error: null,
    data: undefined,
    esRickAndMorty: false,
    cambioApi: false
};
}

handleRickandmorty = ({target}) =>{
  console.log(target.checked)
  this.setState({
    ...this.state,
    data: undefined,
    nextPage:1,
    esRickAndMorty: target.checked,
    cambioApi: true,
  })
}

fetchCharacters = async () =>{
  const rick = this.state.esRickAndMorty
  this.setState({ esRickAndMorty: rick, loading:true, error:null})
  const rest = rick?API_RICK:API
  try{
    const response = await fetch(`${rest}?page=${this.state.nextPage}`);
    // Sacar los datos a esas respuesta otra función asicnrona
    let data= await response.json()

    if (this.mounted) {
      if(rick){

        const dataRick = data.results.map(result =>{
          let name = result.name.split(' ');

          return({
            id: result.id,
            avatarUrl:result.image,
            firstName: name[0],
            lastName: name[1],
            facebook: name[0],
            jobTitle: result.species
          })
        })

        // console.log(data)

        // Los datos los queremos guardar!!
          data = {data: [].concat(this.state.data || [], dataRick)}
      }else{
         data={data: await Api.badges.list()}
      }
      data={...data, loading:false, nextPage:this.state.nextPage +1, esRickAndMorty: rick}
      this.setState(data)

    }
  }catch(error){
    this.setState({
        loading: false,
        error: error,
        esRickAndMorty: rick
    })
  }

}


componentDidMount(){

  // Llamada a api de ricky morty
  this.mounted = true
  console.log(this.mounted);
  this.fetchCharacters()

  console.log('3:ocurre tercero componenteDidMount')
  /*tenemos que agregar esto como atributo del objeto o componente
  para pasarloa una función clear que limpie la lamada o request
  para que asi no haya problema si el compoenente se desmonta
  la función se llama clearTimeout y se llama en componentWillUnmount*/
  // this.timeoutId = setTimeout(() =>{
  //   this.setState({
  //     data:[data]
  //   })
  // }, 3000)
}





/*Recibe dos argumentos los props que teniamos antes y el this.state
que teniamos antes */
componentDidUpdate(prevProps, prevState){
  // console.log('5:componentDidUpdate()')
  // console.log({
  //   prevProps: prevProps, prevState: prevState
  // })
  // console.log({
  //   props:
  //   this.props,
  //   state: this.state})

  if (this.state.cambioApi) {
    this.setState({...this.state, cambioApi: false})
    this.fetchCharacters()
  }
}

componentWillUnmount(){
  // console.log("6: componentWillUnmount()")
  clearTimeout(this.timeoutId)
  this.mounted= false
}

  render(){
    if (this.state.error) {
      return <PageError error={this.state.error}/>
    }
    // console.log('2/4:Segundo ocurre el render')
    return(
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <img
              className="Badges_conf-logo"
              src={confLogo}
              alt="Conf Logo"
            />
          </div>
        </div>

        <div className="Content__container">
          <div className="Badge__container  ">
            <div className="Badges__buttons ">
              <Toogle onClick={this.handleRickandmorty} />
              <Link to="/badges/new" className="btn btn-success mt-4 mb-2"> New Badges </Link>
            </div>
          </div>


          <div className="Badges__List d-flex justify-content-center">
            <div className="Badges__container">
              {this.state.data &&
                <BadgesList
                badges={this.state.data}
                state={this.state.loading}
                />
              }
            {this.state.loading &&
              (<div className="loader">
              <Loader/>
          </div>)}


          {!this.state.loading && (
            <button onClick={() => this.fetchCharacters()} className="btn btn-primary loader-buton"> Load more </button>
          )}
            </div>
          </div>
        </div>

      </React.Fragment>

    )
  }
}


export default Badges;
