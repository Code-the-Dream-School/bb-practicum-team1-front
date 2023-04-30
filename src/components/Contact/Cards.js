import Card from 'react-bootstap/Card'
import Col from 'react-bootstap/Col'
import Row from 'react-bootstap/Row'

const ContactGrid = () => {
    return(
        <Row>
            {Array.from({length: 4}).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Img variant="top" src=""/>
                    <Card.Body>
                        <Card.Title>Card</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ContactGrid;
