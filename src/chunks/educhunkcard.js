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

export default function Educhunkcard() {
    return (
        <Typography component={"div"}>
            <div className="eduheader">
                <h1>Education</h1>
                <ShortTextIcon className={useStyles().shorttext}/>
            </div>
            <div className="wrapper">
                <div className="center-line">
                    
                </div>
                
                <div className="row row-2">
                    <section>
                        <LocationOnIcon className="icon"/>
                        <div className="details">
                            <span className="title">B. Tech in Computer Science</span>
                            <span className="dateedu">August 2019 - May 2023</span>
                        </div>
                        <p>Shri Mata Vaishno Devi University, Katra, J&K</p>
                        <div className="bottom">

                            <i>CGPA - 8.0</i>
                        </div>
                    </section>
                </div>
                
                <div className="row row-2">
                    <section>
                        <LocationOnIcon className="icon"/>
                        <div className="details">
                            <span className="title">Senior Secondary School</span>
                            <span className="dateedu">May 2016 - May 2017</span>
                        </div>
                        <p>Adarsh Public Senior Secondary School Ralawata</p>
                        <div className="bottom">

                            <i>Percentage - 86.00%</i>
                        </div>
                    </section>
                </div>
                
                <div className="row row-2 lastrowrow-2">
                    <section>
                        <LocationOnIcon className="icon"/>
                        <div className="details">
                            <span className="title">Secondary School</span>
                            <span className="dateedu">May 2014 - May 2015</span>
                        </div>
                        <p>Bright Career Public School Shrimadhopur</p>
                        <div className="bottom">

                            <i>Percentage - 81.33%</i>
                        </div>
                    </section>
                </div>
            </div>
            </Typography>
    )
}
