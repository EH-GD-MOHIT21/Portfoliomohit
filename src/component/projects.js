import React from 'react'
import PersistentDrawerLeft from '../chunks/sidebar';
import Projectchunk from '../chunks/projectchunk';
import ShortTextIcon from '@material-ui/icons/ShortText';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    shorttext: {
        fontSize: "3rem",
        marginTop: "-37px",
        marginLeft: "-5px",
    }
}))


const data = [
    [
        "My Vision 11",
        "A website for playing fantasy game build using Django, Channels, DRF, Celery uses django-allauth as authentication along with social authentication via google. MyVision11 uses two types of currency 1.vision coin for those whose age is verified else 2. vision candies. Razorpay is added for transaction can only be used if age verified.It uses celery workers to get and update score/points for users it collects data from unofficial APIs of cricbuzz via web scrapping (bs4 manually automated). Queue based chat support system, dynamic dashboard (seprated for users and staff) with lots of features and analytics. Custom parsing of contest winner supported via admins (dynamic number of winner). Uses django signals for saving user details.",
        "https://github.com/EH-GD-MOHIT21/vision11",
        "http://myvision11.herokuapp.com/",
        "./projectimgs/vision11.png",
        "May 2022"
    ],
    [
        "Nested Forms",
        "A Website for form/Quiz Creation made with Html, Css, JavaScript, BootStrap and Backend in Django (Python) Api based Otp generator (email based) expires within 5 minutes implemented using caching. Implemented Custom Permission.(Third Person Can not see Response of others.) A Dynamic Creator Only Access Page for form/Quiz managemant. Schedule Quiz/Form according to local time. Survey/Analysis of user responses with in a single click. Generate csv file of user responses, custom negative marking option and many more features to explore.",
        "https://github.com/EH-GD-MOHIT21/tempnf",
        "https://nestedform.herokuapp.com/",
        "./projectimgs/nf.png",
        "December 2021"
    ],
    [
        "Chat App",
        "A website for text chat with custom html,css tag support made with Html, CSS, JavaScript, React, Django, Django Channels, Redis. There are basically two methods to create room public and private for public every one with the url have access in group, for private even you have an link you should know the password of group to join. Currently web socket communication is handled over http only also the messages sent won't be save at server.",
        "https://github.com/EH-GD-MOHIT21/Chat",
        "https://nestedchat.herokuapp.com/",
        "./projectimgs/chatapp.png",
        "September 2021"
    ],
    [
        "Blog App",
        "OTP Authentication, Individual Dashboard, Authenticated Users can post blogs if their NC is >= 1.5 Daily Login Rewards(Reset a/c to server time.) Search Blogs via different fields. Implemented Django Pagination. Dynamic Blog Post (Custom containers upto 10.) + custom html/style tags supported. made with Html, Css, JavaScript, BootStrap and Backend in Django (Python)",
        "https://github.com/EH-GD-MOHIT21/chimkandi-blog/tree/version2",
        "https://cbv2.herokuapp.com/",
        "./projectimgs/cbv2.png",
        "July 2021"
    ],
    [
        "Tic Tac Toe",
        "An online Tic Tac Toe Game for two players implemented using Javascript, React, Django, Django Channels and redis. Each user have 30 seconds to respond if not so it'll be kicked out from game and the other player will won and socket connection will close. Each Player can respond only in its turn. Server stores the game board in cache memory and deletes after completion of game.",
        "https://github.com/EH-GD-MOHIT21/CTTT",
        "https://cttt.herokuapp.com/login",
        "./projectimgs/cttt.png",
        "October 2021"
    ],
    [
        "Calculator Apk",
        "A Calculator application made in android studio with xml and kotlin. There are all basic mathematical feature available with parenthesis matcher. It handles all the airthmetic exceptions.",
        "https://github.com/EH-GD-MOHIT21/Calculator-apk-in-kotlin",
        "https://github.com/EH-GD-MOHIT21/Calculator-apk-in-kotlin",
        "./projectimgs/cal.jpg",
        "April 2021"
    ],
    [
        "Music Player",
        "A music player website made with HTML, CSS, JavaScript, SCSS. Implemented Custom Animation using JavaScript. Day/Night mode Available. Added Event Listener on Progress Bar. Loop song/Shuffle Song Features Available Keyboard Keys Binded with Player and some more JavaScript Based Features.",
        "https://github.com/EH-GD-MOHIT21/musicwala/tree/version2.2",
        "https://eh-gd-mohit21.github.io/musicwala/",
        "./projectimgs/mw.png",
        "July 2021"
    ]
]

export default function Projects() {
    return (
        <div>
            <PersistentDrawerLeft hover="Projects"/>
            <div className="headerprojects">
                <h1>Projects</h1>
                <ShortTextIcon className={useStyles().shorttext} />
            </div>
            <div className="cardprojectparent">
                {data.map((subdata,index)=>{
                    return(<Projectchunk subdata={subdata} index={index}/>)
                })}
            </div>
            <div className="warningprojects">
                <footer>* There might be delay/failure to load some resources in view live option due to the limitation of hosting providers.</footer>
            </div>
        </div>
    )
}
