import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";
const Products = () => {
  const { budgetMode } = useBudget();

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(fetchProducts, []);

  let visibleProducts = products
  if(budgetMode === true){
    visibleProducts = products.filter((product)=>{ 
      return product.price <= 30
    })
  }

  return (
    <div className="container">
      <div className="row g-3">
        <div className="col-12">
          <h2 className="text-success">prodotti </h2>
        </div>
        {visibleProducts.map((product) => {
          return <ProductCard key={product.id} info={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
