const ProductDatabase = {
    /**
     * ///products///
     * product_id: int
     * img: string,
     * title: string
     * description: string,
     * size: string,
     * gender: string,
     * brand: string
     * condition: string,
     * price: int,
     * seller_id: int
     */
    products:
        [
            {
                product_id: 1,
                img: "./images/green dress.jpg",
                title: "Green Dress",
                description: "Lorem ipsum dolor sit amet",
                size: "S",
                gender: "F",
                brand: "Dolce",
                condition: "As new",
                price: 5,
                seller_id: 43,
            },
            {
                product_id: 2,
                img: "./images/green dress.jpg",
                title: "Jeans",
                description: "Lorem ipsum dolor sit amet",
                size: "L",
                gender: "M",
                brand: "Armani",
                condition: "Worn",
                price: 7,
                seller_id: 3,
            },
        ]
};

const UserDatabase = {
    /**
     * ///users///
     * user_id: int
     * name: string
     * address: string,
     * rating: int
     */
    users:
        [
            {
                seller_id: 1,
                name: "Dan Sever",
                address: "14 Mitudela st., Jerusalem",
                rating: 3
            },
            {
                seller_id: 2,
                name: "Inbal Kheifetz",
                address: "5 Balfur st., Jerusalem",
                rating: 5
            },
            {
                seller_id: 3,
                name: "Gal Mitrani",
                address: "10 Palmach st., Jerusalem",
                rating: 4
            },
        ]
};
