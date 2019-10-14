import React from 'react';
import '../components/styles/Badges.css';
import facebook_logo from '../images/facebook.svg';
import Gravatar from './Gravatar.js'
import {Link} from 'react-router-dom';



class BadgesList extends React.Component{
  render(){

    if (this.props.badges.length === 0 && this.props.state === false) {
        return(
          <div>
            <h3>No encontramos ningun badge</h3>
          </div>
        )
    }

    // var imageList;
    // if(badge.email) {
    //    <Gravatar className="Badge_avatar" email={this.props.email}/>
    // }else{
    //
    // }

    console.log(this.props.badges);

    return(
      <ul className="list-unstyled ">
        {this.props.badges.map((badge)=>{
          console.log(badge);

          return(
            <li className="list__element" key={badge.id}>
              <Link className="text-reset text-decoration-none list__element__link" to={`/badges/${badge.id}`} >
                <Gravatar className="list__element__avatar" email={badge.email} image={badge.avatarUrl}/>
                <div>
                  <p className="name-badge d-inline-block">{badge.firstName} </p>
                  <p className="lastname-badge mr-auto">{badge.lastName}</p>
                  <p>{badge.jobTitle}</p>
                  <a href="/"><img src={facebook_logo} alt="facebook_logo" />@{badge.facebook}</a>
                </div>

              </Link>

            </li>
          )
        }
        )}
      </ul>
    )
  }

}


export default BadgesList
