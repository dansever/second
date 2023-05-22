import { useEffect, useState, useContext } from "react";
import { AuthContext } from './AuthProvider';
import '../styles/Index.css';
import '../styles/Upload.css';
import { db, storage } from "../firebase";
import {
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    updateDoc,
    doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import {Input, Button, message, Select, Form} from 'antd';
import {ButtonStyle} from "./Buttons/Button";

const { Option } = Select;

const typeOptions = ['Hat', 'Shirt', 'Shoes', 'Top', 'Pants',
    'Dress', 'Skirt', 'Swimwear'];
const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];
const genderOptions = ['Female', 'Male', 'Unisex'];
const conditionOptions = ['Old', 'Worn', 'Good', 'As New', 'New'];


function App() {
    const [productList, setProductList] = useState([]);

    // New Product States
    const [newTitle, setNewTitle] = useState("");
    const [newType, setNewType] = useState("");
    const [newImgUrl, setNewImgUrl] = useState("");
    const [fileUpload, setFileUpload] = useState(null);
    const [newSize, setNewSize] = useState("");
    const [newBrand, setNewBrand] = useState("");
    const [newCondition, setNewCondition] = useState("");
    const [newPrice, setNewPrice] = useState(0);
    const [newGender, setNewGender] = useState("");

    //file handling consts
    const [file, setFile] = useState(null);

    const currentUser = useContext(AuthContext);

    //Messages
    const [successMsg, setSuccessMsg] = useState("");
    const [uploadError, setUploadError] = useState("");

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


    const handleSizeChange = (value) => {
        setNewSize(value);
    };

    const handleTypeChange = (value) => {
        setNewType(value);
    };

    const handleGenderChange = (value) => {
        setNewGender(value);
    };

    const handleConditionChange = (value) => {
        setNewCondition(value);
    };


    const handleSubmit = async () => {
        try {
            //todo add UID to each product
            await addDoc(productsCollectionRef, {
                title: newTitle,
                type: newType,
                size: newSize,
                brand: newBrand,
                condition: newCondition,
                price: newPrice,
                gender: newGender,
                image_url: newImgUrl,
            }).then(() => {
                message.success(
                    "Item Uploaded Successfully", 3, () => {
                    console.log('Pop-up closed');
                });
                setNewTitle("");
                setNewType("");
                setNewSize("");
                setNewBrand("");
                setNewCondition("");
                setNewPrice(0);
                setNewGender("");
                setNewImgUrl("");
            })
        } catch (err) {
            console.error(err);
        }
    };




    return (
        <div className="form">
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

            {/*<div className={"form-row"}>*/}
            {/*    <label htmlFor="fileInput">Image</label>*/}
            {/*    <input*/}
            {/*        id="fileInput"*/}
            {/*        type="file"*/}
            {/*        accept="image/*" // Specify the accepted file types, e.g., images*/}
            {/*        onChange={handleFileChange}*/}
            {/*    />*/}
            {/*</div>*/}

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
                <Form.Item>
                    <Select
                        value={newType}
                        placeholder="Select type..."
                        onChange={handleTypeChange}
                        style = {{width: '200px'}}>
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
                <Form.Item>
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
                <Form.Item>
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
                >
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
                <Form.Item>
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

            <ButtonStyle onClick={handleSubmit}>Add To Shop</ButtonStyle>

        </div>
    );
}

export default App;
