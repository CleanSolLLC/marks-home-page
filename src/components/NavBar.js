import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Route, Link } from "react-router-dom";
import About from "./About";

function NavBar() {
	return (
		<>
			<Navbar bg="primary" collapseOnSelect expand="lg" variant="dark">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
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
								href="https://www.youtube.com/channel/UCBOVvppvSR0ggPs8EPDfNUg"
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
							<Nav.Link href="#about">ABOUT</Nav.Link>
							<Nav.Link href="#projects">PROJECTS</Nav.Link>
							<Nav.Link href="#videos">VIDEOS</Nav.Link>
							<Nav.Link href="#blogs">BLOGS</Nav.Link>
							<Nav.Link href="#resume">RESUME</Nav.Link>
							<Nav.Link href="#contact">CONTACT</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
export default NavBar;
