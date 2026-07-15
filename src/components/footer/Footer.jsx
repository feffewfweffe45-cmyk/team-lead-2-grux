import "./Footer.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
function Footer(){
  return (
    <div>
      <>
<section className="section">
  <dsiv className="container">
    <h2>Join Our Mailing List</h2>

    <p>
      Sign up to receive inspiration, product updates,
      <br />
      and special offers from our team.
    </p>

    <div className="form">
      <input type="email" placeholder="example@gmail.com" />
      <button>Submit</button>
    </div>
  </dsiv>
</section>

<footer className="footer">
  <div className="container">
    <div className="footerBox">
      <div className="footerLeft">
        <h3>Beauty Care</h3>

        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>

          <h1 className="follow">Follow Us</h1>
      </div>

      <div className="footerRight">
        <h3>Instagram Shop</h3>

        <div className="gallery">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
    </div>
  )
}

export default Footer