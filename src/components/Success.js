import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      Obviously yes hi bolna tha na, hehe.
    </p>
    <p className="App-text-success">
     Looking forward to a yumyum 3-course meal and drinks hehe.
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">2/14/2025</p>
  </div>
);

export default Success;
