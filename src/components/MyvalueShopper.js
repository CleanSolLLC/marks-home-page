import { Container, Card, Button } from "react-bootstrap";

import rails from "../images/rails.jpg";
import webDevBadges from "../images/webDevBadges.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import postgresql from "../images/postgresql.jpg";
import vscode from "../images/vscode.png";
import bstrap from "../images/bstrap.png";
import HeaderRubyLogo from "../images/header-ruby-logo.png";

const MyvalueShopper = () => {
	return (
		<>
			<Container>
				<Card style={{ width: "18rem" }}>
					<Card.Body>
						<Card.Title>My Value Shopper</Card.Title>
						<Card.Text>
							Application maintains a list of Amazon Items for users who are not
							ready to purchase
							<hr />
							<ul>
								<li>
									Developed application using Ruby on Rails on the backend,
									React JavaScript on the frontend, Redux for state management
									and PostgreSQL for the database
								</li>

								<li>
									Designed models in Rails to securely make external API calls
									to a third-party API site that scrapes the Amazon.com website
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
					<Card.Footer style={{ background: "white" }}>
						<img src={HeaderRubyLogo} style={{ width: 45, height: 45 }} />
						<img src={rails} style={{ width: 45, height: 45 }} />
						<img src={webDevBadges} style={{ width: 120, height: 60 }} />
						<img src={react} style={{ width: 65, height: 65 }} />
						<img src={redux} style={{ width: 65, height: 65 }} />
						<img src={postgresql} style={{ width: 70, height: 70 }} />
						<img src={vscode} style={{ width: 90, height: 60 }} />
						<img src={bstrap} style={{ width: 80, height: 60 }} />
					</Card.Footer>
				</Card>
			</Container>
		</>
	);
};
export default MyvalueShopper;
