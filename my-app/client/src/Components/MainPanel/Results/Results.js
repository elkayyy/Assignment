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
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Results.css';

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

export default function Results({ error, loading, breaches, showtext }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='resultComponent'>
            {error && <p className="error-message">{error}</p>}
            {breaches.length > 0 && (
                <div>
                    <h2 style={{ color: 'red', textAlign: "center" }}>Breaches found:</h2>
                    <div className='cardBoxes'>
                        {breaches.map((breach) => (
                            <Card sx={{ maxWidth: 345 }} key={breach.Name}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="breach">
                                            {breach.Name.charAt(0)}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={breach.Name}
                                    subheader={new Date(breach.BreachDate).toDateString()}
                                />
                                <CardMedia
                                    component="img"
                                    height="50"
                                    image={breach.LogoPath}
                                    alt={`${breach.Name} logo`}
                                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: breach.Description }} />
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Compromised Data:</Typography>
                                        <Typography paragraph>
                                            {breach.DataClasses.join(', ')}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
            {breaches.length === 0 && !loading && !error && showtext && (
                <div className="no-breach">
                    <p>Great news! You are safe!</p>
                    <p>No breaches found for this email.</p>
                </div>
            )}
        </div>
    );
}
