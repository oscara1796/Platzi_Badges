import React from 'react';
import "../components/styles/NotFound.css";
import {Link}  from 'react-router-dom'



function NotFound(){
  return(
    <React.Fragment>
        <div className="content_title d-flex flex-column justify-content-center align-items-center" >
          <h1 className="NotFound__title">404: Not Found</h1>
          <Link to="/" > Página principal </Link>
        </div>
    </React.Fragment>
  )
}


export default NotFound;
