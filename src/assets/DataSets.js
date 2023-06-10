export const NeighborhoodDict = [
    {
        value: 'jerusalem',label: 'Jerusalem',
        children: [
            { value: 'Rehavia',         label: 'Rehavia',},
            { value: 'Nahlaot',         label: 'Nahlaot',},
            { value: 'City Central',    label: 'City Central',},
            { value: 'Talbia',          label: 'Talbia',},
            { value: 'Katamon',         label: 'Katamon',},
            { value: 'Beit HaKerem',    label: 'Beit HaKerem',},
            { value: 'Ramot',           label: 'Ramot',},
            { value: 'Pisgat Zeev',     label: 'Pisgat Zeev',},
            { value: 'Kiryat Yuvel',    label: 'Kiryat Yuvel',},
            { value: 'Malha',           label: 'Malha',},
        ],
    },
    {
        value: 'tel_aviv', label: 'Tel Aviv',
        children: [
            { value: 'Old North', label: 'Old North' },
            { value: 'New North', label: 'New North' },
            { value: 'Lev Ha`ir',  label: 'Lev Ha`ir' },
            { value: 'Jaffo',     label: 'Jaffo'},
            { value: 'Florentin', label: 'Florentin'},
            ]
    },
]

export const NeighborhoodList = ['Rehavia', 'Nahlaot', 'City Central',
    'Talbia', 'Katamon', 'Beit HaKerem', 'Pisgat Zeev',
    'Ramot', 'The French Hill', 'Kiryat Yuvel', 'Kiryat Moshe',
    'Malha', 'Kiryat Menahem'];

export const filterDatabase = [
    {
        title: 'Size', value: 'size',
        children: [
            { title: 'XS',      value: 'XS' },
            { title: 'S',       value: 'S' },
            { title: 'M',       value: 'M' },
            { title: 'L',       value: 'L' },
            { title: 'XL',      value: 'XL' },
            { title: 'One Size',value: 'One Size' },
        ],
    },
    {
        title: 'Gender', value: 'gender',
        children: [
            { title: 'Male',    value: 'Male' },
            { title: 'Female',  value: 'Female' },
            { title: 'Unisex',  value: 'Unisex' },
        ],
    },
    {
        title: 'Condition', value: 'condition',
        children: [
            { title: 'Old',     value: 'Old' },
            { title: 'Worn',    value: 'Worn' },
            { title: 'Good',    value: 'Good' },
            { title: 'As New',  value: 'As New' },
            { title: 'New',     value: 'New' },
        ],
    },
    {
        title: 'Type', value: 'type',
        children: [
            { title: 'Hat',     value: 'Hat' },
            { title: 'Shirt',   value: 'Shirt' },
            { title: 'Shoes',   value: 'Shoes' },
            { title: 'Top',     value: 'Top' },
            { title: 'Pants',   value: 'Pants' },
            { title: 'Dress',   value: 'Dress' },
            { title: 'Skirt',   value: 'Skirt' },
            { title: 'Swimwear',value: 'Swimwear' },
            { title: 'Jacket/Coat',   value: 'Jacket/Coat' },
            { title: 'Sweater',   value: 'Sweater' },
        ],
    },



];

export const sortType = ['tokens', 'title'];
export const sortDirection = ['asc', 'desc'];
export const typeOptions = ['Hat', 'Shirt', 'Shoes', 'Top',
    'Pants', 'Dress', 'Skirt', 'Swimwear', 'Jacket/Coat', 'Sweater'];
export const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];
export const genderOptions = ['Female', 'Male', 'Unisex'];
export const conditionOptions = ['Old', 'Worn', 'Good', 'As New', 'New'];