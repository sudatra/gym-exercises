import React from 'react'
import { useState } from 'react'
import {Box} from '@mui/material'
import Exercises from '../Components/Exercises'
import SearchExercises from '../Components/SearchExercises'
import HeroBanner from '../Components/HeroBanner'

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises 
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home
