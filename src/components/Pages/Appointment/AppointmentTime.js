import { Typography } from "@mui/material";
import React from "react";

function AppointmentTime({ dateValue }) {
	return (
		<div>
			<Typography
				variant="h5"
				sx={{ fontWeight: "500", textAlign: "center", my: 4 }}
			>
				Available Appointment on {dateValue.toDateString()}
			</Typography>
		</div>
	);
}

export default AppointmentTime;
