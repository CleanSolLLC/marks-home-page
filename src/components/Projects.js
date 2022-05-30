import {
	Container,
	Card,
	Button,
	CardGroup,
	Figure,
	Badge,
} from "react-bootstrap";

import MyvalueShopper from "../images/MyvalueShopper.png";
import MyMealPlanner from "../images/MyMealPlanner.png";
import CTCovidTracker from "../images/CTCovidTracker.png";
import RubyonRails from "../images/RubyonRails.png";

const Projects = () => {
	return (
		<>
			<br />
			<br />
			<Container>
				<CardGroup>
					<Card>
						<Card.Img
							variant="top"
							src={MyvalueShopper}
							alt="My Value Shopper Application Image"
						/>
						<Card.Body>
							<Card.Title>My Value Shopper</Card.Title>
							<Card.Text>
								Application maintains a list of Amazon Items for users who are
								not ready to purchase
								<hr />
								<ul>
									<li>
										Developed application using Ruby on Rails on the backend,
										React JavaScript on the frontend, Redux for state management
										and PostgreSQL for the database
									</li>

									<li>
										Designed models in Rails to securely make external API calls
										to a third-party API site that scrapes the Amazon.com
										website
									</li>

									<li>
										Utilized JSON Web Tokens for server-side authentication and
										JWT and localStorage to store encrypted user information
										client side. Incorporated Bootstrap containers to facilitate
										responsive design
									</li>
								</ul>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
							<img src={RubyonRails} style={{ width: 75, height: 75 }} />
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src={MyMealPlanner}
							alt="My Meal Planner Application Image"
						/>
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
										Designed models in Rails to securely make external API calls
										to a third-party API site
									</li>
									<li>
										Incorporated Bootstrap containers to facilitate responsive
										design Frontend hosted on GitHub pages and the backend
										hosted on Heroku
									</li>
								</ul>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img
							variant="top"
							src={CTCovidTracker}
							alt="CT Covid Tracker Application Image"
						/>
						<Card.Body>
							<Card.Title>State of CT Covid Tracker</Card.Title>
							<Card.Text>
								Query and graph of Connecticut COVID-19 data at the state, town,
								age, gender, and ethnic level
								<hr />
								<ul>
									<li>
										Implemented Ruby on Rails MVC architectural pattern to
										provide a rapid and seamless integration between the user
										interface and the server
									</li>
									<li>
										Utilized Socrata Soda gem to make external API calls to the
										CT Open Data Portal{" "}
									</li>

									<li>
										Modeled database schema to persist data with Active Record,
										PostgreSQL, and Ruby on Rails{" "}
									</li>

									<li>
										Added Devise gem as a dependency for user authentication
										with a username and password or with OAuth 2.0 to log in
										using Google credentials{" "}
									</li>
								</ul>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
				</CardGroup>
			</Container>
		</>
	);
};
export default Projects;
