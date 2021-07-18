import React, { useState } from "react";
import { Form, Grid, Segment, Button } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function User(props) {
  console.log(props);
  const [user, updateUser] = useState({
    email: "",
    name: "",
    password: "",
    passwordConf: "",
  });
  const loggingIn =
    localStorage.getItem("loggingIn") || props.location.state.loggingIn;
  const history = useHistory();

  return (
    <div>
      <Segment>
        <Grid>
          <Form>
            <Form.Group>
              <Form.Input
                type="email"
                value={user.email}
                placeholder="Enter your E-mail!"
                onChange={(e) => updateUser({ ...user, email: e.target.value })}
              />
              {!loggingIn && (
                <Form.Input
                  type="name"
                  value={user.name}
                  placeholder="Enter your name"
                  onChange={(e) =>
                    updateUser({ ...user, name: e.target.value })
                  }
                />
              )}
              <Form.Input
                type="password"
                value={user.password}
                placeholder="Enter your password"
                onChange={(e) =>
                  updateUser({ ...user, password: e.target.value })
                }
              />
              {!loggingIn && (
                <Form.Input
                  type="password"
                  value={user.passwordConf}
                  placeholder="Confirm your password"
                  onChange={(e) =>
                    updateUser({ ...user, passwordConf: e.target.value })
                  }
                />
              )}
            </Form.Group>
            {loggingIn && (
              <Button
                onClick={async () => {
                  const res = await axios.post(
                    "http://localhost:5000/api/user/login",
                    user
                  );
                  console.log(res);
                  if (res.status === 200) {
                    localStorage.setItem(
                      "user",
                      JSON.stringify(res.data.result)
                    );
                    history.push("/");
                  }
                }}
              >
                Login
              </Button>
            )}
            {!loggingIn && (
              <Button
                onClick={async () => {
                  const res = await axios.post(
                    "http://localhost:5000/api/user/register",
                    user
                  );
                  console.log(res);
                  if (res.status === 200) {
                    history.push({
                      pathname: "/login",
                      state: { loggingIn: true },
                    });
                  }
                }}
              >
                Register
              </Button>
            )}
            {loggingIn && (
              <Button>
                <Link
                  to={{ pathname: "/register", state: { loggingIn: false } }}
                >
                  Register a New Account!
                </Link>
              </Button>
            )}
            {!loggingIn && (
              <Button>
                <Link to={{ pathname: "/login", state: { loggingIn: true } }}>
                  Login!
                </Link>
              </Button>
            )}
          </Form>
        </Grid>
      </Segment>
    </div>
  );
}

export default User;
