import React from 'react';
import ClimbCard from './ClimbCard.js'
import { Card } from 'semantic-ui-react'

class ClimbContainer extends React.Component {

  handleClick = (event) => {
    console.log(event)
  }


  render() {

    return(
      <Card.Group itemsPerRow={3}>
        {this.props.climbs.map(climb => (
          <ClimbCard onClick={this.handleClick} key={climb.id} climb={climb} />
        ))}
      </Card.Group>
    )
  }
}

export default ClimbContainer;
