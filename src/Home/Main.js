import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <>
      <div className="Bdy">
        <div className="Header">
          <div className="HeadBdy">
            <span>Metal Tracker</span>
            <div>
              <ul className="menu cf">
                <li>
                  <Link>Select to check the Price of a metal</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/gold">GOLD</Link>
                    </li>
                    <li>
                      <Link to="/sliver">SLIVER</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
