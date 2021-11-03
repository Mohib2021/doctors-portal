import { Grid } from "@mui/material";
import React from "react";
import HeroSection from "../Home/HeroSection";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import AppointmentTime from "./AppointmentTime";
function Appointment() {
	const [dateValue, setDateValue] = React.useState(new Date());

	return (
		<div>
			<HeroSection>
				<Grid item xs={12} md={5} sx={{ color: "black" }}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<StaticDatePicker
							displayStaticWrapperAs="desktop"
							openTo="day"
							value={dateValue}
							shouldDisableDate={isWeekend}
							onChange={(newValue) => {
								setDateValue(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</Grid>
			</HeroSection>
			<AppointmentTime dateValue={dateValue}></AppointmentTime>
		</div>
	);
}

export default Appointment;
