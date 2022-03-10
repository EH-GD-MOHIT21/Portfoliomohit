import React from 'react'
import { Typography } from '@material-ui/core';
import ShortTextIcon from '@material-ui/icons/ShortText';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    shorttext:{
        fontSize: "3rem",
        marginTop: "-37px",
        marginLeft: "-5px"
    }
}))

export default function Subcontact() {
    return (
        <Typography component={'div'}>
        <div>
            <div className="titleContact">
                    <h1>Contact Me</h1>
                    <ShortTextIcon className={useStyles().shorttext}/>
            </div>
            <div className="parentcontainercontactpage">
                <div className="callsec">
                    <PhoneIcon/>
                    <h3>Call Me On</h3>
                    <p>+91 8955938654</p>
                </div>
                <div className="locationsec">
                    <LocationOnIcon/>
                    <h3>Home</h3>
                    <p>Sikar Rajasthan</p>
                </div>
                <div className="contactemail">
                    <EmailIcon/>
                    <h3>Email</h3>
                    <p>experimentallyf@gmail.com</p>
                </div>
            </div>
        </div>
        </Typography>
    )
}
