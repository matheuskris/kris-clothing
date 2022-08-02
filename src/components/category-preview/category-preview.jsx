import ProductCard from '../product-card/product-card.component'
import { useNavigate } from "react-router-dom"
import {
    CategoryContainer,
    Title,
    Preview
} from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate()
    const goToCategoryHandler = () => {
        navigate(`/shop/${title}`)
    }

    return(
        <CategoryContainer>
            <h2 onClick={goToCategoryHandler}>
                <Title>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products.filter((_,idx)=> idx<4)
                    .map((product)=>(
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </Preview>
        </CategoryContainer>
    )
}

export default CategoryPreview