import React from 'react'
import PersistentDrawerLeft from '../chunks/sidebar';
import Abme from '../chunks/abme';
export default function About() {
    return (
        <div>
            <PersistentDrawerLeft hover="About me"/>
            <Abme/>
        </div>
    )
}
