import { Card } from 'antd';
import "./Card.css"
// import styled from "styled-components"
//
// import Coin from "../assets/images/coin.png"
// import Jacket from "../assets/images/flower jacket.jpg"

const { Meta } = Card;
//
// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border-radius: 8px;
// `
//
// const Image = styled.image``
//
// const CoinImage = styled.image`
//   max-width: 50px;
// `
//
// const RowWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `
// //
// const ColWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `
//
// const Title = styled.div`
//   font-size: 18px;
// `


const ItemCard = (props) => (
    <Card className="card-item"
          hoverable
          style={{
              // maxWidth: '3',
              // flex: '0 0 19%',
              // width: 240,
          }}
          cover={<img alt="cloth img" src={props.img} />}>
        {/*//   cover={<img alt="green dress" src={require("../assets/images/green dress.jpg")} />}>*/}
        {/*<Meta title="Europe Street beat" description="www.instagram.com" />*/}
        <div className="card-details">
            <div className="card-coins">
                <img src={require("../../assets/images/coin.png")} width="50px" />
                <span className="bold">{props.prise}</span>
                <span> • </span>
                <span className="grey">{props.location}</span>
            </div>
            <div className="card--size">
                <span className="bold">{props.size}</span>
                <span> • </span>
                <span>{props.brand}</span>
            </div>
        </div>



    </Card>
    //
    // <Card>
    //     <Image src={Jacket} />
    //     <RowWrapper>
    //         <CoinImage src={Coin}/>
    //         <ColWrapper>
    //             <Title>Hello</Title>
    //             <Title>hello</Title>
    //         </ColWrapper>
    //     </RowWrapper>
    // </Card>
);
export default ItemCard;
