import "./Collection.css";

function Collection() {
  return (
    <div className="col">
      <div className="container">
        <div className="col-wrapper">
          <div className="col-left">
            <h2>Inspiration Collection</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-right">
            <img className='col-img1' src="./col1.svg" alt="" />
            <img className='col-img2' src="./col2.svg" alt="" />
            <img className='col-img1' src="./col3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
