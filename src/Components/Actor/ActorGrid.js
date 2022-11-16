import React from 'react'
import ActorCard from './ActorCard'
import { FlexGrid } from '../Styled';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({data}) => {
    
  return (
    <FlexGrid>
      {data.map(({person}) => <ActorCard  key={person.id} image={person.image ? person.image.medium:IMAGE_NOT_FOUND} name={person.name} country={person.country ? person.country.name :null} dob={person.birthday} gender={person.gender}></ActorCard>)}
    </FlexGrid>
  )
}

export default ActorGrid;
