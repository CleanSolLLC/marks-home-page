import { Container, Row } from "react-bootstrap";

const Resume = () => {
	return (
		<>
			<Container>
				<Row>
					<iframe
						title="Mark's Resume"
						src="https://onedrive.live.com/embed?resid=E05F0A11E752D75B%214002&amp;authkey=!ALuD3j2s7zWK1zU&amp;em=2"
						rel="noreferrer"
						width="476px"
						height="650px"
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
