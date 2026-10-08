function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-5">

      <div className="container">

        <div className="row">

          <div className="col-md-3">
            <h5>ShoeAura</h5>
            <p>
              Step into style and comfort with ShoeAura.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>Products</p>
            <p>Wishlist</p>
            <p>Cart</p>
          </div>

          <div className="col-md-3">
            <h5>Customer Service</h5>
            <p>Contact Us</p>
            <p>Shipping</p>
            <p>Returns</p>
            <p>FAQs</p>
          </div>

          <div className="col-md-3">
            <h5>Follow Us</h5>

            <div className="d-flex gap-3">
              <i className="bi bi-instagram"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 ShoeAura. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;