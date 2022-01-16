import React from 'react'
import PersistentDrawerLeft from '../chunks/sidebar';
import Projectchunk from '../chunks/projectchunk';
export default function Projects() {
    return (
        <div>
            <PersistentDrawerLeft hover="Projects"/>
            <Projectchunk/>
        </div>
    )
}
