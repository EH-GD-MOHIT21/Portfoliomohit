import React from 'react'
import PersistentDrawerLeft from '../chunks/sidebar';
import Contactform from '../chunks/contactform';
import Subcontact from '../chunks/subcontact';

export default function Contact() {
    return (
        <div>
            <PersistentDrawerLeft hover="Contact me"/>
            <Subcontact/>
            <Contactform/>
        </div>
    )
}
