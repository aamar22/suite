import React, { useState } from "react";
import Sidenav from "../Components/Sidenav";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
	return (
		<div className="test">
      <Sidenav/>
         
		  <Card sx={{ maxWidth: 775,marginRight:"20px",  background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.3479516806722689) 53%, rgba(252,176,69,1) 100%)'}} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="Black" gutterBottom textAlign={"center"}>
          Over All
        </Typography>
		<Typography sx={{ fontSize: 14 }} color="Black" gutterBottom textAlign={"center"}>
         Account Number: 4444 56787 454875 34545
        </Typography>
		<Typography sx={{ fontSize: 14 }} color="Black" gutterBottom textAlign={"center"}>
          Saving Account(a/c) :$ 22323.00
        </Typography>
		<Typography sx={{ fontSize: 14 }} color="RED" gutterBottom textAlign={"center"}>
          Deposit(a/c):$ 00.0
        </Typography>
		<Typography sx={{ fontSize: 14 }} color="RED" gutterBottom textAlign={"center"}>
          Loan(a/c): $ 00.0
        </Typography>
		<Typography sx={{ fontSize: 14 }} color="RED" gutterBottom textAlign={"center"}>
          Status: Active
        </Typography>
       
      
      </CardContent>
    </Card>
	
		</div>
	);
};



export default Home;