const ListOfOrchids = [
    {
        id: '1',
        name: 'Taichung Beauty',
        rating: 5,
        isSpecial: true,
        isNature: false,
        image: 'https://plantae.co.za/wp-content/uploads/2022/01/Rhyncholaeliocattleya-Taichung-Beauty-Qing-Ming-8.png',
        color: 'pink',
        numberOfLike: 192,
        origin: 'Taiwan',
        category: 'Cattleya',
    },

    {
        id: '2',
        name: 'Royal Purple',
        rating: 4,
        isSpecial: true,
        isNature: true,
        image: 'https://th.bing.com/th/id/R.6d134c656e5f91d126cfc1a45d81f03a?rik=JhM60srKHBqi%2bg&pid=ImgRaw&r=0',
        color: 'purple',
        numberOfLike: 150,
        origin: 'Thailand',
        category: 'Dendrobium',
    },

    {
        id: '3',
        name: 'Golden SunSet',
        rating: 5,
        isSpecial: false,
        isNature: true,
        image: 'https://ih0.redbubble.net/image.4149764.6976/flat,1000x1000,075,f.u3.jpg',
        color: 'yellow',
        numberOfLike: 210,
        origin: 'Brazil',
        category: 'Oncidium',
    },

    {
        id: '4',
        name: 'Snow White',
        rating: 4,
        isSpecial: true,
        isNatural: false,
        image: 'https://tse2.mm.bing.net/th/id/OIP.Xurdw5ROCZv4YKSViUFHJgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
        color: 'white',
        numberOfLike: 234,
        origin: 'Japan',
        category: 'Phalaenopsis'
    },

    {
        id: '5',
        name: 'Crimson Glory',
        rating: 5,
        isSpecial: true,
        isNatural: true,
        image: 'https://th.bing.com/th/id/R.1943833ccddf336609f8924a892788ec?rik=cINOUp9jzRSgnQ&pid=ImgRaw&r=0',
        color: 'red',
        numberOfLike: 178,
        origin: 'Ecuador',
        category: 'Cattleya'
    },

    {
        id: '6',
        name: 'Azure Dream',
        rating: 3,
        isSpecial: false,
        isNatural: true,
        image: 'https://tse1.mm.bing.net/th/id/OIP.OUg6obH8R2WEbqJkS4DwpQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
        color: 'blue',
        numberOfLike: 67,
        origin: 'Colombia',
        category: 'Vanda'
    },

    {
        id: '7',
        name: 'Emerald Princess',
        rating: 4,
        isSpecial: true,
        isNatural: false,
        image: 'https://static.wixstatic.com/media/356cdc_db29c1acb1f44ff98267daa0ee05c4d7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
        color: 'green',
        numberOfLike: 145,
        origin: 'Malaysia',
        category: 'Paphiopedilum'
    },

    {
        id: '8',
        name: 'Sunset Orange',
        rating: 5,
        isSpecial: false,
        isNatural: true,
        image: 'https://tse4.mm.bing.net/th/id/OIP.nzCuf9m4y798xwLtiAbrWQHaFL?rs=1&pid=ImgDetMain&o=7&rm=3',
        color: 'orange',
        numberOfLike: 112,
        origin: 'Philippines',
        category: 'Dendrobium'
    },

    {
        id: '9',
        name: 'Lavender Mist',
        rating: 4,
        isSpecial: true,
        isNatural: true,
        image: 'https://th.bing.com/th/id/R.ad2df0f017278922528f40d8e04eb14b?rik=26qxAkJvITEUFg&pid=ImgRaw&r=0',
        color: 'lavender',
        numberOfLike: 203,
        origin: 'Singapore',
        category: 'Phalaenopsis'
    },
    {
        id: '10',
        name: 'Midnight Black',
        rating: 5,
        isSpecial: true,
        isNatural: false,
        image: 'https://tse4.mm.bing.net/th/id/OIP.DNEHDnQsAJVZrDv_y5gw-AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        color: 'black',
        numberOfLike: 287,
        origin: 'Peru',
        category: 'Miltonia'
    },
    {
        id: '11',
        name: 'Rose Blush',
        rating: 3,
        isSpecial: false,
        isNatural: true,
        image: 'https://tse1.mm.bing.net/th/id/OIP.NtViAHb2IBqbEaL8WxdLqQHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',
        color: 'pink',
        numberOfLike: 156,
        origin: 'Vietnam',
        category: 'Cattleya'
    },
    {
        id: '12',
        name: 'Copper Flame',
        rating: 4,
        isSpecial: false,
        isNatural: true,
        image: 'https://tse4.mm.bing.net/th/id/OIP.CZUQONmxx4KaZ2wfHdFt3QHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',
        color: 'copper',
        numberOfLike: 98,
        origin: 'Costa Rica',
        category: 'Oncidium'
    },
    {
        id: '13',
        name: 'Pearl Elegance',
        rating: 5,
        isSpecial: true,
        isNatural: false,
        image: 'https://tse2.mm.bing.net/th/id/OIP.dkvxKJfqPaiti1zLf3UufgHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3',
        color: 'cream',
        numberOfLike: 189,
        origin: 'Australia',
        category: 'Cymbidium'
    },
    {
        id: '14',
        name: 'Ruby Red',
        rating: 4,
        isSpecial: true,
        isNatural: true,
        image: 'https://tse1.mm.bing.net/th/id/OIP.x3XVdYKNMIs-tcr53VI8rgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        color: 'red',
        numberOfLike: 165,
        origin: 'Myanmar',
        category: 'Vanda'
    },
    {
        id: '15',
        name: 'Violet Storm',
        rating: 5,
        isSpecial: true,
        isNatural: true,
        image: 'https://miro.medium.com/v2/resize:fit:750/1*fu66bLmugQa0sgDhbeV6EA.jpeg',
        color: 'violet',
        numberOfLike: 221,
        origin: 'India',
        category: 'Dendrobium'
    },
    {
        id: '16',
        name: 'Champagne Gold',
        rating: 4,
        isSpecial: false,
        isNatural: false,
        image: 'https://th.bing.com/th/id/R.e0e7a5db39266cce4130f212ca324cc5?rik=GdqlPgO0AEXN2Q&pid=ImgRaw&r=0',
        color: 'gold',
        numberOfLike: 134,
        origin: 'New Zealand',
        category: 'Phalaenopsis'
    }
];
export { ListOfOrchids };