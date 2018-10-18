import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
export default class Jumbo extends Component {
    render() {
        return (
            <div className="jumbo">
                <div>
                <Jumbotron className="jumbo">
                  <div className="jumboText">
                    <h1>Metal Gear Database:</h1>
                    <p>
                    IS THERE SUCH THING AS AN ABSOLUTE TIMELESS ENEMY? <br/>THERE IS NO SUCH THING AND NEVER HAS BEEN.  <br/>AND THE REASON IS THAT OUR ENEMIES ARE HUMAN BEINGS LIKE US.  <br/>THEY CAN ONLY BE OUR ENEMIES IN RELATIVE TERMS.
                    </p>
                  </div>
                </Jumbotron>;
                </div>
            </div>
            
        )
    }
}