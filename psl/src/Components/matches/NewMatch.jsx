import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import matchService from "../../services/MatchesService";
import Auth from "../auth/Auth";

const NewMatch = (props) => {
  const [name, setName] = React.useState("");
  const [image_url, setImage_url] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [teama, setTeama] = React.useState("");
  const [teamb, setTeamb] = React.useState("");
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState("");
  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{fontSize:"3rem", textAlign:'center', marginTop:'25px', fontStyle:"bold"}}>Add New Match</div> 
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
        <Grid item xs={9} >
          <Button
          style={{marginLeft:'270px', backgroundColor:'#6e78b5', fontStyle:'bold', color: 'white', marginBottom:'30px', marginTop:'10px'}}
            variant="contained"
            
            onClick={(e) => {
              matchService
                .addMatch({ name, image_url, logo, tagline, city,  date,  teama, teamb})
                .then((data) => {
                  props.history.push("/");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewMatch;
