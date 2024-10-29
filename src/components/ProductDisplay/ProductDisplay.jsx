import './ProductDisplay.css';
import star_icon from '../../../assets/star_icon.png'; // Adjust the path as needed
import star_dull_icon from '../../../assets/star_dull_icon.png'; // Adjust the path as needed
import { useContext } from 'react';
import { ShopContext } from '../../app/context/Shopcontext';
import Image from 'next/image';

const ProductDisplay = (props) => {
    const { product } = props;

    // Using use context hook here to extract addToCart function from ShopContext
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <Image src={product.image} alt={product.name} width={100} height={100} />
                    <Image src={product.image} alt={product.name} width={100} height={100} />
                    <Image src={product.image} alt={product.name} width={100} height={100} />
                    <Image src={product.image} alt={product.name} width={100} height={100} />
                </div>
                <div className="productdisplay-img">
                    <Image 
                        className='productdisplay-main-img' 
                        src={product.image} 
                        alt={product.name} 
                        width={300} // Adjust size as needed
                        height={300} // Adjust size as needed
                    />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <Image src={star_icon} alt="Star Icon" width={20} height={20} />
                    <Image src={star_icon} alt="Star Icon" width={20} height={20} />
                    <Image src={star_icon} alt="Star Icon" width={20} height={20} />
                    <Image src={star_icon} alt="Star Icon" width={20} height={20} />
                    <Image src={star_dull_icon} alt="Dull Star Icon" width={20} height={20} />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with 
                    a round neckline and short sleeves, worn as undershirt or outer shirt 
                    garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className="productdisplay-right-category">
                    <span>Category:</span> Women, T-Shirt, Crop Top
                </p>
                <p className="productdisplay-right-category">
                    <span>Tags:</span> Modern, Latest
                </p>
            </div>
        </div>
    );
}

export default ProductDisplay;
