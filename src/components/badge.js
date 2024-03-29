import React from 'react';
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar.js'


class Badge extends  React.Component {
  render(){


    return(
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo}alt="Logo de la conferencia"/>
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge_avatar" email={this.props.email} image=""/>

          <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
        </div>

        <div className="Badge_info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.facebook}</div>
        </div>

        <div className="Badge__footer">
          <p>#Platziconf</p>
        </div>
      </div>
    )

  }
}

export default Badge;
