import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Populer Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  New Arrivals
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header">
        <h1>shop in style</h1>
        <p>With this shop homepage template</p>
      </div>

      <div className="card">
        <div className="cards">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.hdqwalls.com/download/redhead-model-leather-jacket-zv-1366x768.jpg"
            />
            <Card.Body>
              <Card.Title className="title">Fancy Product</Card.Title>
              <Card.Text className="title">$40.00 - $80.00</Card.Text>
              <Button className="but" variant="primary">
                View Options
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.hdqwalls.com/wallpapers/thumb/black-leather-jacket-redhead-long-hairs-on-face-ks.jpg"
            />
            <Card.Body>
              <Card.Title className="title">Special Item</Card.Title>
              <Card.Text className="title">⭐⭐⭐⭐⭐⭐</Card.Text>
              <Card.Text className="title">
                <del>$20.00</del> - $10.00
              </Card.Text>
              <Button className="but" variant="primary">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.hdqwalls.com/wallpapers/thumb/women-in-red-zip-up-jacket-sm.jpg"
            />
            <Card.Body>
              <Card.Title className="title">Sale Item</Card.Title>
              <Card.Text className="title">
                <del>$50.00</del> - $25.00
              </Card.Text>
              <Button className="but" variant="primary">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.hdqwalls.com/wallpapers/thumb/leather-jacket-girl-smiling-4k-ta.jpg"
            />
            <Card.Body>
              <Card.Title className="title">Popular Item</Card.Title>
              <Card.Text className="title">⭐⭐⭐⭐⭐⭐</Card.Text>
              <Card.Text className="title">$40.00</Card.Text>
              <Button className="but" variant="primary">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.hdqwalls.com/wallpapers/thumb/black-leather-clothing-girl-hands-in-hair-4k-sl.jpg"
            />
            <Card.Body>
              <Card.Title className="title">Fancy Product</Card.Title>
              <Card.Text className="title">$40.00 - $80.00</Card.Text>
              <Button className="but" variant="primary">
                View Options
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.hdqwalls.com/download/redhead-model-leather-jacket-zv-1366x768.jpg"
            />
            <Card.Body>
              <Card.Title className="title">Sale Item</Card.Title>
              <Card.Text className="title">
                <del>$50.00</del> - $25.00
              </Card.Text>
              <Button className="but" variant="primary">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.hdqwalls.com/wallpapers/thumb/urban-girl-black-jacket-5k-3g.jpg"
            />
            <Card.Body>
              <Card.Title className="title">Fancy Product</Card.Title>
              <Card.Text className="title">$120.00 - $280.00</Card.Text>
              <Button className="but" variant="primary">
                View Options
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.hdqwalls.com/wallpapers/thumb/girl-with-black-leather-jacket-outdoors-h0.jpg"
            />
            <Card.Body>
              <Card.Title className="title">Special Item</Card.Title>
              <Card.Text className="title">⭐⭐⭐⭐⭐⭐</Card.Text>
              <Card.Text className="title">
                <del>$20.00</del> - $18.00
              </Card.Text>
              <Button className="but" variant="primary">
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="end">
        <p>Copyright © Your Website 2023</p>
      </div>
    </div>
  );
}

export default BasicExample;
