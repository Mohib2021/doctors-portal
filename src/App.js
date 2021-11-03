import "./App.css";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "./components/Shared/AppHeader";
import Appointment from "./components/Pages/Appointment/Appointment";
import NotFound from "./components/Pages/NotFound/NotFound";
function App() {
	return (
		<Router>
			<AppHeader> </AppHeader>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/home">
					<Home></Home>
				</Route>
				<Route path="/appointment">
					<Appointment />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
