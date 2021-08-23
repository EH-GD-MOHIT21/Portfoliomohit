import { Typography } from '@material-ui/core'
import React from 'react';
import ShortTextIcon from '@material-ui/icons/ShortText';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    shorttext:{
        fontSize: "3rem",
        marginTop: "-37px",
        marginLeft: "-5px",
    }
}))

export default function Projectchunk() {
    const projects = [
        "Nested Forms",
        "Chat App",
        "Blog App",
        "Calculator Apk",
        "Music Player",
    ]
    const DescF = [
        "A Website for form Creation made with Html, Css, JavaScript, BootStrap and Backend in Django (Python) Api based Otp generator (email based) expires within 5 minutes. Implemented Custom Permission.(Third Person Can not see Response of others.) A Dynamic Creator Only Access Page for form managemant.",

        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eos voluptatem ducimus. Vero id velit porro provident eius animi voluptates ad cumque ullam sed quis eaque ex, sit atque dolorem suscipit nemo facilis quasi libero? Velit neque, enim facere autem maiores nam et culpa consectetur necessitatibus nobis in odio illo!",

        
        "OTP Authentication, Individual Dashboard, Authenticated Users can post blogs if their NC is >= 1.5 Daily Login Rewards(Reset a/c to server time.) Search Blogs via different fields. Implemented Django Pagination. Dynamic Blog Post (Custom containers upto 10.) + custom html/style tags supported. made with Html, Css, JavaScript, BootStrap and Backend in Django (Python)",

        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eos voluptatem ducimus. Vero id velit porro provident eius animi voluptates ad cumque ullam sed quis eaque ex, sit atque dolorem suscipit nemo facilis quasi libero? Velit neque, enim facere autem maiores nam et culpa consectetur necessitatibus nobis in odio illo!",

        "A music player website made with HTML, CSS, JavaScript, SCSS. Implemented Custom Animation using JavaScript. Day/Night mode Available. Added Event Listener on Progress Bar. Loop song/Shuffle Song Features Available Keyboard Keys Binded with Player and some more JavaScript Based Features."
    ]
    const view_source_urls = [
        "https://github.com/EH-GD-MOHIT21/nestedforms/tree/nfv2.0",
        "",
        "https://github.com/EH-GD-MOHIT21/chimkandi-blog/tree/version2",
        "",
        "https://github.com/EH-GD-MOHIT21/musicwala/tree/version2.2"
    ]
    const view_live_urls = [
        "https://nestedform.herokuapp.com/",
        "",
        "https://cbv2.herokuapp.com/",
        "",
        "https://eh-gd-mohit21.github.io/musicwala/"
    ]
    const imgSrc = [
        "./projectimgs/nf.png",
        "./projectimgs/nf.png",
        "./projectimgs/nf.png",
        "./projectimgs/nf.png",
        "./projectimgs/mw.png"
    ]
    return (
        <Typography component={"div"}>
            <div className="headerprojects">
                <h1>Projects</h1>
                <ShortTextIcon className={useStyles().shorttext}/>
            </div>
            <div className="cardprojectparent">
            {projects.map((name,index)=>{
                return (
                    <div key={name} className="projectcard">
                        <h1>{name}</h1>
                        <div className="contentproject">
                            <img src={imgSrc[index]}/>
                            <p>
                            {DescF[index]}<div className="footerproject">
                            <a href={view_source_urls[index]} target="_blank">View Source</a>
                            <a href={view_live_urls[index]} target="_blank">View Live</a>
                        </div>
                        </p>
                        </div>
                    </div>
               )
            })}
            </div>
        </Typography>
    )
}
