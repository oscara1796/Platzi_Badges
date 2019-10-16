import React from 'react';
import '../components/styles/Badges.css';
import facebook_logo from '../images/facebook.svg';
import Gravatar from './Gravatar.js'
import {Link} from 'react-router-dom';


function useSearchBadges(badges){
  const [query, setQuery] = React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges)


  // const filterBadges = badges.filter(badge =>{
  //   return `${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
  // })

  React.useMemo(
    () => {
      const result = badges.filter(badge =>{
    return `${badge.firstName}${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
  });
  setFilteredBadges(result)
}, [badges, query])

return {query,setQuery, filteredBadges}
}

function BadgesList(props){
  const badges = props.badges
  const{query, setQuery, filteredBadges} = useSearchBadges(badges)

    if (filteredBadges.length === 0 && badges.state === false) {
        return(
          <div>
            <div className="form-group">
              <label >Filter badges</label>
              <input type="text" className="form-control"
                value={query}
                onChange={(e) =>{
                  setQuery(e.target.value)
                }}/>
            </div>
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



    return(
      <React.Fragment>
        <div className="form-group">
          <label >Filter badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e) =>{
              setQuery(e.target.value)
            }}/>
        </div>
        <ul className="list-unstyled ">
          {filteredBadges.map((badge)=>{


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
      </React.Fragment>
    )


}


export default BadgesList
