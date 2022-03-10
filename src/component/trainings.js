import React from 'react';
import PersistentDrawerLeft from '../chunks/sidebar';
import Trainingschunk from '../chunks/trainingschunk';


export default function Trainings() {
  return (
    <div>
        <PersistentDrawerLeft hover="Trainings & Events"/>
        <Trainingschunk/>
    </div>
  )
}
