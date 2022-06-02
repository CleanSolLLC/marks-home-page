import { Container, Card, Button } from "react-bootstrap";

import HeaderRubyLogo from "../images/header-ruby-logo.png";
import webDevBadges from "../images/webDevBadges.png";
import postgresql from "../images/postgresql.jpg";
import vscode from "../images/vscode.png";
import rails from "../images/rails.jpg";
import bstrap from "../images/bstrap.png";

const MyMealPlanner = () => {
	return (
		<>
			<Container>
				<Card>
					<Card.Body>
						<Card.Title>My Meal Planner</Card.Title>
						<Card.Text>
							Users query nutrition information on food items as well as select
							from over 300,000 recipes <hr />
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
									design Frontend hosted on GitHub pages and the backend hosted
									on Heroku
								</li>
							</ul>
						</Card.Text>
					</Card.Body>
					<Card.Footer style={{ background: "white" }}>
						<img src={HeaderRubyLogo} style={{ width: 45, height: 45 }} />
						<img src={rails} style={{ width: 45, height: 45 }} />
						<img src={webDevBadges} style={{ width: 120, height: 60 }} />
						<img src={postgresql} style={{ width: 70, height: 70 }} />
						<img src={vscode} style={{ width: 90, height: 60 }} />
						<img src={bstrap} style={{ width: 80, height: 60 }} />
					</Card.Footer>
				</Card>
			</Container>
		</>
	);
};
export default MyMealPlanner;
