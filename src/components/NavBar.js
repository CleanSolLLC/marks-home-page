import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

export default function BasicExample() {
	return (
		<>
			<Router>
				<Navbar bg="primary" variant="dark">
					<Nav className="ml-auto">
						<a
							href="https://www.linkedin.com/in/mark-may-a727998/"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={brands("linkedin")}
								style={{
									width: "20px",
									height: "20px",
									padding: 2,
									color: "white",
								}}
							/>
						</a>
						&nbsp; &nbsp;
						<a
							href="https://github.com/CleanSolLLC"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={brands("github")}
								style={{
									width: "20px",
									height: "20px",
									padding: 2,
									color: "white",
								}}
							/>
						</a>{" "}
						&nbsp; &nbsp;
						<a
							href="https://medium.com/@mamark90"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={brands("medium")}
								style={{
									width: "20px",
									height: "20px",
									padding: 2,
									color: "white",
								}}
							/>
						</a>{" "}
						&nbsp; &nbsp;
						<a
							href="https://www.youtube.com/channel/UCBOVvppvSR0ggPs8EPDfNUg/videos"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={brands("youtube")}
								style={{
									width: "20px",
									height: "20px",
									padding: 2,
									color: "white",
								}}
							/>
						</a>{" "}
						&nbsp; &nbsp;
						<a
							href="mailto:mamark90@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<FontAwesomeIcon
								icon={solid("envelope")}
								style={{
									width: "20px",
									height: "20px",
									padding: 2,
									color: "white",
								}}
							/>
						</a>{" "}
						&nbsp; &nbsp;
					</Nav>

					<Nav className="ms-auto links">
						<Nav.Link style={{ fontSize: "18px" }} as={Link} to={"/"}>
							HOME
						</Nav.Link>
						<Nav.Link style={{ fontSize: "18px" }} as={Link} to={"/projects"}>
							PROJECTS
						</Nav.Link>
						<Nav.Link href="#resume">RESUME</Nav.Link>
						<Nav.Link style={{ fontSize: "18px" }} as={Link} to={"/contact"}>
							CONTACT
						</Nav.Link>
					</Nav>
				</Navbar>

				<div>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}
