import React from "react";
import Cities from "./Cities";
import { Segment, Button } from "semantic-ui-react";
import axios from "axios";

function Weather() {
  return (
    <div>
      <Segment>
        <Button
          onClick={async () => {
            const res = await axios.post("http://localhost:5000/users/logout");
            console.log(res);
          }}
        >
          Logout
        </Button>
      </Segment>
      weather
      <Cities />
    </div>
  );
}

export default Weather;
