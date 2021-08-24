import React from 'react'
import { Typography } from '@material-ui/core'
import ShortTextIcon from '@material-ui/icons/ShortText';
import { Button } from '@material-ui/core';
import ScriptTag from 'react-script-tag';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    shorttext:{
        fontSize: "3rem",
        marginTop: "-37px",
        marginLeft: "-5px"
    }
}))

export default function Abme() {

    var skills = [
        "JavaScript",
        "ReactJS",
        "CSS",
        "SCSS",
        "HTML",
        "Python",
        "Kotlin",
        "BootStrap",
        "Tailwind CSS",
        "Django",
        "Django Rest Framework",
        "C/C++",
        "SQL",
        "Git/Github",
        "Material UI",
        "Machine Learning",
    ]
    return (
        <div>
            <Typography component={'div'}>
                <div className="headerAbout">
                    <h1>About Me</h1>
                    <ShortTextIcon className={useStyles().shorttext}/>
                </div>
                <div className="descAbout">
                    <h1>I'm Mohit Satija and Full Stack Developer</h1>
                    <p>Hello 👋! I am Mohit Satija, currently Third year computer science undergraduate student at Shri Mata Vaishno Devi University, Katra, Jammu. I am working as a Full Stack Python Developer. I enjoy building everything from small sites and landing pages to rich interactive web apps. I love creating visually stunning and responsive websites. I always try to combine aesthetic with functional aspects, looking for the right balance to communicate without annoying.
                    </p>
                    <p> I enjoy the collaborative nature of working with a team on building a product. The feedback, discussion, and review in this environment brings out the best in each individual member, and is a crucial component in our own personal development. I'm ready to jump onto a supportive team and begin contributing. I also enjoy programming and the coding world.</p>
                </div>
                <div className="skillscontainer">
                    <div className="skillshead">
                        <h1>Skills</h1>
                        <ShortTextIcon className={useStyles().shorttext}/>
                    </div>
                    <div className="skills">
                        {skills.map((text)=>(
                            <h3 className="skillsdiblock" key={text}>{text}</h3>
                        ))}
                    </div>
                </div>
                <div className="buttondowncvdiv">
                <Button className="downresbtn" id="drb" variant="contained" color="primary">
                    <span id="stp-1">D</span>
                    <span id="stp-2">o</span>
                    <span id="stp-3">w</span>
                    <span id="stp-4">n</span>
                    <span id="stp-5">l</span>
                    <span id="stp-6">o</span>
                    <span id="stp-7">a</span>
                    <span id="stp-8">d</span>
                    <span id="stp-9"> </span>
                    <span id="stp-10">R</span>
                    <span id="stp-11">e</span>
                    <span id="stp-12">s</span>
                    <span id="stp-13">u</span>
                    <span id="stp-14">m</span>
                    <span id="stp-15">e</span>
                    </Button>
                </div>
            </Typography>
            <ScriptTag type="text/javascript" src="https://mohitsatija.herokuapp.com/static/particlejs/but.js"/>
        </div>
    )
}
