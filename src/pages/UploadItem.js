import React, { useState } from "react";
import '../styles/UploadItem.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsImages } from "react-icons/bs";

const ItemForm = () => {
    const [title, setTitle] = useState("");
    const [typeOfClothing, setTypeOfClothing] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [brand, setBrand] = useState("");
    const [condition, setCondition] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send the form data to your server or perform any other action
        console.log("Form submitted");
    };
    return (
        <div>

            <div className="top-bar">
                <AiOutlineArrowLeft size="24px"/>
                <h1 id="page-title">Upload</h1>
            </div>

            <div className="form-box">
                <div className="photo-box">
                    Select images from gallery
                    <BsImages size="50px"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        required
                    />
                    <label htmlFor="typeOfClothing">Type of Clothing:</label>
                    <input
                        type="text"
                        id="typeOfClothing"
                        value={typeOfClothing}
                        onChange={(event) => setTypeOfClothing(event.target.value)}
                        required
                    />
                    <label htmlFor="size">Size:</label>
                    <input
                        type="text"
                        id="size"
                        value={size}
                        onChange={(event) => setSize(event.target.value)}
                        required
                    />
                    <label htmlFor="color">Color:</label>
                    <input
                        type="text"
                        id="color"
                        value={color}
                        onChange={(event) => setColor(event.target.value)}
                        required
                    />
                    <label htmlFor="brand">Brand:</label>
                    <input
                        type="text"
                        id="brand"
                        value={brand}
                        onChange={(event) => setBrand(event.target.value)}
                        required
                    />
                    <label htmlFor="condition">Condition:</label>
                    <input
                        type="text"
                        id="condition"
                        value={condition}
                        onChange={(event) => setCondition(event.target.value)}
                        required
                    />
                    <label htmlFor="price">Price (in Tokens):</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        required
                    />
                    <button className="button" type="submit">Add to your shop</button>

                </form>
            </div>
        </div>
    );
};

export default ItemForm;
