import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import heroImg from "../../../images/chair.png";
import "./HeroSection.css";
function HeroSection({ children }) {
	return (
		<div className="hero-section">
			<Container sx={{ flexGrow: 1 }}>
				<Grid
					className="grid"
					container
					spacing={2}
					style={{
						height: "85vh",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					{children}
					<Grid item xs={12} md={6}>
						<img style={{ width: "100%" }} src={heroImg} alt="" />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default HeroSection;
