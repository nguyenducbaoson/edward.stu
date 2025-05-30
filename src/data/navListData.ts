const navListData = [
    {
        _id: 1,
        link: 'women',
        name: 'Women',
        current: 'hero',
        next: 'womens',
        active: true,
    },
    {
        _id: 2,
        link: 'men',
        name: 'Men',
        current: 'womens',
        next: 'mens',
        active: false,
    },
    {
        _id: 3,
        link: 'kids',
        name: 'Kids',
        current: 'mens',
        next: 'footer',
        active: false,
    },
        {
        _id: 4,
        link: 'baby',
        name: 'Baby',
        current: 'mens',
        next: 'footer',
        active: false,
    },
];

export default navListData;