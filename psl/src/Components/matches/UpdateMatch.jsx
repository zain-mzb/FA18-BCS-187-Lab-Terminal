import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import matchService from "../../services/MatchesService";
import Admin from "../auth/Admin";

const UpdateMatch = (props) => {
  const [name, setName] = React.useState("");
  const [image_url, setImage_url] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [teama, setTeama] = React.useState("");
  const [teamb, setTeamb] = React.useState("");
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState("");

  const id = props.match.params.id;

  React.useEffect(() => {
    matchService.getSingleMatch(id).then((data) => {
      setName(data.name);
      setImage_url(data.image_url);
      setLogo(data.logo);
      setTagline(data.tagline);
      setCity(data.city);
      setDate(data.date);
      setTeama(data.teama);
      setTeamb(data.teamb);
      
    });
  }, []);
  return (
 
    // <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{fontSize:"3rem", textAlign:'center', marginTop:'25px', fontStyle:"bold"}}>Update Match</div>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} style={{border: '4px solid #6e78b5', padding:'50px', backgroundColor:'#c8cdf1' }}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
       <TextField
          style={{marginTop:'7px'}}
            label="Image"
            fullWidth
            value={image_url}
            onChange={(e) => {
              setImage_url(e.target.value);
            }}
          />
         <TextField
          style={{marginTop:'7px'}}
            label="Logo"
            fullWidth
            value={logo}
            onChange={(e) => {
              setLogo(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Tagline"
            fullWidth
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="City"
            fullWidth
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Date"
            fullWidth
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Team A"
            fullWidth
            value={teama}
            onChange={(e) => {
              setTeama(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Team B"
            fullWidth
            value={teamb}
            onChange={(e) => {
              setTeamb(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            style={{marginLeft:'270px', backgroundColor:'#6e78b5', fontStyle:'bold', color: 'white', marginBottom:'30px', marginTop:'10px'}}
            onClick={(e) => {
              matchService
                .updateMatch(id, { name, image_url, logo, tagline, city, date, teama, teamb })
                .then((data) => {
                  console.log(data);
                  props.history.push("/");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    // </Admin>
  );
};

export default UpdateMatch;
