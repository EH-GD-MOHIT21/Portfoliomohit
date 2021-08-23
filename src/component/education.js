import React from 'react'
import PersistentDrawerLeft from '../chunks/sidebar';
import Educhunkcard from '../chunks/educhunkcard';
export default function Education() {
    return (
        <div>
            <PersistentDrawerLeft hover="Education"/>
            <Educhunkcard/>
        </div>
    )
}
