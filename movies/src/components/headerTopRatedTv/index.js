import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const TopRatedTvHeader = (props) => {
  const topRatedTv = props.topRatedTv;
  const navigate = useNavigate();

  //console.log(top)

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      

      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TopRatedTvHeader;