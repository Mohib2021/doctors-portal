import React from "react";

import { Container, Grid } from "@mui/material";

function Inf() {
	return (
		<Container sx={{ flexGrow: 1 }}>
			<Grid container spacing={2} sx={{ my: 2 }}>
				<Grid item xs={12} sm={6} md={4}>
					<Grid
						sx={{ bgcolor: "#06C5BA", p: 1, color: "primary" }}
						style={{ color: "white" }}
					>
						<h3>Opening Hours</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Grid sx={{ bgcolor: "#323E3E", p: 1 }} style={{ color: "white" }}>
						<h3>Visit our Location</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Grid
						sx={{ bgcolor: "#06C5BA", p: 1, color: "primary" }}
						style={{ color: "white" }}
					>
						<h3>Contact us Now</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Inf;
