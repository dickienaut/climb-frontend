import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClimbContainer from './ClimbContainer.js'
import NavBar from './NavBar.js'
import LogIn from './LogIn.js'
import SearchBar from './SearchBar.js'
import './App.css';

class App extends React.Component {

  state = {
    climbs: [],
    token: null,
    loggedInUserId: null,
    searchLocationTerm: "",
    searchGradeTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/climbs')
    .then(res => res.json())
    .then(climbsObj => {
      this.setState({
        climbs: climbsObj
      })
    })
  }


  setToken = ({ token, user_id })  =>{

  localStorage.token = token
  localStorage.userId = user_id

  this.setState({
    token: token,
    loggedInUserId: user_id
    })
  }


  saveTermLocation = (term) => this.setState({
    searchLocationTerm: term
  })

  saveTermGrade = (term) => this.setState({
    searchGradeTerm: term
  })


  render() {
    const filterClimbs = this.state.climbs.filter((climb) =>
  climb.location.toLowerCase().includes(this.state.searchLocationTerm.toLowerCase()) && climb.rating.includes(this.state.searchGradeTerm)
)


    return(
      <main>
        <NavBar />

          {
        this.state.token
          ?
          <Fragment>
            <SearchBar
              locationOnChange={(event) => this.saveTermLocation(event.target.value)}
              gradeOnChange={(event) => this.saveTermGrade(event.target.value)}
              />

            <ClimbContainer token={ this.state.token }
                              loggedInUserId={ this.state.loggedInUserId }
                              climbs={filterClimbs}/>
          </Fragment>
          : <LogIn setToken={ this.setToken } />
      }
      </main>
    )
  }
}

export default App;
