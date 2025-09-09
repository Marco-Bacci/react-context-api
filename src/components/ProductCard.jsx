import { Link } from "react-router-dom";

const ProductCard = ({info}) => {
  const { id, description, image, title, category, price } = info;
  return (
    <div className="col-4">
      <div
        className="card p-3 h-100 bg-body-secondary position-relative"
        style={{ width: "18rem" }}
      >
        {/* <div className="overlay position-absolute ">
          <h3 className="text-center">Description</h3>
          <p>{description}</p>
        </div> */}
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="text-center mb-2 fw-bold"><span className="text-danger">Price:</span> {price}$</p>
          <div className="d-flex justify-content-center">
          <Link className="btn btn-primary mt-2" to={`/products/${id}`}> Dettagli Prodotto </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
