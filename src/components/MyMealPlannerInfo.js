import { Container, Card, Button } from "react-bootstrap";
import { useState } from "react";
import HeaderRubyLogo from "../images/header-ruby-logo.png";
import webDevBadges from "../images/webDevBadges.png";
import postgresql from "../images/postgresql.jpg";
import vscode from "../images/vscode.png";
import rails from "../images/rails.jpg";
import bstrap from "../images/bstrap.png";
import MyMealPlanner from "./MyMealPlanner";
import Fade from "react-reveal/Fade";

const MyMealPlannerInfo = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			{!toggle ? (
				<Fade bottom>
					<Container>
						<Card>
							<Card.Body>
								<Card.Title>My Meal Planner</Card.Title>
								<Card.Text>
									Users query nutrition information on food items as well as
									select from over 300,000 recipes <hr />
									<ul>
										<li>
											Developed application using Ruby on Rails on the backend,
											JavaScript on the frontend, Bootstrap for CSS styling and
											PostgreSQL to persist data to a database
										</li>
										<li>
											Designed models in Rails to securely make external API
											calls to a third-party API site
										</li>
										<li>
											Incorporated Bootstrap containers to facilitate responsive
											design Frontend hosted on GitHub pages and the backend
											hosted on Heroku
										</li>
									</ul>
								</Card.Text>
							</Card.Body>
							<Card.Footer style={{ background: "white" }}>
								<img
									className="mx-auto"
									mx-auto
									src={HeaderRubyLogo}
									style={{ width: 45, height: 45 }}
								/>
								<img
									className="mx-auto"
									mx-auto
									src={rails}
									style={{ width: 45, height: 45 }}
								/>
								<img
									className="mx-auto"
									mx-auto
									src={webDevBadges}
									style={{ width: 120, height: 60 }}
								/>
								<img
									className="mx-auto"
									src={postgresql}
									style={{ width: 70, height: 70 }}
								/>
								<img
									className="mx-auto"
									src={vscode}
									style={{ width: 125, height: 60 }}
								/>
								&nbsp;&nbsp;
								<img
									className="mx-auto"
									src={bstrap}
									style={{ width: 80, height: 60 }}
								/>
							</Card.Footer>
							<Card.Footer>
								<Button onClick={() => setToggle(!toggle)}>
									Close Project
								</Button>
								&nbsp;&nbsp;&nbsp;
								<Button href="https://youtu.be/VMXGTumM_XI" target="_blank">
									Demo
								</Button>
								&nbsp;&nbsp;&nbsp;
								<Button
									href="https://cleansolllc.github.io/my-meal-planner-frontend-hold/"
									target="_blank"
								>
									Hosted Application
								</Button>
							</Card.Footer>
						</Card>
					</Container>
				</Fade>
			) : (
				<MyMealPlanner />
			)}
		</>
	);
};
export default MyMealPlannerInfo;
