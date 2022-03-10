import React from 'react';
import { Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShortTextIcon from '@material-ui/icons/ShortText';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    shorttext:{
        fontSize: "3rem",
        marginTop: "-37px",
        marginLeft: "-5px",
        marginBottom: "30px",
    }
}))

export default function Expchunk() {
  return (
    <Typography component={"div"}>

            <div className="intheader">
                <h1>Internships</h1>
                <ShortTextIcon className={useStyles().shorttext}/>
            </div>
            <div className="wrapper">
                <div className="center-line">
                    
                </div>
                
                <div className="row row-2">
                    <section>
                        <LocationOnIcon className="icon"/>
                        <div className="details">
                            <span className="title">Freelancer</span>
                            <span className="dateedu"> March 2022 - Current</span>
                        </div>
                        <p>Solution to Programming Problems</p>
                        <div className="bottom">
                          <p>Started Freelancing in Full Stack web development & Python.</p>
                        </div>
                    </section>
                </div>


                <div className="row row-2">
                    <section>
                        <LocationOnIcon className="icon"/>
                        <div className="details">
                            <span className="title">Apicon Solutions Pvt. Ltd.</span>
                            <span className="dateedu">September 2021 - November 2021</span>
                        </div>
                        <p>React & Django Developer</p>
                        <div className="bottom">
                          <p>Developed a backend with Djongo and mongodb created authentication APIs with data validation using serializers and dynamic django models for individuals, generated Custom JWT access & refresh tokens.</p>
                        </div>
                    </section>
                </div>
                
                
            </div>

            </Typography>
  )
}
