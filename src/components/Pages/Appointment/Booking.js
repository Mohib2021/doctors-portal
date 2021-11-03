import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function Booking({ booking }) {
	const { name, time, space } = booking;
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Grid sx={{ textAlign: "center", py: 3, boxShadow: "0px 0px 8px gray" }}>
				<Typography sx={{ fontWeight: "500", color: "info.main" }} variant="h5">
					{name}
				</Typography>
				<Typography sx={{ my: 1 }} variant="h6">
					{time}
				</Typography>
				<Typography sx={{ mb: 1 }}>{space} SPACE AVAILABLE</Typography>
				<Button variant="contained">Book Appointment</Button>
			</Grid>
		</Grid>
	);
}

export default Booking;
