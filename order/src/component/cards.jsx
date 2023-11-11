import React from "react";
import { Link } from "react-router-dom";
import sony from '../asset/sony.jpeg';

function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card-section">
          <div className="card">
            <img src={sony} alt="" />
            <h3>names</h3>
            <Link to="#" className="camera">canon</Link>
            <Link to="#" className="camera">sony</Link>
            <Link to="#" className="camera">nikon</Link>
            <h3 className="cameras">$</h3>
            <div className="btn-card">
            <button type="submit" className="btn-c">Order-Now</button>
            </div>
          </div>
          <div className="card">
            <img src={sony} alt="" />
            <h3>names</h3>
            <Link to="#" className="camera">canon</Link>
            <Link to="#" className="camera">sony</Link>
            <Link to="#" className="camera">nikon</Link>
            <h3 className="cameras">$</h3>
            <div className="btn-card">
            <button type="submit" className="btn-c">Order-Now</button>
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
}
export default Card;
