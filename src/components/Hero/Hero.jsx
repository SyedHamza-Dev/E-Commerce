import "./Hero.css";
import Image from 'next/image';
import hand_icon from "../../../assets/images/hand_icon.png";
import arrow_icon from "../../../assets/images/arrow.png";
import hero_image from "../../../assets/images/hero_image.png";
const Hero = () => {

    return(
        <div className="hero">
        <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <Image src={hand_icon} alt="Hand Icon" />
            </div>
            <p>collections</p>
            <p>for everyone</p>

        </div>

        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <Image src={arrow_icon} alt="Arrow Icon" />
        </div>
        </div>
        <div className="hero-right">
        <Image src={hero_image} alt="Hero Image" />
        </div>
        </div>
    )
}

export default Hero;