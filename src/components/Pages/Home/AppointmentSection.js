import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import doctor from "../../../images/doctor.png";
function AppointmentSection() {
	return (
		<Box sx={{ bgcolor: "#413E3E" }}>
			<Container sx={{ flexGrow: 1 }}>
				<Grid container spacing={2} sx={{ my: 4, mt: 8, alignItems: "center" }}>
					<Grid item xs={12} sm={5} md={5}>
						<Grid>
							<img
								width="100%"
								style={{ marginTop: "-120px" }}
								src={doctor}
								alt=""
							/>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={7} md={7}>
						<Grid>
							<Typography variant={"h6"} sx={{ color: "primary.main" }}>
								APPOINTMENT
							</Typography>
							<Typography
								sx={{ fontWeight: 500, color: "white" }}
								variant={"h4"}
							>
								Make an appointment Today
							</Typography>
							<p style={{ color: "white" }}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi dicta ea dolore, nobis, ex molestiae accusantium
								laboriosam, vel incidunt a cum eos velit perspiciatis quis?
							</p>
							<Button variant="contained">Learn More</Button>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default AppointmentSection;
