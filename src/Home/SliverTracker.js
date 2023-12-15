import "./MetalTracker.css";
// import Sliver from "../Images/Sliver.jpg";
import { Link } from "react-router-dom";
import Main from "./Main";

function SliverTracker() {
  return (
    <>
      <Main />
      <div className="center">
        <h3>Get Live Sliver Price</h3>
        <h4>Hover to see the Magic !...</h4>
        <div className="search-container">
          <input
            type="text"
            name="search"
            placeholder="Search your place here!....."
            className="search-input"
          />
          <Link to="/" className="search-btn">
            <i className="fas fa-search"></i>
          </Link>
        </div>
        <div className="image">
          <img
            // src={Sliver}
            alt="Sliver"
            style={{
              width: "125px",
              height: "125px",
              objectFit: "cover",
            }}
          />
          <h4> {new Date().toLocaleString() + ""}</h4>
          <h3>INDIA</h3>
          <h2> Rs 533 </h2>
        </div>
      </div>
    </>
  );
}

export default SliverTracker;
