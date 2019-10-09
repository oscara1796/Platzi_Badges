import React from 'react';
import './styles/Loader.css';



function Loader(){
  return(
    <React.Fragment>
        <div className="container d-flex justify-content-center">
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    </React.Fragment>
  )
}

export default Loader;
