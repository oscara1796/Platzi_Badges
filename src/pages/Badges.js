import React from 'react';
import {Link}  from 'react-router-dom'
import '../components/styles/Badges.css';
import BadgesList from '../components/BadgesList';
import confLogo from '../images/confLogo.png';
import Loader from '../components/Loader.js';

class Badges extends React.Component{
  /*En el constructor se inicializa el estado */
  constructor(props){
  super(props)
  console.log('1:ocurre primero constructor')
  this.state={
    nextPage:1,
    loading: true,
    error: null,
    data:[]
};
}


componentDidMount(){
  // Llamada a api de ricky morty
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

fetchCharacters = async () =>{
  this.setState({loading:true, error:null})
  try{
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`);
    // Sacar los datos a esas respuesta otra función asicnrona
    const data= await response.json()
    console.log(data)

    // Los datos los queremos guardar!!
    this.setState({
        loading: false,
        data: this.state.data.concat(data.results),
        nextPage: this.state.nextPage + 1
    })
  }catch(error){
    this.setState({
        loading: false,
        error: error
    })
  }

}

/*Recibe dos argumentos los props que teniamos antes y el this.state
que teniamos antes */
componentDidUpdate(prevProps, prevState){
  console.log('5:componentDidUpdate()')
  console.log({
    prevProps: prevProps, prevState: prevState
  })
  console.log({
    props:
    this.props,
    state: this.state})
}

componentWillUnmount(){
  console.log("6: componentWillUnmount()")
  clearTimeout(this.timeoutId)
}

  render(){
    if (this.state.error) {
      return `Error: ${this.state.error.message}`
    }
    console.log('2/4:Segundo ocurre el render')
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
              <Link to="/badges/new" className="btn btn-success mt-4 mb-2"> New Badges </Link>
            </div>
          </div>


          <div className="Badges__List d-flex justify-content-center">
            <div className="Badges__container">
              <BadgesList
              badges={this.state.data}
              />
            {this.state.loading &&
              (<div className="loader">
              <Loader/>
          </div>)}


          {!this.state.loading && (
            <button onClick={() => this.fetchCharacters()} class="btn btn-primary loader-buton"> Load more </button>
          )}
            </div>
          </div>
        </div>

      </React.Fragment>

    )
  }
}


export default Badges;
