import { useState } from "react";

export function Project() {

  const [show, setShow] = useState(false);
  const span1style = {
    display: show ? "none" : "inline"
  };
  const span2style = {
    display: show ? "inline" : "none"
  };
  const buttonStyle = {
    display: show ? "block" : "none"
  };
  return (
    <div>
      <h2 className="heading">Projects</h2>
      <div>
        <div className="project-container">
          <img
            src="https://www.sataware.com/wp-content/uploads/2020/07/food-delivery-app-logo.png"
            alt="food-app-image" />

          <div className="project-description">
            <h3 ><span className="sub-heading-c1">Food Zone - </span><span className="sub-heading-c2">A food delivery app</span></h3>
            <p>
              I built a user interative food delivery app, in which first if user
              is not an existing user<span style={span1style}>.....<button onClick={() => setShow(!show)}>Read more</button></span><span style={span2style}> then it has to first signup with valid credentials. Upon successfull registration user has to login for exploring the app. User has to select food from list of food, then it has to choose the restaurant from which he desires to order.  After adding to cart user can buy the selected food. </span>
            </p>
          </div>
          <div>
            {show ? <button style={buttonStyle} onClick={() => setShow(!show)}>Read less</button> : null}

            <button className="project-app-button"><a href="https://stunning-madeleine-bb0d6a.netlify.app/" target="_blank">Go to App</a></button></div>
       
        </div>

      </div>

      <hr></hr>
    </div>
  );
}
