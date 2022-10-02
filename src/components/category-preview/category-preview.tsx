import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";
import { CategoryContainer, Title, Preview } from "./category-preview.styles";
import { useEffect, useState } from "react";
import { categoryItem } from "../../store/categories/category.types";

type CategoryPreviewProps = {
  title: string;
  products: categoryItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", getHowManyProducts);

    return window.removeEventListener("resize", getHowManyProducts);
  }, []);

  const getHowManyProducts = () => {
    const screenWidth = window.innerWidth;
    console.log("oi");
    if (screenWidth > 700) {
      setNumberOfProducts(4);
      return;
    }
    if (screenWidth > 550) {
      setNumberOfProducts(3);
      return;
    }
    setNumberOfProducts(2);
  };

  const navigate = useNavigate();
  const goToCategoryHandler = () => {
    navigate(`/shop/${title}`);
  };
  return (
    <CategoryContainer>
      <h2 onClick={goToCategoryHandler}>
        <Title>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < numberOfProducts)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryContainer>
  );
};

export default CategoryPreview;
