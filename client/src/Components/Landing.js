import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";

function Landing() {
  return (
    <div>
      <Container>
        <Segment>
          <Button>
            <Link to={{ pathname: "/login", state: { loggingIn: true } }}>
              Login!
            </Link>
          </Button>
          <Button>
            <Link to={{ pathname: "/register", state: { loggingIn: false } }}>
              Register a New Account!
            </Link>
          </Button>
        </Segment>
      </Container>
    </div>
  );
}

export default Landing;
