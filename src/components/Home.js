import {
	Container,
	Card,
	Button,
	CardGroup,
	Figure,
	Badge,
	Carousel,
} from "react-bootstrap";

import MarkPic from "../images/MarkPic.png";

const Home = () => {
	return (
		<>
			<br />
			<Container>
				{/* <Card style={{ width: "25rem" }}> */}
				<CardGroup>
					<Card>
						<Figure>
							<Figure.Image
								width={200}
								height={200}
								alt="Mark's Profile Image"
								src={MarkPic}
							/>
							<h1>Mark May</h1>
							<h4>
								<Badge bg="secondary">Full Stack Developer</Badge>&nbsp;
								<Badge bg="secondary">Front-end Developer</Badge>&nbsp;
								<Badge bg="secondary">Back-end Developer</Badge>&nbsp;
							</h4>
						</Figure>
						<Card.Body>
							<Card.Title>Thank you for visiting my portfolio page!</Card.Title>
							<Card.Text>
								The motto at the Flatiron School is “Change Things”. For me,
								this is not simply a phrase but a mission that I have undertaken
								since beginning my coding journey two years ago. The inspiration
								behind all of my projects at Flatiron have been based on the
								idea of providing some value or utility that helps to make a
								storyline just a little bit better. Flatiron has trained me to
								think like a software engineer, now it is time to build upon
								that training in an organization that is congruent with my
								mission. Changing things is seldom linear and does not take
								place in a vacuum. It requires a commitment to lifelong
								learning, embracing learning from others, stepping outside of my
								comfort zone to openly contribute to a thought or an idea and
								finally by sharing the knowledge and experience that I have
								learned with others. If you have a project idea or need an
								evaluation of your code, let's talk!
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Button size="sm" variant="primary">
								Contact Me
							</Button>
						</Card.Footer>
					</Card>
				</CardGroup>
			</Container>
			<br />

			<Container>
				<Carousel fade>
					<Carousel.Item interval={500}>
						<img
							className="d-block w-100"
							src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
							alt="Image One"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className="d-block w-100"
							src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
							alt="Image Two"
						/>
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<img
							className="d-block w-100"
							src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
							alt="Image Two"
						/>
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		</>
	);
};
export default Home;