import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

export default function BasicExample() {
	return (
		<>
			<Router>
				<Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
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
							<Nav.Link
								style={{ fontSize: "18px" }}
								eventKey="1"
								as={Link}
								to={"/"}
							>
								HOME
							</Nav.Link>
							<Nav.Link
								style={{ fontSize: "18px" }}
								eventKey="2"
								as={Link}
								to={"/projects"}
							>
								PROJECTS
							</Nav.Link>
							<Nav.Link
								style={{ fontSize: "18px" }}
								as={Link}
								eventKey="3"
								to={"/resume"}
							>
								RESUME
							</Nav.Link>

							{/* Future Use
								<Nav.Link
								style={{ fontSize: "18px" }}
								as={Link}
								eventKey="4"
								to={"/contact"}
							>
								CONTACT
							</Nav.Link> */}
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<div>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/resume">
							<Resume />
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
