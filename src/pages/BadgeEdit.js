import React from 'react';
import Badge from '../components/badge'
import BadgeForm from '../components/BadgeForm'
import logo from '../images/badgenew-header.svg'
import '../components/styles/BadgeEdit.css';
import Api from '../Api';
import {Link} from 'react-router-dom'
import Loader from '../components/Loader.js';

class BadgeEdit extends React.Component{
  state={
    loading: true,
    error: null,
    form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    facebook: '',

  }}

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async (e) =>{
    this.setState({loading: true, error:null, })


    try{
      const data = await Api.badges.read(
        this.props.match.params.badgeId
      )

      this.setState({
        loading: false,
        form: data
      })
    }catch(error){
      this.setState({loading: false, error:error, })
    }
  }

  handleSubmit = async e =>{
    this.setState({loading: true, error:null})
    //Tenemos que detener el onSubmit
    // Por que si no el navegador va a enviar los datos a una pagina
    // Que no hemos especificado

    e.preventDefault()

    try{
        await Api.badges.update(this.props.match.params.badgeId, this.state.form)
        this.setState({loading: false})


        // React-router-dom el component router le da props espaciales
        // a la pagina uno de lleos es history que permite redirigir al usuario a esa pagina
        // solo las paginas que hemos puestos en route tienen estas propiedades
        this.props.history.push('/badges')
    }catch(error){
      this.setState({loading: false, error:error})
    }
  }

  handleChange= e =>{

    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }

    })
  }

  render(){
    if (this.state.loading) {
      return <Loader/>
    }
    return(
      <React.Fragment>
        <div className="BadgeEdit__hero">
            <img className="img-fluid" src={logo} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
              firstName={this.state.form.firstName || 'FIRTS-NAME'}
              lastName={this.state.form.lastName || 'LAST-NAME'}
              facebook={this.state.form.facebook || 'YOUR-FACEBOOK'}
              email={this.state.form.email || 'YOUR-EMAIL'}
              avatarUrl="https://s.gravatar.com/avatar/dca264eb7d7e3117a0f7550168383a7f?s=80"
              jobTitle={this.state.form.jobTitle || 'YOUR-JOBTITLE'}
              />
            </div>
            <div className="col-6">
                <h1>Edit Attendant</h1>
              <BadgeForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>

    )

  }
}


export default BadgeEdit
