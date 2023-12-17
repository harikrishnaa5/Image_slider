import React from "react";
import "../App.css";

import img1 from "../images/audi-r8.jpg";
import img2 from "../images/red.jpg";
import img3 from "../images/pxfuel.jpg";

const ImageContainer = () => {
    return (
        <div className="container">
            <button className="slider-arrow-left">
                <i className="fa-solid fa-angle-left"></i>
            </button>

            <div className="image-container">
                <img src={img1} alt="" />
            </div>
            <button className="slider-arrow-right">
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default ImageContainer;
