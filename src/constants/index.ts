import { ProductTypeProps } from "@/components/ProductsCard";



export const CategoriesCards = [
    {
      id:1,
      categoryName:"Casual",
      pictureUrl:"/casual.png"
    }
    ,{id:2,
      categoryName:"Corrida",
      pictureUrl:"/corrida.png"
    },{id:3,
      categoryName:"Futebol",
      pictureUrl:"/futebol.png"
    },
    {id:4,
      categoryName:"Treino",
      pictureUrl:"/treino1.png"
    },
    {id:5,
      categoryName:"NikeDunk",
      pictureUrl:"/nikedunk.png"
    }
    ,
    {id:6,
      categoryName:"nikekillshot",
      pictureUrl:"/nikekillshot.png"
    },
    ,{id:7,
      categoryName:"nikev2k",
      pictureUrl:"/nikev2k.png"
    }
    
    ,
    
    {id:8,
      categoryName:"Casual",
      pictureUrl:"/casual.png"
    }
  ]
  
  

  export const categoriesMenu = [
    {  
      title: "Lançamentos",
      subcategories: [
        { id:1,
          subtitle: "Destaques",
          items: [
            { name: "Nike", link: "/destaques/nike" },
            { name: "Botafogo", link: "/destaques/botafogo" },
            { name: "Adidas", link: "/destaques/adidas" }
          ]
        },
        {
          id:2,
          subtitle: "Feminino",
          items: [
            { name: "Calçados", link: "/lancamentos/feminino/calcados" },
            { name: "Roupas", link: "/lancamentos/feminino/roupas" },
            { name: "Acessórios", link: "/lancamentos/feminino/acessorios" }
          ]
        },
        { id:3,
          subtitle: "Masculino",
          items: [
            { name: "Calçados", link: "/lancamentos/masculino/calcados" },
            { name: "Roupas", link: "/lancamentos/masculino/roupas" },
            { name: "Acessórios", link: "/lancamentos/masculino/acessorios" }
          ]
        },
        { id:4,
          subtitle: "Infantil",
          items: [
            { name: "Calçados", link: "/lancamentos/infantil/calcados" },
            { name: "Roupas", link: "/lancamentos/infantil/roupas" },
            { name: "Acessórios", link: "/lancamentos/infantil/acessorios" }
          ]
        }
      ]
     },
    { 
      title: "Ofertas",
      subcategories: [
        { id:5,
          subtitle: "Destaques",
          items: [
            { name: "Vestuário", link: "/ofertas/destaque/vestuario" },
            { name: "Natal", link: "/ofertas/destaque/natal" },
            { name: "Ano novo", link: "/ofertas/destaque/anonovo" }
          ]
        },
        { id:6,
          subtitle: "Feminino",
          items: [
            { name: "Calçados", link: "/ofertas/feminino/calcados" },
            { name: "Roupas", link: "/ofertas/feminino/roupas" },
            { name: "Acessórios", link: "/ofertas/feminino/acessorios" }
          ]
        },
        { id:7,
          subtitle: "Masculino",
          items: [
            { name: "Calçados", link: "/ofertas/masculino/calcados" },
            { name: "Roupas", link: "/ofertas/masculino/roupas" },
            { name: "Acessórios", link: "/ofertas/masculino/acessorios" }
          ]
        },
        { id:8,
          subtitle: "Infantil",
          items: [
            { name: "Calçados", link: "/ofertas/infantil/calcados" },
            { name: "Roupas", link: "/ofertas/infantil/roupas" },
            { name: "Acessórios", link: "/ofertas/infantil/acessorios" }
          ]
        }
      ]
    },
    { 
      title: "Feminino",
      subcategories: [
        {  id:9,
          subtitle: "Maquiagem",
          items: [
            { name: "Boticário", link: "/feminino/maquiagem/boticario" },
            { name: "Boca Rosa", link: "/feminino/maquiagem/bocarosa" },
            { name: "Gkay", link: "/feminino/maquiagem/gkay" }
          ]
        },
        { id:10,
          subtitle: "Roupas",
          items: [
            { name: "Tops", link: "/feminino/roupas/tops" },
            { name: "Shorts", link: "/feminino/roupas/shorts" },
            { name: "Leggings", link: "/feminino/roupas/leggings" }
          ]
        },
        { id:11,
          subtitle: "Calçado",
          items: [
            { name: "Corrida", link: "/feminino/calcado/corrida" },
            { name: "Academia", link: "/feminino/calcado/academia" },
            { name: "Chuteira", link: "/feminino/calcado/chuteira" }
          ]
        },
        { id:12,
          subtitle: "Acessórios",
          items: [
            { name: "Relógios", link: "/feminino/acessorios/relogios" },
            { name: "Bonés", link: "/feminino/acessorios/bones" },
            { name: "Bolsas", link: "/feminino/acessorios/bolsas" }
          ]
        }
      ]
    },
    { 
      title: "Masculino",
      subcategories: [
        { id:13
        ,
          subtitle: "Camisa de time",
          items: [
            { name: "Futebol", link: "/masculino/camisa/futebol" },
            { name: "Basquete", link: "/masculino/camisa/basquete" },
            { name: "Vôlei", link: "/masculino/camisa/volei" }
          ]
        },
        { id:14,
          subtitle: "Feminino",
          items: [
            { name: "Calçados", link: "/masculino/feminino/calcados" },
            { name: "Roupas", link: "/masculino/feminino/roupas" },
            { name: "Acessórios", link: "/masculino/feminino/acessorios" }
          ]
        },
        { id:15,
          subtitle: "Masculino",
          items: [
            { name: "Calçados", link: "/masculino/masculino/calcados" },
            { name: "Roupas", link: "/masculino/masculino/roupas" },
            { name: "Acessórios", link: "/masculino/masculino/acessorios" }
          ]
        },
        { id:16,
          subtitle: "Infantil",
          items: [
            { name: "Calçados", link: "/masculino/infantil/calcados" },
            { name: "Roupas", link: "/masculino/infantil/roupas" },
            { name: "Acessórios", link: "/masculino/infantil/acessorios" }
          ]
        }
      ]
    }
  ];
  


