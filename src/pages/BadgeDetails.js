import React from 'react'
import confLogo from '../images/confLogo.png';
import '../components/styles/BadgeDetails.css'
import {Link} from 'react-router-dom'
import Badge from '../components/badge'


function BadgeDetails(props){

  const badge = props.badge

  return(
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="BadgeDetails__logo" />
            </div>
            <div className="col-6 BadgeDetails__attendant__title">
              <h1>{badge.firstName} {badge.lastName}</h1>

            </div>
          </div>
        </div>
      </div>
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col">
              <Badge
              firstName={badge.firstName }
              lastName={badge.lastName}
              facebook={badge.facebook  }
              email={badge.email }
              jobTitle={badge.jobTitle  }
              />
            </div>
            <div className="col d-flex justify-content-center align-items-center flex-column">
            <h2 className="mb-4">Actions </h2>
            <div className="mb-4">
              <div><Link className="btn btn-primary btn-lg " to={`/badges/${badge.id}/edit`}>Edit</Link></div>
            </div>
            <div>
              <button className="btn btn-danger btn-lg">Delete</button>
            </div>
          </div>
          </div>
        </div>

    </React.Fragment>
  )
}


export default BadgeDetails
