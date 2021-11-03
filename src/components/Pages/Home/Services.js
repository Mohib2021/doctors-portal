import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
function Services() {
	return (
		<Container sx={{ flexGrow: 1 }}>
			<Typography
				variant="h6"
				sx={{ textAlign: "center", mb: 2, mt: 4, color: "#06C5BA" }}
			>
				Our Services
			</Typography>
			<Typography
				variant="h4"
				sx={{ textAlign: "center", fontWeight: "600", color: "#323E3E" }}
			>
				Services We Provide{" "}
			</Typography>
			<Grid container spacing={2} sx={{ my: 2 }}>
				<Grid item xs={12} sm={6} md={4}>
					<Grid sx={{ textAlign: "center" }}>
						<img src={fluoride} alt="" />
						<h3>Fluoride Treatment</h3>
						<p style={{ color: "#7C7C7C" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus nobis iusto aut quibusdam libero ea voluptatem eius.
							Architecto, enim! Vel.
						</p>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Grid sx={{ textAlign: "center" }}>
						<img src={cavity} alt="" />
						<h3>Cavity Filling</h3>
						<p style={{ color: "#7C7C7C" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus nobis iusto aut quibusdam libero ea voluptatem eius.
							Architecto, enim! Vel.
						</p>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Grid sx={{ textAlign: "center" }}>
						<img src={whitening} alt="" />
						<h3>Teeth Whitening</h3>
						<p style={{ color: "#7C7C7C" }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus nobis iusto aut quibusdam libero ea voluptatem eius.
							Architecto, enim! Vel.
						</p>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Services;
