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
import {Input, Button, message, Select} from 'antd';
import {ButtonStyle} from "./Buttons/Button";

const { Option } = Select;
function App() {
    const [productList, setProductList] = useState([]);

    // New Product States
    const [newTitle, setNewTitle] = useState("");
    const [newType, setNewType] = useState("");
    const [newSize, setNewSize] = useState("");
    const [newBrand, setNewBrand] = useState("");
    const [newCondition, setNewCondition] = useState("");
    const [newPrice, setNewPrice] = useState(0);

    const currentUser = useContext(AuthContext);

    // File Upload State
    const [fileUpload, setFileUpload] = useState(null);

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


    const handleSubmit = async () => {
        try {
            await addDoc(productsCollectionRef, {
                title: newTitle,
                type: newType,
                size: newSize,
                brand: newBrand,
                condition: newCondition,
                price: newPrice,
            }).then(() => {
                message.success(
                    "Item Upload Successfully", 3, () => {
                    console.log('Pop-up closed');
                });
                setNewTitle("");
                setNewType("");
                setNewSize("");
                setNewBrand("");
                setNewCondition("");
                setNewPrice(0);
            })
        } catch (err) {
            console.error(err);
        }
    };


    const uploadFile = async () => {
        if (!fileUpload) return;
        const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
        try {
            await uploadBytes(filesFolderRef, fileUpload);
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

            <div className={"form-row"}>
                <label>Image</label>
                <input
                    type="file"
                    onChange={(e) => setFileUpload(e.target.files[0])} />
                {/*<button onClick={uploadFile}> Upload File </button>*/}
            </div>

            <div className={"form-row"}>
                <label>Type</label>
                <Input
                    value={newType}
                    placeholder="Enter type..."
                    type="text"
                    onChange={(e) => setNewType(e.target.value)}
                />
            </div>

            <div className={"form-row"}>
                <label>Size</label>
                <Select
                    value={newSize}
                    placeholder="Select value..."
                    onChange={handleSizeChange}
                    className="dropdown-style"
                >
                    <Option value="xs">XS</Option>
                    <Option value="s">S</Option>
                    <Option value="M">M</Option>
                    <Option value="L">L</Option>
                    <Option value="XL">XL</Option>
                    <Option value="one_size">One Size</Option>
                </Select>
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
                <label>Condition</label>
                <Input
                    value={newCondition}
                    placeholder="Enter condition..."
                    type="text"
                    onChange={(e) => setNewCondition(e.target.value)}
                />
            </div>

            <div className={"form-row"}>
                <label>Price</label>
                <Input
                    value={newPrice}
                    placeholder="Enter price..."
                    type="number"
                    min={1} max={5}
                    onChange={(e) => setNewPrice(e.target.value)}
                />
            </div>

            <ButtonStyle onClick={handleSubmit}>Add To Shop</ButtonStyle>

        </div>
    );
}

export default App;
