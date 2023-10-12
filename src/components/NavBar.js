import {useSelector, useDispatch} from "react-redux";
import {useState, useEffect} from "react";
import {fetchTrendingGifList, fetchSearchGifList, resetListItem} from "../redux/feature/getListItem";
import {Navbar, Container, Form, FormControl, Button, Row, Col} from "react-bootstrap";

function NavBar() {
    const [searchString, setSearchString] = useState("");
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setSearchString(e.target.value);
    }

    const handleSubmitButton = (e) => {

    }

    const handleHomeButton = () => {
        dispatch(resetListItem())
    }


    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <Navbar.Brand>GIPHY CALLER</Navbar.Brand>
                        </Col>
                        <Col>
                            <Form inline className="justify-content-center">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;