import React from "react";
import Certificatehacker from './certificatecards/certificatehacker';
import Hackerbadge from './badgeshacker/hackerbadge';
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

export default function Trainingschunk() {
  return (
    <Typography component={"div"}>
      <div className="eduheader">
        <h1>Trainings and Events</h1>
        <ShortTextIcon className={useStyles().shorttext} />
      </div>
      <div className="wrapper">
        <div className="center-line"></div>


        <div className="row row-2">
          <section>
            <LocationOnIcon className="icon" />
            <div className="details">
              <span className="title">Competitive Programmer at leetcode.com</span>
              <span className="dateedu">March 2022 - Current</span>
            </div>
            <a href="https://leetcode.com/experimentallyf/" target="_blank">leetcode.com</a>
            <div className="bottom">
              <p>
                Currently solved 100+ Problems in different data structures including arrays, linked list, map and BSTs.
              </p>
            </div>
          </section>
        </div>


        <div className="row row-2">
          <section>
            <LocationOnIcon className="icon" />
            <div className="details">
              <span className="title">Machine Learning with Python</span>
              <span className="dateedu">May 2021 - June 2021</span>
            </div>
            <a href="https://courses.cognitiveclass.ai/certificates/275a4b0e72314b428830699bb3037511" target="_blank">cognitiveclass.ai</a>
            <div className="bottom">
              <p>
                Learnt different types of learnings like supervised,
                unsupervised, reinforcement. Build some projects with Flower
                prediction (K. Neighbour classifier), recommendation system,
                house rate prediction (Regression)
              </p>
            </div>
          </section>
        </div>

        <div className="row row-2">
          <section>
            <LocationOnIcon className="icon" />
            <div className="details">
              <span className="title">Competitive Programmer at Codechef</span>
              <span className="dateedu">January 2021 - May 2021</span>
            </div>
            <a
                href="https://www.codechef.com/users/hacker21ethics"
                target="_blank"
              >
                CodeChef.com
            </a>
            <p>
              Participated in several lunchtime, cook-off, long challenges at
              codechef and have a overall rating of 1828 with
              <div class="rating-star">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              .
            </p>
          </section>
        </div>

        <div className="row row-2">
          <section>
            <LocationOnIcon className="icon" />
            <div className="details">
              <span className="title">Advent of Code</span>
              <span className="dateedu">
                1 December 2020 - 25 December 2020
              </span>
            </div>
            <p>
              Advent of Code is an annual set of Christmas-themed computer
              programming challenges that follow an Advent calendar. A 25 days
              event, each day unlocks 2 puzzles to solve.
            </p>
            <div className="bottom">
              <i>Receive 48⭐ out of 50⭐</i>
            </div>
          </section>
        </div>

        <div className="row row-2">
          <section>
            <LocationOnIcon className="icon" />
            <div className="details">
              <span className="title">Ethical Hacking</span>
              <span className="dateedu">May 2020 - July 2020</span>
            </div>
            <a href="https://trainings.internshala.com/verify_certificate?certificateNumber=ED1E72AE-08D9-BB60-6C5E-8FA44B198191" target="_blank">internshala.com</a>
            <div className="bottom">
              <p>
                Learnt basics of web development with php as backend and mysql
                as database. Learnt to perform some OWASP bugs (SQL injection,
                Cross Site Scripting, Dictionary Based Brute Force Attacks etc.)
                as an ethical hacker.
              </p>
            </div>
          </section>
        </div>

        <div className="row row-2 lastrowrow-2">
          <section>
            <LocationOnIcon className="icon" />
            <div className="details">
              <span className="title">
                Competitive Programmer at Hackerrank
              </span>
              <span className="dateedu">August 2019 - Current</span>
            </div>
            <a href="https://www.hackerrank.com/Hacker_021Ethics" target="_blank">Hackerrank.com</a>
            <p>
              Solved more than 500 problems on hackerrank in various types of
              programming languages like c/c++/java/Python. Participated in 30
              days of code and 10 days of JavaScript. I have 5 stars in Java,
              Python, c++, SQL and 6 stars in problem solving.
            </p>
            <h4 className="m-0">Verified Skills</h4>
              <div className="bottom mt-x">
              <Certificatehacker />
              </div>
            <h4 className="m-0">Verified Badges</h4>
            <div className="mt-x">
              <Hackerbadge />
            </div>
          </section>
        </div>
      </div>
    </Typography>
  );
}