export const Products: ProductTypeProps[] = [
  {
    id: 1,
    name: 'Adidas runner',
    category: 'Treino',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 299.9,
    img: [
      { colorImg: 'black', url: ['/adidas/adidas.png','/adidas/adidas1.png','/adidas/adidas2.png','/adidas/adidas3.png'] },
  
    ],
    featured: false
  },
  {
    id: 2,
    name: 'Sapa tênis kesis',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40],
    price: 189.9,
    img: [{ colorImg: 'slate', url: ['/sapatenis1/sapatenis.png','/sapatenis1/sapatenis1.png','/sapatenis1/sapatenis2.png','/sapatenis1/sapatenis3.png'] }],
    featured: false
  },
  {
    id: 3,
    name: 'Nike MD Runner',
    category: 'Treino',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43, 44, 44.5, 50, 51, 56],
    price: 590.99,
    img: [
      { colorImg: 'black', url: ['/nike/nike.png','/nike/nike1.png','/nike/nike2.png','/nike/nike3.png','/nike/nike4.png'] },
      // { colorImg: 'blue', url: ['/nike1.png'] },
      // { colorImg: 'slate', url: ['/nike1.png'] },
      // { colorImg: 'red', url: ['/nike1.png'] }
    ],
    featured: false
  },
  {
    id: 4,
    name: 'Nike feminino SX-3',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 380.99,
    img: [{ colorImg: 'pink', url: ['/nike2/nike.png','/nike2/nike1.png','/nike2/nike2.png'] }],
    featured: true
  },
  {
    id: 5,
    name: 'Tênis Nike Air Max SC Masculino',
    category: 'Treino',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43, 44, 44.5, 50, 51, 56, 89, 67, 86, 77, 21],
    price: 590.99,
    img: [
      { colorImg: 'white', url: ['/nike3/nike.png','/nike3/nike1.png','/nike3/nike2.png','/nike3/nike3.png']  },
      // { colorImg: 'blue', url: ['/airmax.png'] },
      // { colorImg: 'slate', url: ['/airmax.png'] },
      // { colorImg: 'black', url: ['/airmax.png'] }
    ],
    featured: false
  },
  {
    id: 6,
    name: 'Nike Shox',
    category: 'casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 999.99,
    img: [
      { colorImg: 'black', url: ['/nike4/nike.png','/nike4/nike1.png','/nike4/nike2.png','/nike4/nike3.png','/nike4/nike4.png','/nike4/nike5.png'] },
      // { colorImg: 'yellow', url: ['/nikeShox.png'] }
    ],
    featured: true
  },
  {
    id: 7,
    name: 'Sapa tênis kesis',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 189.9,
    img: [{ colorImg: 'black', url: ['/sapatenis2/sapatenis.png','/sapatenis2/sapatenis1.png','/sapatenis2/sapatenis2.png','/sapatenis2/sapatenis3.png','/sapatenis2/sapatenis4.png'] }],
    featured: true
  },
  {
    id: 8,
    name: 'Sapa tênis casual',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 180.99,
    img: [{ colorImg: 'black', url: ['/sapatenis2/sapatenis.png','/sapatenis2/sapatenis1.png','/sapatenis2/sapatenis2.png','/sapatenis2/sapatenis3.png','/sapatenis2/sapatenis4.png'] }],
    featured: true
  },
  {
    id: 9,
    name: 'Boné Nike',
    category: 'Casual',
    sizes: ['P'],
    price: 299.9,
    img: [
      { colorImg: 'black', url: ['/bone/bone.png','/bone/bone1.png'] },
      // { colorImg: 'white', url: ['/bone1.png'] },
      // { colorImg: 'red', url: ['/bone1.png'] }
    ],
    featured: true
  },
  {
    id: 10,
    name: 'Sapa tênis 3sx femme',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 189.9,
    img: [
      { colorImg: 'pink', url: ['/nike5/nike.png','/nike5/nike1.png','/nike5/nike2.png','/nike5/nike3.png','/nike5/nike4.png'] },
      // { colorImg: 'red', url: ['/feminina.png'] },
      // { colorImg: 'black', url: ['/feminina.png'] }
    ],
    featured: true
  },
  {
    id: 11,
    name: 'Camiseta 24/25 Corinthians',
    category: 'Futebol',
    sizes: ['P', 'M', 'G', 'X', 'XX', 'XXX'],
    price: 590.99,
    img: [{ colorImg: 'black', url: ['/camisa1/camisa.png','/camisa1/camisa1.png','/camisa1/camisa2.png','/camisa1/camisa3.png'] }],
    featured: true
  },
  {
    id: 12,
    name: 'Legging Shorts Academia',
    category: 'Treino',
    sizes: ['P', 'M'],
    price: 299.9,
    img: [{ colorImg: 'slate', url: ['/feminina1.png'] }],
    featured: true
  },
  {
    id: 13,
    name: 'Meia Nike Cano Longo',
    category: 'Casual',
    sizes: ['P', 'M'],
    price: 180.99,
    img: [{ colorImg: 'white', url: ['/meia1.png'] }],
    featured: true
  },
  {
    id: 14,
    name: 'Camisa Compressão Nike',
    category: 'Treino',
    sizes: ['M'],
    price: 590.99,
 
    img: [{ colorImg: 'black', url: ['/camisa2/camisa.png','/camisa2/camisa1.png','/camisa2/camisa2.png'] }],
    featured: true
  },
  {
    id: 15,
    name: 'Camisa SB-Summer Nike',
    category: 'Casual',
    sizes: ['P', 'M', 'G'],
   
    price: 189.9,
    img: [{ colorImg: 'amber',  url: ['/camisa3/camisa.png','/camisa3/camisa1.png','/camisa3/camisa2.png'] }],
    featured: true
  },
  {
    id: 16,
    name: 'Camisa FC Barcelona',
    category: 'Futebol',
    sizes: ['P', 'M', 'G', 'XX'],
    price: 499.99,
   
    img: [{ colorImg: 'red',url: ['/camisa4/camisa.png','/camisa4/camisa1.png','/camisa4/camisa2.png','/camisa4/camisa3.png','/camisa4/camisa4.png','/camisa4/camisa5.png'] }],
    featured: true
  }
];


