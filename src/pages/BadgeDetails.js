import React from 'react'

import confLogo from '../images/confLogo.png';
import '../components/styles/BadgeDetails.css'
import {Link} from 'react-router-dom'
import Badge from '../components/badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal.js'


function BadgeDetails(props){
  const [count, setCount] = React.useState(0)

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
              <div>
                <button onClick={() =>{
                    setCount(count + 1)
                  }} className="btn btn-primary mr-4">
                  Increase count: {count}
                </button>
                <Link className="btn btn-primary btn-lg " to={`/badges/${badge.id}/edit`}>Edit</Link></div>
            </div>
            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger btn-lg">Delete</button>
              {/* ReactDom.createPortal(Que queremos renderizar, y en donde ) */}
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}/>

            </div>
          </div>
          </div>
        </div>

    </React.Fragment>
  )
}


export default BadgeDetails
