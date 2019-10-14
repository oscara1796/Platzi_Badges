import React from 'react';
import md5 from 'md5';
import './styles/Badges.css';



function Gravatar(props){
  const email = props.email
  const image= props.image

  if (email) {

    const hash= md5(email)
    return (<img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="Logo usuario"/>)

  }
    return( <img className={props.className} src={image} alt="Logo usuario"/>)


}

export default Gravatar