export const ProductsFeatured: ProductTypeProps[] = [
  {
    id: 1,
    name: 'Adidas runner',
    category: 'Treino',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
   
    price: 299.9,
    img: [
      { colorImg: 'black', url: ['/adidas/adidas.png','/adidas/adidas1.png','/adidas/adidas2.png','/adidas/adidas3.png'] },
      // { colorImg: 'amber', url: ['/adidas.png'] },
      // { colorImg: 'blue', url: ['/adidas.png'] }
    ],
    featured: true
  },
  {
    id: 2,
    name: 'Sapa tênis kesis',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40],

    price: 189.9,
    img: [{ colorImg: 'slate', url: ['/sapatenis1/sapatenis.png'] }],
    featured: true
  },
  {
    id: 3,
    name: 'Nike MD Runner',
    category: 'Treino',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],

    price: 590.99,
    img: [
      { colorImg: 'black', url: ['/nike/nike.png','/nike/nike1.png','/nike/nike2.png','/nike/nike3.png','/nike/nike4.png'] },
      // { colorImg: 'white', url: ['/nike1.png'] }
    ],
    featured: true
  },
  {
    id: 4,
    name: 'Sapa tênis casual',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
   
    price: 180.99,
    img: [
      { colorImg: 'brown', url: ['/nike3.png'] },
      { colorImg: 'gray', url: ['/nike3.png'] }
    ],
    featured: true
  },
  {
    id: 5,
    name: 'Sapa tênis casual',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
  
    price: 180.99,
    img: [
      { colorImg: 'brown', url: ['/nike3.png'] },
      { colorImg: 'gray', url: ['/nike3.png'] }
    ],
    featured: true
  },
  {
    id: 6,
    name: 'Nike Shox',
    category: 'casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
 
    price: 999.99,
    img: [
      { colorImg: 'red', url: ['/nikeShox.png'] },
      { colorImg: 'silver', url: ['/nikeShox.png'] }
    ],
    featured: true
  },
  {
    id: 7,
    name: 'Sapa tênis kesis',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
   
    price: 189.9,
    img: [{ colorImg: 'slate', url: ['/sapatenis.png'] }],
    featured: true
  },
  {
    id: 8,
    name: 'Sapa tênis casual',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 180.99,
    img: [
      { colorImg: 'brown', url: ['/sapatenis2/sapatenis.png','/sapatenis2/sapatenis1.png','/sapatenis2/sapatenis2.png','/sapatenis2/sapatenis3.png','/sapatenis2/sapatenis4.png'] },
      // { colorImg: 'gray', url: ['/sapatenis2.png'] }
    ],
    featured: true
  }
];


