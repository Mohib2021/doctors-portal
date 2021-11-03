import { Button, Grid } from "@mui/material";
import React from "react";
import AppointmentSection from "./AppointmentSection";
import HeroSection from "./HeroSection";
import Inf from "./Inf";
import Services from "./Services";

function Home() {
	return (
		<div>
			<HeroSection>
				<Grid item xs={12} md={5}>
					<h1>Your New Smile Starts Here</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						sapiente, commodi labore quos eveniet culpa debitis doloremque
						veniam quo harum! Odit quod ab facere ipsam?
					</p>
					<Button variant="contained"> Get Appointment</Button>
				</Grid>
			</HeroSection>
			<Inf></Inf>
			<Services></Services>
			<AppointmentSection></AppointmentSection>
		</div>
	);
}

export default Home;
