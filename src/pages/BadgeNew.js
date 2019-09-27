import React from 'react';
import Badge from '../components/badge'
import BadgeForm from '../components/BadgeForm'
import logo from '../images/badgenew-header.svg'
import '../components/styles/BadgeNew.css'

class BadgeNew extends React.Component{
  state={ form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    facebook: '',

  }}

  handleChange= e =>{

    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }

    })
  }

  render(){
    return(
      <React.Fragment>
        <div className="BadgeNew__hero">
            <img className="img-fluid" src={logo} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
              firstName={this.state.form.firstName}
              lastName={this.state.form.lastName}
              facebook={this.state.form.facebook}
              email={this.state.form.email}
              avatarUrl="https://s.gravatar.com/avatar/dca264eb7d7e3117a0f7550168383a7f?s=80"
              jobTitle={this.state.form.jobTitle}
              />
            </div>
            <div className="col-6">
              <BadgeForm
              onChange={this.handleChange}
              formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
        
    )

  }
}


export default BadgeNew