export const ProductsFeatured2: ProductTypeProps[] = [
  {
    id: 9,
    name: 'Boné Nike',
    category: 'Casual',
    sizes: ['P'],
    price: 299.9,
    img: [{ colorImg: 'black', url: ['/bone1.png'] }],
    featured: true
  },
  {
    id: 10,
    name: 'Sapa tênis kesis',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 189.9,
    img: [{ colorImg: 'slate', url: ['/feminina.png'] }],
    featured: true
  },
  {
    id: 11,
    name: 'Nike MD Runner',
    category: 'Treino',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 590.99,
    img: [
      { colorImg: 'black', url: ['/camisadetime.png'] },
      { colorImg: 'white', url: ['/camisadetime.png'] }
    ],
    featured: true
  },
  {
    id: 12,
    name: 'Adidas runner',
    category: 'Treino',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
 
    price: 299.9,
    img: [
      { colorImg: 'black', url: ['/feminina1.png'] },
      { colorImg: 'amber', url: ['/feminina1.png'] },
      { colorImg: 'blue', url: ['/feminina1.png'] }
    ],
    featured: true
  },
  {
    id: 13,
    name: 'Sapa tênis casual',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],

    price: 180.99,
    img: [
      { colorImg: 'brown', url: ['/meia1.png'] },
      { colorImg: 'gray', url: ['/meia1.png'] }
    ],
    featured: true
  },
  {
    id: 14,
    name: 'Nike MD Runner',
    category: 'Treino',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 590.99,
    img: [
      { colorImg: 'black', url: ['/camisa1.png'] },
      { colorImg: 'white', url: ['/camisa1.png'] }
    ],
    featured: true
  },
  {
    id: 15,
    name: 'Sapa tênis kesis',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],

    price: 189.9,
    img: [{ colorImg: 'slate', url: ['/camisa2.png'] }],
    featured: true
  },
  {
    id: 16,
    name: 'Sapa tênis casual',
    category: 'Casual',
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 180.99,
    img: [
      { colorImg: 'brown', url: ['/camisa3.png'] },
      { colorImg: 'gray', url: ['/camisa3.png'] }
    ],
    featured: true
  }
];

export type SingleProductTypeProps = {
  id: number;
  name: string;
  price: number;
  img: string;
  sizes:number[] | string [];
  category: string;
  featured: boolean;
}
export const SingleProductImages : SingleProductTypeProps[] = [
  {
    id:1,
    name:' Tênis Nike Air Max SYSTM Masculino ',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:590.99,
    img:'/nike2t.png',
    featured:false
  },
  {
    id:2,
    name:'Tênis Nike Air Max SYSTM Masculino',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:590.99,
    img:'/nike222.png',
    featured:false
  },
  {
    id:3,
    name:'Tênis Nike Air Max SYSTM Masculino',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:590.99,
    img:'/nike222.png',
    featured:false
  },
  {
    id:4,
    name:'Tênis Nike Air Max SYSTM Masculino',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:590.99,
    img:'/nike2222.png',
    featured:false
  },
  {
    id:5,
    name:'Tênis Nike Air Max SYSTM Masculino',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:590.99,
    img:'/nike22222.png',
    featured:false
  },
  {
    id:6,
    name:'Tênis Nike Air Max SYSTM Masculino',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:590.99,
    img:'/nike222222.png',
    featured:false
  }
 


]

export const RecomendedProducts = [

  {
    id:1,
    img:'/adidas/adidas.png',
  
  },
  {
    id:2,
    img:'/sapatenis1/sapatenis.png',
  
  },
  {
    id:3,
    img:'/nike/nike.png',
  
  },
  {
    id:4,
    img:'/sapatenis2/sapatenis.png',
  
  },
  {
    id:5,
    img:'/nike3/nike.png',
  
  }

]