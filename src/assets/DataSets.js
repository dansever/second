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
            { title: 'Boy',    value: 'Boy' },
            { title: 'Girl',  value: 'Girl' },
            { title: 'Unisex',  value: 'Unisex' },
        ],
    },
    {
        title: 'Condition', value: 'condition',
        children: [
            { title: 'Old/Worn',    value: 'Old/Worn' },
            { title: 'Good',        value: 'Good' },
            { title: 'New/As New',  value: 'New/As New' },
        ],
    },
    {
        title: 'Type', value: 'type',
        children: [
            { title: 'Socks',   value: 'Socks' },
            { title: 'Shoes',   value: 'Shoes' },
            { title: 'Pants/Shorts',   value: 'Pants/Shorts' },
            { title: 'Shirt',   value: 'Shirt' },
            { title: 'Sweater',   value: 'Sweater' },
            { title: 'Jacket/Coat',   value: 'Jacket/Coat' },
            { title: 'Pajama',   value: 'Pajama' },
            { title: 'Swimwear',value: 'Swimwear' },
            { title: 'Other',     value: 'Other' },
        ],
    },



];

export const sortType = ['tokens', 'title'];
export const sortDirection = ['asc', 'desc'];
export const typeOptions = ['Socks','Shoes','Pants/Shorts', 'Shirt',
    'Sweater','Jacket/Coat', 'Pajama','Swimwear','Other']
export const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];

export const age = ['0-2', '3-5', '6-8', '9-11', '12-114'];

export const genderOptions = ['Girl', 'Boy', 'Unisex'];
export const conditionOptions = ['Old', 'Worn', 'Good', 'As New', 'New'];