import React from 'react';
import Card from './Card';

const CardList = ({ robots }) =>
{
  if (true) {
    throw new Error('nooooo')
  }
  return (
    <React.Fragment>
    { 
      robots.map((robot,i) => {
        return (
          <Card
            key={i}
            id={robot.id}
            name={robot.name}
            email={robot.email} 
          />
        ) 
      })
    }
    </React.Fragment>
  )
}

export default CardList;
