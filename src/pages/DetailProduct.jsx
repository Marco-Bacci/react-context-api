import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => {
        setProduct(resp.data);
      })
    })

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center p-3">
          <h3>{product.title}</h3>
        </div>
        <img src={product.image} alt="image" />
        <p className="text-center">
          <span className="text-danger fw-bold">Category:</span>
          {product.category}{" "}
          <span className="text-success fw-bold">Price:</span> {product.price}${" "}
        </p>
        <p>{product.description}</p>
        <div className="col-12 d-flex justify-content-center">
          <button
            onClick={() => navigate(`/products/${parseInt(id) - 1}`)}
            className="btn btn-primary me-3"
            disabled={parseInt(id) === 1 ? true : false}
          >
            precedente
          </button>

          <button
            onClick={() => navigate(`/products/${parseInt(id) + 1}`)}
            className="btn btn-primary me-3"
            disabled={parseInt(id) === 20 ? true : false}
          >
            prossimo
          </button>
          {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
           */}
          <Link className="btn btn-info mt-2 me-3" to={`/products`}>
            {" "}
            torna a elenco prodotti{" "}
          </Link>
          <button
            onClick={() => navigate(`/products`)}
            className="btn btn-warning me-3"
            disabled={parseInt(id) === 20 ? true : false}
          >
            torna a elenco prodotti
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
