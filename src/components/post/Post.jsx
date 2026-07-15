import luggageCar from "../../assets/luggage-car.png";
import hoursRound from "../../assets/hours-round.png";
import shield from "../../assets/shield.png";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="container">
        <div className="card">
          <div className="card-car">
            <img src={luggageCar} alt="" />
            <div className="free">
              <h4>Free Delivery</h4>
              <small>Lorem ipsum dolor sit amet.</small>
            </div>
          </div>

          <div className="card-support">
            <img src={hoursRound} alt="" />
            <div className="free">
              <h4>Support 24/7</h4>
              <small>Lorem ipsum dolor sit amet.</small>
            </div>
          </div>

          <div className="card-authentic">
            <img src={shield} alt="" />
            <div className="card-authentics">
              <h4>100% Authentic</h4>
              <small>Lorem ipsum dolor sit amet.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
