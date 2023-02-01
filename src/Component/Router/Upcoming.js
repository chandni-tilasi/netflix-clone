import React, { useContext } from 'react'
import MovieContext from '../../Context/MovieContext'
// import Card from '../Card/Card';
import RoutesCard from './RoutesCard';

function Upcoming() {
    const upcomingInfo = useContext(MovieContext);
    // console.log(upcomingInfo.upcoming)
  return (
    <RoutesCard arr={upcomingInfo.upcoming} />
  )
}

export default Upcoming