import React from 'react';
import MyCard from '../chunks/card';
import PersistentDrawerLeft from '../chunks/sidebar';
import ScriptTag from 'react-script-tag';


export default function Home() {
    return (
        <div className="homecom" id="homecom">
            <ScriptTag type="text/javascript" src="http://127.0.0.1:8000/static/particlejs/typedm.js"/>
            <PersistentDrawerLeft hover="Home"/>
            <MyCard/>
        </div>
    )
}
