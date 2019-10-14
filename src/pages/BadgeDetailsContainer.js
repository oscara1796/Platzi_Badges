import React from 'react';

import BadgeDetails from './BadgeDetails'
import Loader from '../components/Loader.js';
import PageError from '../components/PageError';
import Api from '../Api.js'



class BadgeDetailsContainer extends React.Component{
  state = {
    loading: true,
    error: null,
    data: undefined
  }


componentDidMount(){
  this.fetchData()
}

fetchData = async () =>{
  this.setState({
    loading: true, error: null
  })

  try {
    const data = await Api.badges.read(
      this.props.match.params.badgeId
    )
    this.setState({loading: false, data: data})
  } catch(error){
    this.setState({laoding: false, error: error})
  }
}

  render(){
    if (this.state.loading) {
      return <Loader/>
    }

    if(this.state.error){
      return <PageError error={this.state.error}/>
    }


    return (
      <BadgeDetails badge={this.state.data}/>
    )
  }
}


export default BadgeDetailsContainer
