import React, { useEffect, useState, useContext } from "react";
import '../styles/Index.css';
import '../styles/Upload.css';
import { db, storage } from "../firebase";
import { AuthContext } from './AuthProvider';
import {ButtonStyle} from "./Button";
import {getDocs, collection, addDoc, doc, updateDoc, arrayUnion, getDoc} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Select, Form, Modal, Input, ConfigProvider} from 'antd';
import {conditionOptions, genderOptions, sizeOptions, typeOptions} from "../assets/DataSets";
import loading from "../assets/images/loading.gif";
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
    }, [currentUser]);

    useEffect(() => {
        getProductList();
    }, []);

    const handleSizeChange      = (value) => { setNewSize(value); };
    const handleTypeChange      = (value) => { setNewType(value); };
    const handleGenderChange    = (value) => { setNewGender(value); };
    const handleConditionChange = (value) => { setNewCondition(value); };

    const [isLoading, setIsLoading] = useState(false);

    const handleImageUpload = async (file) => {
        try {
            setIsLoading(true);
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
                    console.log("Error occurred during upload");
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            saveFormData(unique_filename, downloadURL);
                            setIsLoading(false);
                        });
                }
            );
        } catch (error) {
            console.error('Error uploading image:', error);
            setIsLoading(false);
        }
    };


    const saveFormData = async (imageFilename, downloadURL) => {
        try {
            const userRef = doc(db,'users',currentUser.uid);
            const userSnapshot = await getDoc(userRef);
            const neighborhood =  userSnapshot.data()['neighborhood'];
            const currentDate = new Date();
            const docRef = await addDoc(productsCollectionRef, {
                title: newTitle.toLowerCase(),
                type: newType,
                size: newSize,
                brand: newBrand,
                condition: newCondition,
                gender: newGender,
                image_filename: imageFilename,
                image_url: downloadURL,
                seller_uid: currentUser.uid,
                seller_neighborhood: neighborhood,
                upload_time: currentDate.getTime(),
            });
            const newDocumentId = docRef.id;
            await updateDoc( doc(db,'users',userId), {
                uploaded_items: arrayUnion(newDocumentId)
            });
            await updateDoc( doc(db,'products',newDocumentId), {
                product_id: docRef.id,
            });
            setNewTitle("");
            setNewType("");
            setNewSize("");
            setNewBrand("");
            setNewCondition("");
            setNewGender("");
            setNewSize("");
            setImageFile(null);
            console.log('Form data saved successfully!');
        } catch (error) {
            console.error('Error saving form data:', error);
        }
    };


    function handleFormSubmit  (e) {
        e.preventDefault();
        handleImageUpload(imageFile);

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit }>
                <div className={"form-row-img"}>
                    <label className={"add-pic"} htmlFor="fileInput">
                        Add image
                    </label>
                    <input
                        className={"upload-file-button"}
                        id="fileInput"
                        type="file"
                        accept="image/" // Specify the accepted file types --> images
                        onChange={(e) => setImageFile(e.target.files[0])}
                        required
                    />
                </div>

                <ConfigProvider
                    theme={{
                        "token": {
                            "colorPrimaryBorder": "#11998E",
                            "colorPrimaryBorderHover": "#11998E",
                            "colorPrimaryHover": "#11998E",
                            "colorPrimary": "#11998E",
                            "wireframe": false
                        },
                    }}
                >

                    <div className={"form-row"}>

                        <label>Title</label>
                        <Input
                            value={newTitle}
                            placeholder="Enter title..."
                            type="text"
                            required
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>

                    <div className={"form-row"}>
                        <label>Brand</label>
                        <Input
                            value={newBrand}
                            placeholder="Enter brand..."
                            type="text"
                            onChange={(e) => setNewBrand(e.target.value)}
                        />
                    </div>

                    <div className={"form-row"}>
                        <label>Type</label>
                        <Form.Item
                            style={{marginBottom:"0"}}>
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
                            style={{marginBottom:"0"}}>
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
                            style={{marginBottom:"0"}}>
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
                            style={{marginBottom:"0"}}>
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

                    <div className={"button"}>
                        <ButtonStyle type="submit">
                            Add To Shop
                        </ButtonStyle>
                    </div>
                </ConfigProvider>

            </form>
            <Modal className={"loading-modal"}
                   open={isLoading}
                   centered
                   closable={false}
                   footer={[]}
            >
                <div className="modal-content">
                    <h2>Uploading...</h2>
                    <img className={"loading"} src={loading} alt={"loading_object"}/>
                </div>
            </Modal>
        </div>
    );
}

export default App;