import { Container, Row } from "react-bootstrap";

const Resume = () => {
	return (
		<>
			<Container>
				<Row>
					<iframe
						src="https://onedrive.live.com/embed?cid=E05F0A11E752D75B&amp;resid=E05F0A11E752D75B%213729&amp;authkey=ACW4wOICAsVntgE&amp;em=2&amp;wdStartOn=1"
						rel="noreferrer"
						width="476px"
						height="288px"
						frameborder="0"
					>
						This is an embedded{" "}
						<a target="_blank" href="https://office.com" rel="noreferrer">
							Microsoft Office
						</a>{" "}
						document, powered by{" "}
						<a
							target="_blank"
							href="https://office.com/webapps"
							rel="noreferrer"
						>
							Office
						</a>
						.
					</iframe>
				</Row>
			</Container>
		</>
	);
};

export default Resume;
