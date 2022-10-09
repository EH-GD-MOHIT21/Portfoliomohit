import React from 'react';
import MyCard from '../chunks/card';
import PersistentDrawerLeft from '../chunks/sidebar';
import ScriptTag from 'react-script-tag';


export default function Home() {
    return (
        <div className="homecom" id="homecom">
            <ScriptTag type="text/javascript" src="https://mohitsatija.pythonanywhere.com/static/particlejs/typedm.js"/>
            <canvas className="canvashomestyling" id="liquid-canvas"></canvas>
            <PersistentDrawerLeft hover="Home" color="transparent"/>
            <MyCard/>
        </div>
    )
}
