import React, { useEffect, useState, useContext } from "react";
import '../styles/Index.css';
import '../styles/Upload.css';
import { db, storage } from "../firebase";
import { AuthContext } from './AuthProvider';
import {ButtonStyle} from "./Buttons/Button";
import { getDocs, collection, addDoc} from "firebase/firestore";
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Input, message, Select, Form, Upload } from 'antd';

const { Option } = Select;

const typeOptions =
    ['Hat', 'Shirt', 'Shoes', 'Top', 'Pants',
    'Dress', 'Skirt', 'Swimwear'];
const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];
const genderOptions = ['Female', 'Male', 'Unisex'];
const conditionOptions = ['Old', 'Worn', 'Good', 'As New', 'New'];

function App() {
    const [productList, setProductList] = useState([]);

    // States
    const [newTitle, setNewTitle] = useState("");
    const [newType, setNewType] = useState("");
    const [newSize, setNewSize] = useState("");
    const [newBrand, setNewBrand] = useState("");
    const [newCondition, setNewCondition] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [newGender, setNewGender] = useState("");
    const [sellerUID, setSellerUID] = useState("");

    // File States
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    // User States
    const currentUser = useContext(AuthContext);

    const productsCollectionRef = collection(db, "products");

    const getProductList = async () => {
        try {
            const data = await getDocs(productsCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setProductList(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getProductList();
    }, []);
    const handleSizeChange      = (value) => { setNewSize(value); };
    const handleTypeChange      = (value) => { setNewType(value); };
    const handleGenderChange    = (value) => { setNewGender(value); };
    const handleConditionChange = (value) => { setNewCondition(value); };

    const handleImageUpload = async (file) => {
        try {
            const unique_filename = Date.now() + '_' + file.name;

            const storageRef = ref(storage, `product_images/${unique_filename}`);

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageUrl(downloadURL);
                        saveFormData(downloadURL);
                    });
                }
            );
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };


    const saveFormData = (downloadURL) => {
        try {
            addDoc(productsCollectionRef, {
                title: newTitle,
                type: newType,
                size: newSize,
                brand: newBrand,
                condition: newCondition,
                price: newPrice,
                gender: newGender,
                image_url: downloadURL,
                seller_uid: currentUser.uid,
            });
            // Clear the form fields and image file state
            setNewTitle("");
            setNewType("");
            setNewSize("");
            setNewBrand("");
            setNewCondition("");
            setNewPrice(0);
            setNewGender("");
            setImageFile(null);
            setImageUrl('');
            // Show a success message or perform any desired action
            console.log('Form data saved successfully!');
        } catch (error) {
            console.error('Error saving form data:', error);
        }
    };


    function handleFormSubmit  (e) {
        e.preventDefault();
        handleImageUpload(imageFile);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit }>
                <h3>Step 1 - Upload Image:</h3>

                <div className={"form-row"}>
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/" // Specify the accepted file types --> images
                        onChange={(e) => setImageFile(e.target.files[0])}
                    />
                </div>

                <h3>Step 2 - Fill Data:</h3>

                <div className={"form-row"}>
                    <label>Title</label>
                    <input
                        value={newTitle}
                        placeholder="Enter title..."
                        type="text"
                        required
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                </div>

                <div className={"form-row"}>
                    <label>Brand</label>
                    <input
                        value={newBrand}
                        placeholder="Enter brand..."
                        type="text"
                        onChange={(e) => setNewBrand(e.target.value)}
                    />
                </div>

                <div className={"form-row"}>
                    <label>Type</label>
                    <Form.Item
                    style={{marginBottom:"0px"}}>
                        <Select
                            value={newType}
                            placeholder="Select type..."
                            onChange={handleTypeChange}
                            style = {{width: '200px',}}>
                            >
                            {typeOptions.map((type_) => (
                                <Option key={type_} value={type_}>
                                    {type_}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <div className={"form-row"}>
                    <label>Size</label>
                    <Form.Item
                        style={{marginBottom:"0px"}}>
                        <Select
                            value={newSize}
                            placeholder="Select size..."
                            onChange={handleSizeChange}
                            style = {{width: '200px'}}>
                        >
                            {sizeOptions.map((size) => (
                                <Option key={size} value={size}>
                                    {size}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <div className={"form-row"}>
                    <label>Gender</label>
                    <Form.Item
                        style={{marginBottom:"0px"}}>
                        <Select
                            value={newGender}
                            placeholder="Select gender..."
                            onChange={handleGenderChange}
                            style = {{width: '200px'}}>
                            >
                            {genderOptions.map((gender) => (
                                <Option key={gender} value={gender}>
                                    {gender}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <div className={"form-row"}>
                    <label>Condition</label>
                    <Form.Item
                        style={{marginBottom:"0px"}}>
                        <Select
                            value={newCondition}
                            placeholder="Select condition..."
                            onChange={handleConditionChange}
                            style = {{width: '200px'}}>
                            >
                            {conditionOptions.map((_condition) => (
                                <Option key={_condition} value={_condition}>
                                    {_condition}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <div className={"form-row"}>
                    <label>Price</label>
                    <Form.Item
                        style={{marginBottom:"0px"}}>
                        <Input
                            value={newPrice}
                            placeholder="Enter price..."
                            type="number"
                            min={1} max={5}
                            onChange={(e) => setNewPrice(e.target.value)}
                            style = {{width: '200px'}}
                        />
                    </Form.Item>
                </div>

                <ButtonStyle
                    type="submit">
                    Add To Shop
                </ButtonStyle>

            </form>
        </div>
    );
}

export default App;

