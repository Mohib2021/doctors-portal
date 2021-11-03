import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Booking from "./Booking";
const bookings = [
	{
		id: 1,
		name: "Teeth Orthodonics",
		time: "08.00 AM - 09.00 AM",
		space: 10,
	},
	{
		id: 2,
		name: "Cosmetic Dentistry",
		time: "09.00 AM - 10.00 AM",
		space: 8,
	},
	{
		id: 3,
		name: "Teeth Cleaning",
		time: "10.00 AM - 11.00 AM",
		space: 9,
	},
	{
		id: 4,
		name: "Cavity Protection",
		time: "11.00 AM - 12.00 PM",
		space: 5,
	},
	{
		id: 5,
		name: "Pediatric Dental",
		time: "06.00 PM - 07.00 PM",
		space: 10,
	},
	{
		id: 6,
		name: "Oral Surgery",
		time: "07.00 PM - 08.00 PM",
		space: 10,
	},
];

function AppointmentTime({ dateValue }) {
	return (
		<Container>
			<Typography
				variant="h5"
				sx={{ fontWeight: "500", textAlign: "center", my: 4 }}
			>
				Available Appointment on {dateValue.toDateString()}
			</Typography>
			<Grid container spacing={3} sx={{ mb: 3 }}>
				{bookings.map((booking) => (
					<Booking key={booking.id} booking={booking} />
				))}
			</Grid>
		</Container>
	);
}

export default AppointmentTime;
