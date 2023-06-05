import React, { useEffect, useState, useContext } from "react";
import '../styles/Index.css';
import '../styles/Upload.css';
import { db, storage } from "../firebase";
import { AuthContext } from './AuthProvider';
import {ButtonStyle} from "./Buttons/Button";
import {getDocs, collection, addDoc, doc, updateDoc, arrayUnion} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Select, Form} from 'antd';
import {conditionOptions, genderOptions, sizeOptions, typeOptions} from "../assets/DataSets";

const { Option } = Select;




function App() {
    const [productList, setProductList] = useState([]);

    // States
    const [newTitle, setNewTitle] = useState("");
    const [newType, setNewType] = useState("");
    const [newSize, setNewSize] = useState("");
    const [newBrand, setNewBrand] = useState("");
    const [newCondition, setNewCondition] = useState("");
    const [newGender, setNewGender] = useState("");
    const [newPrice, setNewPrice] = useState(0);

    // File States
    const [imageFile, setImageFile] = useState(null);

    // User States
    const currentUser = useContext(AuthContext);
    const [userId, setUserId] = useState("");

    const productsCollectionRef = collection(db, "products");

    const getProductList = async () => {
        try {
            const data = await getDocs(productsCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(), id: doc.id,
            }));
            setProductList(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        setUserId(currentUser.uid);
        console.log("new user id: " + userId);
        }, [currentUser]);

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
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                        saveFormData(downloadURL);
                    });
                }
            );
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };


    const saveFormData = async (downloadURL) => {
        try {
            const docRef = await addDoc(productsCollectionRef, {
                title: newTitle,
                type: newType,
                size: newSize,
                brand: newBrand,
                condition: newCondition,
                gender: newGender,
                image_url: downloadURL,
                seller_uid: currentUser.uid,
                tokens: newPrice,
            });
            const newDocumentId = docRef.id;
            console.log("New document ID:", newDocumentId);
            await updateDoc( doc(db,'users',userId), {
                uploaded_items: arrayUnion(newDocumentId)
            });

            setNewTitle("");
            setNewType("");
            setNewSize("");
            setNewBrand("");
            setNewCondition("");
            setNewGender("");
            setNewSize("");
            setNewPrice(0);
            setImageFile(null);
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
                        className={"upload-file-button"}
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
                    <label>Price</label>
                        <input
                            value={newPrice}
                            placeholder="Enter price..."
                            type="number"
                            min={0} max={10}
                            onChange={(e) => setNewPrice(e.target.value)}
                            style = {{width: '200px'}}
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

                <ButtonStyle
                    type="submit">
                    Add To Shop
                </ButtonStyle>

            </form>
        </div>
    );
}

export default App;

