import React from 'react';
import './styles/Loader.css';



function Loader(){
  return(
    <React.Fragment>
        <div class="container d-flex justify-content-center">
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    </React.Fragment>
  )
}

export default Loader;
