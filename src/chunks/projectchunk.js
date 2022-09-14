import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { purple } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { lime } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import clsx from "clsx";
import { Typography } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';

function selectrandom(){
    const mycolors = [red,orange,purple,pink,cyan,lime,teal]
    const choice = Math.floor(Math.random() * mycolors.length);
    const shades = [300,400,500];
    const choiceshades = Math.floor(Math.random() * shades.length);
    return mycolors[choice][shades[choiceshades]];
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard({subdata,index}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card key={index} className="cardprojectchild">
            <div key={subdata[0]} className="projectcard">
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: selectrandom() }} aria-label="recipe">
                            {subdata[0][0]}
                        </Avatar>
                    }
                    title={subdata[0]}
                    subheader={subdata[5]}
                />
                <div className="contentproject">
                    <CardMedia
                        component="img"
                        height="194"
                        image={subdata[4]}
                        alt={subdata[0]}
                    />

                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            className="marginunset"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                <p className={clsx("project_desc_" + index, "project_desc")}>
                                    {subdata[1]}<div className="footerproject">
                                        <a className="redirecturlicowrapper" href={subdata[2]} target="_blank"><GitHubIcon className="githubiconprojects" />Source</a>
                                        <a className="redirecturlicowrapper" href={subdata[3]} target="_blank"><VisibilityIcon className="liveiconprojects" /> Live</a>
                                    </div>
                                </p>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </div>
            </div>
        </Card>
    )
}