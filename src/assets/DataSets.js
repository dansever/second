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
    // {
    //     value: 'tel_aviv', label: 'Tel Aviv',
    //     children: [
    //         { value: 'Old North', label: 'Old North' },
    //         { value: 'New North', label: 'New North' },
    //         { value: 'Lev Ha`ir',  label: 'Lev Ha`ir' },
    //         { value: 'Jaffo',     label: 'Jaffo'},
    //         { value: 'Florentin', label: 'Florentin'},
    //         ]
    // },
]

export const NeighborhoodList = ['Rehavia', 'Nahlaot', 'City Central',
    'Talbia', 'Katamon', 'Beit HaKerem', 'Pisgat Zeev',
    'Ramot', 'The French Hill', 'Kiryat Yuvel', 'Kiryat Moshe',
    'Malha', 'Kiryat Menahem'];

export const filterDatabase = [
    {
        title: 'Size', value: 'size',
        children: [
            { title: 'XS',      value: 'size_XS' },
            { title: 'S',       value: 'size_S' },
            { title: 'M',       value: 'size_M' },
            { title: 'L',       value: 'size_L' },
            { title: 'XL',      value: 'size_XL' },
            { title: 'One Size',value: 'size_One Size' },
        ],
    },
    {
        title: 'Gender', value: 'gender',
        children: [
            { title: 'Male',    value: 'gender_Male' },
            { title: 'Female',  value: 'gender_Female' },
            { title: 'Unisex',  value: 'gender_Unisex' },
        ],
    },
    {
        title: 'Condition', value: 'condition',
        children: [
            { title: 'Old/Worn',    value: 'condition_Old/Worn' },
            { title: 'Good',        value: 'condition_Good' },
            { title: 'New/As New',  value: 'condition_New/As New' },
        ],
    },
    {
        title: 'Type', value: 'type',
        children: [
            { title: 'Socks',   value: 'type_Socks' },
            { title: 'Shoes',   value: 'type_Shoes' },
            { title: 'Pants/Shorts',   value: 'type_Pants/Shorts' },
            { title: 'Dress',   value: 'type_Dress' },
            { title: 'Shirt',   value: 'type_Shirt' },
            { title: 'Sweater',   value: 'type_Sweater' },
            { title: 'Jacket/Coat',   value: 'type_Jacket/Coat' },
            { title: 'Pajama',   value: 'type_Pajama' },
            { title: 'Swimwear',value: 'type_Swimwear' },
            { title: 'Other',     value: 'type_Other' },
        ],
    },


];

export const sortType = ['title', 'upload_time'];
export const sortDirection = ['asc', 'desc'];
export const typeOptions = ['Socks','Shoes','Pants/Shorts', 'Dress',
    'Shirt','Sweater','Jacket/Coat', 'Pajama','Swimwear','Other']
export const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];
export const genderOptions = ['Male', 'Female', 'Unisex'];
export const conditionOptions = ['Old/Worn', 'Good', 'New/As New',];

export const universities = ['HUJI', 'TAU', 'Technion'];
