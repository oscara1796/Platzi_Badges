import React from 'react';
import '../components/styles/Badges.css';
import facebook_logo from '../images/facebook.svg'



class BadgesList extends React.Component{
  render(){
    return(
      <ul className="list-unstyled ">
        {this.props.badges.map((badge)=>{
          return(
            <li className="list__element" key={badge.id}>
              <img className="list__element__avatar" src={badge.avatarUrl}  alt="Avatarurl"/>
              <div>
                <p>{badge.firstName} {badge.lastName}</p>
                <a href="/"><img src={facebook_logo} alt="facebook_logo" />@{badge.twitter}</a>
              </div>
            </li>
          )
        }
        )}
      </ul>
    )
  }

}


export default BadgesList
