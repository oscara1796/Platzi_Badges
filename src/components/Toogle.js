import React from 'react';
import "./styles/Toogle.css"






class Toogle extends React.Component{
  render(){
    return(
      <React.Fragment>
        <span className="d-block mt-2">Api switch</span>
        <label className="Toogle-switch">

          <input onClick={this.props.onClick} type="checkbox"/>
          <span className="slider round"></span>
        </label>

      </React.Fragment>
    )
  }
}


export  default Toogle
