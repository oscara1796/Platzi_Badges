import React from 'react';
import './styles/ErrorPage.css'


class PageError extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="Error_message">
          ❌{this.props.error.message}❌
        </div>

      </React.Fragment>
    )
  }
}

export default PageError
