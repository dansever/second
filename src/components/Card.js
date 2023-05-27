import React, {useContext, useState} from 'react';
import {HeartFilled, HeartOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {Button, Modal} from "antd";
import Card from '@mui/material/Card';
import "../styles/Card.css"
import {AuthContext} from "./AuthProvider";
import {db} from "../firebase";
import {doc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
import Colors from "../color";


export default function ProductCard(product) {
    const [isLikeToggledOn, setLikeToggledOn] = useState(product.isLiked);
    const [modalVisible, setModalVisible] = useState(false);
    const [whatsappModalVisible, setWhatsappModalVisible] = useState(false);


    const currentUser = useContext(AuthContext);
    const currentUserRef = doc(db, 'users', currentUser.uid);
    const product_id = product.product_id;

    const cardStyle = {
        borderRadius: '20px',
        boxShadow: '0 4px 6px black',
        cursor: 'pointer',
    };

    const likeAction = () => {
        updateDoc(currentUserRef, {
            liked_items: arrayUnion(product_id)
        });
    }

    const unlikeAction = () => {
        updateDoc(currentUserRef, {
            liked_items: arrayRemove(product_id)
        });

    }

    const handleLike = async () => {
        setLikeToggledOn(!isLikeToggledOn);
        if (isLikeToggledOn) {
            unlikeAction();
        }
        else {
            likeAction();
        }
    }

    const handleModalOpen = () => {setModalVisible(true);};
    const handleModalClose = () => {setModalVisible(false);};

    const handleWhatsappModalOpen = () => {setWhatsappModalVisible(true);};
    const handleWhatsappModalClose = () => {setWhatsappModalVisible(false);};



    return (
        <>
            <Card style={cardStyle}>
                <div className={"img-box"}
                     onClick={handleModalOpen}>
                    <img src={product.image_url}
                         alt={product.alt}/>
                </div>

                <div className={"content-box"}>

                    <div className={"left-side"}
                         onClick={handleModalOpen}>
                        <h3>{product.title}</h3>
                        <p>Size: {product.size}</p>
                        <p>Brand: {product.brand}</p>
                    </div>

                    <div className={"right-side"}>
                        <Button shape="circle"
                                className={"card_like_button"}
                                onClick={handleLike}>
                            {isLikeToggledOn ?
                                <HeartFilled
                                    style={{ scale: "120%", color: "red" }}/>
                                : <HeartOutlined
                                    style={{ scale: "120%", color: "black" }}/>}
                        </Button>
                        <Button shape="circle"
                                className={"card_like_button"}
                                onClick={handleWhatsappModalOpen}>
                            <WhatsAppOutlined
                                style={{ scale: "140%", color: "green" }}/>
                        </Button>
                    </div>
                </div>
            </Card>

            {/*MAIN MODAL*/}
            <Modal open={modalVisible}
                   onCancel={handleModalClose}
                   footer={[]} // Empty array to hide buttons>
                >
                <h2 style={{color:Colors.dark_green}}>
                    Item Information
                </h2>
                <h3>{product.title}</h3>
                <p>Type: {product.type}</p>
                <p>Price: {product.price}</p>
                <p>Brand: {product.brand}</p>
                <p>Gender: {product.gender}</p>
                <p>Size: {product.size}</p>
                <p>condition: {product.condition}</p>


            </Modal>

            {/*WHATSAPP MODAL*/}
            <Modal title="Seller Phone Number:"
                   open={whatsappModalVisible}
                   onCancel={handleWhatsappModalClose}
                   footer={[]} // Empty array to hide buttons>
            >
                <div className={"whatsapp-modal"}>
                    <h3
                        style={{fontWeight:"bold"}}>
                        0546436246
                    </h3>
                    <Button shape="square"
                            className={"card_like_button"}
                            onClick={handleWhatsappModalOpen}>
                        <WhatsAppOutlined
                            style={{ scale: "140%", color: "green" }}
                        />
                    </Button>
                </div>
            </Modal>

        </>
    );
}


export function MyShopCard (product) {
    <></>
}
//     const [isLikeToggledOn, setLikeToggledOn] = useState(product.isLiked);
//     const [modalVisible, setModalVisible] = useState(false);
//     const currentUser = useContext(AuthContext);
//     const navigate = useNavigate();
//     const userUid = currentUser.uid; // Replace with the actual user UID
//     const productId = product.id; // Replace with the actual product ID
//
//     const cardStyle = {
//         borderRadius: '20px',
//         boxShadow: '0 4px 6px black'
//     };
//
//
//     const handleLike = (userUid, productId) => {
//         setLikeToggledOn((prevState) => !prevState);
//         if (isLikeToggledOn) {
//             removeProductFromUser(userUid, productId);
//         }
//         else if (!isLikeToggledOn) {
//             addProductToLikedItems(userUid, productId);
//         }
//     };
//
//     const handleWhatsapp = () => {
//
//     };
//
//     const handleModalOpen = () => {setModalVisible(true);};
//     const handleModalClose = () => {setModalVisible(false);};
//
//     return (
//         <>
//             <Card style={cardStyle}>
//                 <div className={"img-box"} onClick={handleModalOpen}>
//                     <img src={product.image_url} alt={product.alt}/>
//                 </div>
//
//                 <div className={"content-box"}>
//
//                     <div className={"left-side"} onClick={handleModalOpen}>
//                         <h3>    {product.title}             </h3>
//                         <p>     Size:   {product.size}      </p>
//                         <p>     Brand:  {product.brand}     </p>
//                     </div>
//
//                     <div className={"right-side"}>
//                         <Button shape="circle"
//                                 className={"card_like_button"}
//                                 onClick={handleLike}>
//                             {isLikeToggledOn ?
//                                 <HeartFilled
//                                     style={{ scale: "120%", color: "red" }}/>
//                                 : <HeartOutlined
//                                     style={{ scale: "120%", color: "black" }}/>}
//                         </Button>
//                         <Button shape="circle"
//                                 className={"card_like_button"}
//                                 onClick={handleWhatsapp}>
//                             <WhatsAppOutlined
//                                 style={{ scale: "140%", color: "green" }}/>
//                         </Button>
//                     </div>
//                 </div>
//             </Card>
//
//             <Modal title={product.title}
//                    open={modalVisible}
//                    onCancel={handleModalClose}
//                    footer={[]} // Empty array to hide buttons>
//             >
//                 <p>{product.type}</p>
//                 <p>Price: {product.price}</p>
//                 <div className={"modal_icons"}>
//                     <Button shape="circle"
//                             style={{scale:"140%",
//                                 border:"1px solid black",
//                                 boxShadow: "2px 2px 2px 0 black"}}>
//                         <EditOutlined/>
//                     </Button>
//                 </div>
//             </Modal>
//         </>
//     );
// }


//
// export function MyShopCard (props) {
//     return (
//
//
//         <Card
//               hoverable
//               style={{
//                   borderRadius: '30px',
//                   border: '1px solid black',
//                   boxShadow: '3px 4px 0 0 black',
//               }}
//               cover={<img className={'imgItem'} alt="cloth img" src={props.img} />}>
//             <InfoContainer style={{display:"flex",justifyContent:"space-around"}}>
//                 <div style={{display:"flex", flexDirection:"row",
//                     alignItems:"center", alignContent:"center"}}>
//                     <img src={coin_img} alt={"coin_img"} width={"30px"}/>
//                     <text style={{fontWeight: 'bold'}}>{props.price}</text>
//                 </div>
//                 <div style={{display:"flex", alignItems:"center"}}>
//                     <Button shape="circle"
//                             style={{scale:"140%",
//                                 border:"1px solid black",
//                                 boxShadow: "2px 2px 2px 0 black"}}>
//                         <EditOutlined/>
//                     </Button>
//                 </div>
//             </InfoContainer>
//         </Card>
//     );
// }