import React from "react";
import SingleMatch from "./SingleMatch";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import GridList from '@material-ui/core/GridList';
import AddIcon from "@material-ui/icons/Add";
import matchService from "../../services/MatchesService";
import userService from "../../services/UserService";
// import "./Flights.css"
import { Button } from "@material-ui/core";
// import videoSource from '../../images/bgvideo.mp4';

// import '../../App.css';
import './title.css';
const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(2)
  }
}))


const Matches = (props) => {
 
  const [matches, setMatches] = React.useState([]);
  const classes = useStyles();

  const getData = () => {
    matchService
      .getMatches()
      .then((data) => {
        setMatches(data.matches);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  React.useEffect(getData,[]);
  
  const handleNewMatchClick = () => {
    console.log(props);
    props.history.push("/matches/new");
  };
  return (
    <div>
     


      <div id="today" style={{textAlign:'center', fontSize:'3rem', color: '#8b95d2', marginTop:'30px', marginBottom:'30px'}}>Available Teams</div> 
  
      {matches.length == 0 ? (
        <p>There are no matches</p>
      ) : (
        <div className={classes.root}>
        <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
      
      
          {matches.map((match, index) => (
            <Grid item xs={12} sm={6} md={3} spacing={5} className="abc">
              <span className="abc">
            <SingleMatch key={index} match={match} history= {props.history} onDelete={getData}/>
            </span>
                
            </Grid>
          ))}
      

      </Grid>
        </div>
      
       
      )}
     </div>
    
  );
};

export default Matches;
