import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { motion } from "framer-motion";
import "./Results.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Results({ error, loading, breaches, showtext }) {
  const [expanded, setExpanded] = React.useState(
    Array(breaches.length).fill(false)
  );

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="resultComponent">
      {error && (
        <motion.p
          className="error-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      )}
      {breaches.length > 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ color: "#CD5C5C", textAlign: "center" }}
          >
            Breaches found: Pwned in {breaches.length} data breaches
          </motion.h2>
          <div className="cardBoxes">
            {breaches.map((breach, index) => (
              <motion.div
                className="card"
                key={breach.Name}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ maxWidth: 345 }}>
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
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      dangerouslySetInnerHTML={{ __html: breach.Description }}
                    />
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded[index]}
                      onClick={() => handleExpandClick(index)}
                      aria-expanded={expanded[index]}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Compromised Data:</Typography>
                      <Typography paragraph>
                        {breach.DataClasses.join(", ")}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      {breaches.length === 0 && !loading && !error && showtext && (
        <motion.div
          className="no-breach"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Great news! You are safe!</p>
          <p>No breaches found for this email/account.</p>
        </motion.div>
      )}
    </div>
  );
}
