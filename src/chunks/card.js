import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    background: "transparent"
  },
  media: {
    height: "250px",
    paddingTop: '56.25%', // 16:9
    borderRadius: "50%",
    width: "250px",
    display: "block",
    margin: "20px auto",
    border: "10px solid white",
    boxShadow: "0px 0px 1px rgb(0 0 0 / 50%);"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  centr:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  txtcntr:{
    textAlign: "center"
  },
  iconscontainerhome:{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  curpointer:{
    cursor: "pointer"
  },
  colpup:{
    color: "purple",
  }
}));

export default function MyCard() {
  const classes = useStyles();

  return (
      <div className="homecarddynamicwidth">
        <div className={classes.centr}>
    <Card className={classes.root} elevation={0}>
      <CardMedia
        className={classes.media}
        image="https://raw.githubusercontent.com/EH-GD-MOHIT21/EH-GD-MOHIT21/main/mohit.jpeg"
        title="Mohit Satija"
      />
      <CardContent>
        <Typography variant="body2" component={'div'} color="textSecondary" className={classes.txtcntr}>
          <h1 className="color-gradient">Mohit Satija</h1>
          <h4 id="typing">A Youtuber</h4>
        </Typography>
        <div className={classes.iconscontainerhome}>
          <a className={classes.colpup} href="https://github.com/EH-GD-MOHIT21/" target="_blank"><GitHubIcon className="Gith"/></a>
          <a className={classes.colpup} href="https://www.instagram.com/i_m_mohit021/" target="_blank"><InstagramIcon className="Insh"/></a>
          <a className={classes.colpup} href="https://www.youtube.com/channel/UC41ksagdFtAUKfSsNzGubhA" target="_blank"><YouTubeIcon className="Youh"/></a>
          <a className={classes.colpup} href="https://www.linkedin.com/in/mohit-satija-8591a1221/" target="_blank"><LinkedInIcon className="Linh"/></a>
        </div>
      </CardContent>
    </Card>
    </div>
    <div className="footercontentstamp">
            <h4>Updated on: 6 Sept 2022</h4>
    </div>
    </div>
  );
}
