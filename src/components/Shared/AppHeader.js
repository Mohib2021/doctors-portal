import React from "react";
import Header from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { useHistory } from "react-router";

function AppHeader() {
	const history = useHistory();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Header position="static">
				<Container>
					<Toolbar style={{ padding: "0px" }}>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Doctor's Portal
						</Typography>
						<Button onClick={() => history.push("/home")} color="inherit">
							Home
						</Button>
						<Button
							onClick={() => history.push("/appointment")}
							color="inherit"
						>
							Appointment
						</Button>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</Container>
			</Header>
		</Box>
	);
}

export default AppHeader;
