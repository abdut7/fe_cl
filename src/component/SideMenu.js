import shapesSolid from "../assets/resources/icons/shapes-solid.svg";
import newspaperSolid from "../assets/resources/icons/newspaper-solid.svg";
import streamSolid from "../assets/resources/icons/stream-solid.svg";
import dollarSignSolid from "../assets/resources/icons/dollar-sign-solid.svg";
import universitySolid from "../assets/resources/icons/university-solid.svg";
import creditCardSolid from "../assets/resources/icons/credit-card-solid.svg";
import cogSolid from "../assets/resources/icons/cog-solid.svg";
import historeRefresh from "../assets/resources/icons/histore-refresh.svg";
import historyDots from "../assets/resources/icons/history-dots.svg";

import { Link } from 'react-router-dom';


function SideMenu(){

    return (
        <div className="sidebar-container">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-a">
              <div className="nav-icnholder">
                <img
                  src={shapesSolid}
                  alt=""
                  className="nav-icon"
                />
              </div>
              <p className="nav-item-text">Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/news" className="nav-a">
              <div className="nav-icnholder">
                <img
                  src={newspaperSolid}
                  alt=""
                  className="nav-icon"
                />
              </div>
              <p className="nav-item-text">News and Feed</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-a">
              <div className="nav-icnholder">
                <img
                  src={streamSolid}
                  alt=""
                  className="nav-icon"
                />
              </div>
              <p className="nav-item-text">Courses</p>
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/referrals" className="nav-a">
              <div className="nav-icnholder">
                <img
                  src={dollarSignSolid}
                  alt=""
                  className="nav-icon"
                />
              </div>
              <p className="nav-item-text">Referrals</p>
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-icnholder">
                <img
                  src={dollarSignSolid}
                  alt=""
                  className="nav-icon"
                />
              </div>
              <p className="nav-item-text">Investment</p>
            </li>
            <li className="nav-item">
              <div className="nav-icnholder">
                <img
                  src={universitySolid}
                  alt=""
                  className="nav-icon"
                />
              </div>
              <p className="nav-item-text">Account</p>
            </li>
            <li className="nav-item">
              <div className="nav-icnholder">
                <img
                  src={creditCardSolid}
                  alt=""
                  className="nav-icon"
                />
              </div>
              <p className="nav-item-text">Transaction</p>
            </li>
            <li className="nav-item">
              <div className="nav-icnholder">
              <img
                src={cogSolid}
                alt=""
                className="nav-icon"
              />
              </div>
              <p className="nav-item-text">Settings</p>
            </li>
          </ul>
          <div className="history">
            <div className="history-top">
              <img
                src={historeRefresh}
                alt=""
                className="nav-icon"
              /><img
                src={historyDots}
                alt=""
                className="nav-icon historyicon"
              />
            </div>
            <p className="history-head">History Available</p>
            <p className="history-text">Check your weekly transaction report</p>
          </div>
        </div>
    )
}

export default SideMenu