import { Card } from 'antd';
import "./Card.css"
import {Link} from "react-router-dom";

const { Meta } = Card;

const ItemCard = (props) => (
    <Link to="/Search/:id">
        <Card className="card-item"
              hoverable
              cover={<img alt="cloth img" src={props.img} />}>
            <div className="card-details">
                <div className="card--size">
                    <span className="bold">{props.size}</span>
                    <span> • </span>
                    <span>{props.location}</span>
                </div>
                <div className="card-coins">
                    <img src={require("../../assets/images/coin.png")} width="30%" />
                    <span className="bold">{props.prise}</span>
                </div>
            </div>
        </Card>
    </Link>
);

export default ItemCard;
