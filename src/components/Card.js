import { Card } from 'antd';
import "../styles/Card.css"

const { Meta } = Card;

const ItemCard = (src,) => (
    <Card className="card-item"
          hoverable
          style={{
              // maxWidth: '3',
              // flex: '0 0 19%',
              // width: 240,
          }}
          cover={<img alt="green dress" src={require("../assets/images/green_dress.jpg")} />}>
        {/*<Meta title="Europe Street beat" description="www.instagram.com" />*/}
        <div className="card-details">
            <div className="card-coins">
                <img src={require("../assets/images/second-token.png")} width="50px" />
                <span className="bold">5</span>
                <span> • </span>
                <span className="grey">Jerusalem</span>
            </div>
            <div className="card--size">
                <span className="bold">M</span>
                <span> • </span>
                <span>Zara</span>
            </div>
        </div>
    </Card>
);
export default ItemCard;