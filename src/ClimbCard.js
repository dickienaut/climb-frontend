import React from 'react';
import { Card, Image } from 'semantic-ui-react'

class ClimbCard extends React.Component {


  render() {
    const location = this.props.climb.location.split(' > ')
    return(
      <Card onClick={() => this.props.onClick(this.props.climb)}>
        <Image size='medium' src={this.props.climb.images[0] ? this.props.climb.images[0].url : null} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Route Name: {this.props.climb.route}</Card.Header>
          <Card.Meta>
            <span className='location'>{this.props.climb.location.split(' > ')[-1]}</span>
          </Card.Meta>
          <Card.Description>
            Location: {location[location.length - 1] + ', ' + location[location.length - 2] + ', ' + location[location.length - 3]}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          Grade: {this.props.climb.rating}
        </Card.Content>
      </Card>
    )
  }
}

export default ClimbCard;


// <div>
//   <img src={this.props.climb.images[0] ? this.props.climb.images[0].url : null} alt="oh no!" />
//   <h1>{this.props.climb.route}</h1>
// </div>
