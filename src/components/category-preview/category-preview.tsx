import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";
import { CategoryContainer, Title, Preview } from "./category-preview.styles";
import { useEffect, useState } from "react";
import { categoryItem } from "../../store/categories/category.types";

const startScreenWidth = 0;

type CategoryPreviewProps = {
  title: string;
  products: categoryItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  const [screenWidth, setScreenWidth] = useState(startScreenWidth);

  useEffect(() => {
    const newScreenWidth = window.innerWidth;
    setScreenWidth(newScreenWidth);
  }, [window]);

  const getHowManyProducts = () => {
    if (screenWidth > 700) return 4;
    if (screenWidth > 550) return 3;
    return 2;
  };
  const showProducts = getHowManyProducts();

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
          .filter((_, idx) => idx < showProducts)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryContainer>
  );
};

export default CategoryPreview;