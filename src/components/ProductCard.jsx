function ProductCard({ product }) {
  return (
    <div className="card h-100">

      <div className="card-img-top product-image">
        <i className="bi bi-image"></i>
      </div>

      <div className="card-body">

        <h5 className="card-title">
          {product.name}
        </h5>

        <p className="fw-bold">
          ₹{product.price}
        </p>

        <p>
          ⭐ {product.rating}
        </p>

        <div className="d-flex gap-2">

          <button className="btn btn-dark">
            Add to Cart
          </button>

          <button className="btn btn-outline-dark">
            <i className="bi bi-heart"></i>
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;