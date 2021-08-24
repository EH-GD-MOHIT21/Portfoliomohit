import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Eduicon from './eduicon';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "purple",
    top: "10px",
    left: "21px",
    borderRadius: "50px"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#e1f5fe !important"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nhide:{
    display: "block"
  },
  design:{
    textDecoration: "none",
    color: "inherit"
  },
  active:{
    backgroundColor: "red"
  },
  zeropad:{
    padding: "0px !important"
  }
}));

export default function PersistentDrawerLeft(props) {
  const urls = [
    "/",
    "/education",
    "/projects",
    "/aboutme",
    "/contactme",
  ]
  // urls order must be similar to downwards objects...
  const classes = useStyles();
  const theme = useTheme();

  var setthis = false;

  if(window.innerWidth>=740)
    setthis = true
  else
    setthis = false

  const [open, setOpen] = React.useState(setthis);

  const [size, setSize] = React.useState(window.innerWidth)
  useEffect(() => {
    
    window.addEventListener("resize", updateWidth);

    
    console.log("rerender?");
    if(window.innerWidth>=740)
    setthis = true
  else
    setthis = false

    setOpen(setthis)
  
    return () => window.removeEventListener("resize", updateWidth);
}, [size])

  const updateWidth = () => {
    setSize(window.innerWidth)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton,"ccopen", open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={clsx(classes.drawerHeader,"ccclose")}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className="margintopauto">
          {['Home', 'Education', 'Projects'].map((text, index) => (
            <Link to={urls[index]} key={text} className={props.hover===text?clsx(classes.design,"bgnavactive"):classes.design}>
            <ListItem button key={text} className={props.hover===text?clsx(classes.design,"bgnavactive"):classes.design}>
              <ListItemIcon>{index === 0 ? <HomeIcon /> : index === 1 ? <Eduicon /> : index === 2 ? <WorkIcon /> : ""}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
        </List>
        
        <List className={classes.zeropad}>
          {['About me','Contact me'].map((text, index) => (
            <Link to={urls[index+3]} key={text} className={props.hover===text?clsx(classes.design,"bgnavactive"):classes.design}>
            <ListItem button key={text} className={props.hover===text?clsx(classes.design,"bgnavactive"):classes.design}>
              <ListItemIcon>{index % 2 === 0 ? <SentimentVerySatisfiedIcon /> : <PermContactCalendarIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
