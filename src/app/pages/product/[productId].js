// src/app/pages/product/[productId].jsx
import { useContext } from "react";
import { ShopContext } from "../../context/Shopcontext"; // Adjust path
import { useRouter } from "next/router";
import Breadcrum from "../../../components/Breadcrum/Breadcrum";
import ProductDisplay from "../../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../../components/Description/DescriptionBox";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const router = useRouter();
    const { productId } = router.query;
    console.log("Product ID:", productId); 


    // Find the product by its ID
    const product = all_product.find((e) => e.id === Number(productId));

    if (!product) return <div>Loading...</div>; // Handle loading state or product not found

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
        </div>
    );
};

export default Product;
