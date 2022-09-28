import { CategoryTitle, CategoryContainer } from "./category.styles";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? <Spinner /> : ""}
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <div className="productt-container">
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
