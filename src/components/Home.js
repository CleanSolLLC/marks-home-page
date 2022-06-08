import { Container, Card, CardGroup, Figure, Badge } from "react-bootstrap";

import MarkPic from "../images/MarkPic.jpg";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const Home = () => {
	return (
		<>
			<br />

			<Container>
				<CardGroup>
					<Card>
						<Figure>
							<Figure.Image
								width={200}
								height={200}
								alt="Mark's Profile Image"
								src={MarkPic}
							/>
							<Slide direction="right">
								<br />
								<h1>Mark May</h1>
								<h4>
									<Badge bg="secondary">Full Stack Developer</Badge>&nbsp;
									<Badge bg="secondary">Front-End Developer</Badge>&nbsp;
									<Badge bg="secondary">Back-End Developer</Badge>&nbsp;
									<Badge bg="secondary">An Entrepreneur Who Codes</Badge>&nbsp;
								</h4>
							</Slide>
						</Figure>
						<Fade triggerOnce direction="up">
							<CardGroup>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>About Me</Card.Title>
										<Card.Text>
											After 23 years of starting and scaling a high-performance
											customer centric commercial cleaning company, I am seeking
											a career transition to the software development field. My
											goal is to combine my experience as an entrepreneur with
											my technical skills to help small and medium sized
											businesses achieve their mission through the design,
											development, deployment, and maintenance of software
											applications.
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<small className="text-muted">
											Last updated 3 mins ago
										</small>
									</Card.Footer>
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title</Card.Title>
										<Card.Text>
											This card has supporting text below as a natural lead-in
											to additional content.{" "}
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<small className="text-muted">
											Last updated 3 mins ago
										</small>
									</Card.Footer>
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Education</Card.Title>
										<Card.Text>
											<ul>
												<li>
													Flatiron School, New York, NY
													<br />
													Online Software Engineering Program
													<br /> April, 2022
												</li>
												<br />
												<li>
													Bates College, Lewiston ME <br /> Bachelor of Arts,
													Political Science <br /> May, 1990
												</li>
											</ul>
										</Card.Text>
									</Card.Body>
									<Card.Footer>
										<small className="text-muted">
											Last updated 3 mins ago
										</small>
									</Card.Footer>
								</Card>
							</CardGroup>
						</Fade>
						{/* <Card.Body>
							<Fade bottom>
								<Card.Title>What I do</Card.Title>
								<Card.Text>
									The motto at the Flatiron School is “Change Things”. For me,
									this is not simply a phrase but a mission that I have
									undertaken since beginning my coding journey two years ago.
									The inspiration behind all of my projects at Flatiron have
									been based on the idea of providing some value or utility that
									helps to make a storyline just a little bit better. Flatiron
									has trained me to think like a software engineer, now it is
									time to build upon that training in an organization that is
									congruent with my mission. Changing things is seldom linear
									and does not take place in a vacuum. It requires a commitment
									to lifelong learning, embracing learning from others, stepping
									outside of my comfort zone to openly contribute to a thought
									or an idea and finally by sharing the knowledge and experience
									that I have learned with others. If you have a project idea or
									need an evaluation of your code, let's talk!
								</Card.Text>
							</Fade>
						</Card.Body> */}
						{/* <Card.Footer>
							<Button size="sm" variant="primary">
								Contact Me
							</Button>
						</Card.Footer> */}
					</Card>
				</CardGroup>
				{/* </Rotate> */}
			</Container>

			{/* </Zoom> */}
			<br />
		</>
	);
};
export default Home;
