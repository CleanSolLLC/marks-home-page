import { Container, Card, Button, CardGroup } from "react-bootstrap";
import { useState } from "react";
import HeaderRubyLogo from "../images/header-ruby-logo.png";
import webDevBadges from "../images/webDevBadges.png";
import postgresql from "../images/postgresql.jpg";
import vscode from "../images/vscode.png";
import rails from "../images/rails.jpg";
import bstrap from "../images/bstrap.png";
import MyMealPlanner from "./MyMealPlanner";
import { Fade } from "react-awesome-reveal";

const MyMealPlannerInfo = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				<Fade triggerOnce direction="up">
					<Container>
						<CardGroup>
							<Card>
								<Button
									size="sm"
									style={{ position: "absolute", right: -2 }}
									onClick={() => setToggle(!toggle)}
								>
									x
								</Button>
								<Card.Body>
									<Card.Title>My Meal Planner</Card.Title>
									<Card.Text>
										Users query nutrition information on food items as well as
										select from over 300,000 recipes <hr />
										<ul>
											<li>
												Developed application using Ruby on Rails on the
												backend, JavaScript on the frontend, Bootstrap for CSS
												styling and PostgreSQL to persist data to a database
											</li>
											<li>
												Designed models in Rails to securely make external API
												calls to a third-party API site
											</li>
											<li>
												Incorporated Bootstrap containers to facilitate
												responsive design Frontend hosted on GitHub pages and
												the backend hosted on Heroku
											</li>
										</ul>
									</Card.Text>
								</Card.Body>
								<Card.Footer style={{ background: "white" }}>
									<img
										className="mx-auto"
										mx-auto
										src={HeaderRubyLogo}
										alt="Ruby Logo"
										style={{ width: 45, height: 45 }}
									/>
									&nbsp;&nbsp;
									<img
										className="mx-auto"
										mx-auto
										src={rails}
										alt="Rails Logo"
										style={{ width: 45, height: 45 }}
									/>
									&nbsp;&nbsp;
									<img
										className="mx-auto"
										mx-auto
										src={webDevBadges}
										alt="HTML, CSS, JavaScript Logo"
										style={{ width: 120, height: 60 }}
									/>
									&nbsp;&nbsp;
									<img
										className="mx-auto"
										src={postgresql}
										alt="PostgreSQL Logo"
										style={{ width: 70, height: 70 }}
									/>
									&nbsp;&nbsp;
									<img
										className="mx-auto"
										src={vscode}
										alt="VsCode Logo"
										style={{ width: 125, height: 60 }}
									/>
									&nbsp;&nbsp;
									<img
										className="mx-auto"
										src={bstrap}
										alt="Bootstrap Logo"
										style={{ width: 80, height: 60 }}
									/>
								</Card.Footer>
								<Card.Footer>
									<Button
										size="sm"
										href="https://youtu.be/VMXGTumM_XI"
										target="_blank"
									>
										Demo
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button
										size="sm"
										href="https://cleansolllc.github.io/my-meal-planner-frontend-hold/"
										target="_blank"
									>
										Hosted Application
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button
										size="sm"
										href="https://medium.com/@mamark90/using-github-pages-heroku-and-bootstrap-cards-in-my-javascript-rails-project-to-find-recipes-4399bee3d32a"
										target="_blank"
									>
										Blog
									</Button>
								</Card.Footer>
							</Card>
						</CardGroup>
					</Container>
				</Fade>
			) : (
				<MyMealPlanner />
			)}
		</>
	);
};
export default MyMealPlannerInfo;
