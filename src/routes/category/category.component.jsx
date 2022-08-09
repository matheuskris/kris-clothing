import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <div className="productt-container">
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
