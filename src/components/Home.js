import {
	Container,
	Card,
	CardGroup,
	Figure,
	Badge,
	Row,
	Col,
} from "react-bootstrap";

import MarkPic from "../images/MarkPic.jpg";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import { CodeSquare } from "react-bootstrap-icons";
import { Mortarboard } from "react-bootstrap-icons";
import { FileEarmarkPerson } from "react-bootstrap-icons";

const Home = () => {
	return (
		<>
			<br />

			<Container>
				<Row>
					<Col>
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
											<Badge bg="secondary">An Entrepreneur Who Codes</Badge>
											&nbsp;
										</h4>
									</Slide>
								</Figure>
								<Fade triggerOnce direction="up">
									<CardGroup>
										<Card>
											<FileEarmarkPerson size={40} />
											<Card.Body>
												<Card.Title>About Me</Card.Title>
												<Card.Text>
													After 23 years of starting and scaling a
													high-performance customer centric commercial cleaning
													company, I am seeking a career transition to the
													software development field. My goal is to combine my
													experience as an entrepreneur with my technical skills
													to help small and medium sized businesses achieve
													their mission through the design, development,
													deployment, and maintenance of software applications.
												</Card.Text>
											</Card.Body>
											<Card.Footer>
												<small>
													“Life is a succession of lessons which must be lived
													to be understood” -Helen Keller
												</small>
											</Card.Footer>
										</Card>
										<Card>
											<CodeSquare size={35} />
											<Card.Body>
												<Card.Title>Skills</Card.Title>
												<Card.Text>
													<ul>
														<li>Ruby, Sinatra, Ruby on Rails</li>
														<li>JavaScript, React JS, Redux</li>
														<li>Object Oriented Programming</li>
														<li>HTML, CSS, Bootstrap</li>
														<li>SQL, PostgreSQL</li>
														<li>Git, GitHub</li>
														<li>MVC, Restful APIS</li>
														<li>Linux</li>
														<li>Heroku</li>
														<li>Test Driven Development</li>
													</ul>
												</Card.Text>
											</Card.Body>
											<Card.Footer>
												<small>
													It is ok to fail if there are lessons to be learned.
													“The biggest lesson I had in my life was failure“ -Tim
													Rice
												</small>
											</Card.Footer>
										</Card>
										<Card>
											<Mortarboard size={50} />
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
															Bates College, Lewiston ME <br /> Bachelor of
															Arts, Political Science <br /> May, 1990
														</li>
													</ul>
												</Card.Text>
											</Card.Body>
											<Card.Footer>
												<small>
													“Surround yourself with people who are better than
													you…” -Warren Buffet
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
					</Col>
				</Row>
			</Container>

			{/* </Zoom> */}
			<br />
		</>
	);
};
export default Home;
