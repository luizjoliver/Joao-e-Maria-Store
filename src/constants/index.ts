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
  

  export const Products : ProductTypeProps[] = [
      {
        id:1,
        name:'Adidas runner',
        category:'Treino',
        sizes:[34,35,36,37,38,39,40,41.5,42,43],
        colors:['black','amber','blue'],
        price:299.90,
        img:'/adidas.png',
        featured:false
      },
      {
        id:2,
        name:'Sapa tênis kesis',
        category:'Casual',
        sizes:[34,35,36,37,38,39,40],
        colors:['slate'],
        price:189.90,
        img:'/sapatenis.png',
        featured:false
      },
      {
        id:3,
        name:'Nike MD Runner',
        category:'Treino',
        sizes:[34,35,36,37,38,39,40,41.5,42,43,44,44.5,50,51,56],
        colors:['red','blue','slate','black'],
        price:590.99,
        img:'/nike1.png',
        featured:false
      },
      {
        id:4,
        name:'Sapa tênis casual',
        category:'Casual',
        sizes:[34,37,38,39,40,41.5,42,],
        colors:['amber'],
        price:180.99,
        img:'/sapatenis2.png',
        featured:false
      },
      {
        id:5,
        name:'Tênis Nike Air Max SYSTM Masculino',
        category:'Casual',
        sizes:[34,35,36,37,38,39,40,41.5,42,43],
        colors:['white'],
        price:590.99,
        img:'/airmax.png',
        featured:false
      },
      {
        id:6,
        name:'Nike Viper V2',
        category:'Casual',
        sizes:[25,28,34,35,36,37,38,39,40,41,42,43],
        colors:['black','red'],
        price:690.99,
        img:'/nike2.png',
        featured:false
      }
     


  ]

  export const ProductsFeatured : ProductTypeProps[] = [
    {
      id:1,
      name:'Adidas runner',
      category:'Treino',
      price:299.90,
      sizes:[34,35,36,37,38,39,40,41.5,42,43],
      img:'/nike4.png',
      featured:true
    },
    {
      id:2,
      name:'Sapa tênis kesis',
      category:'Casual',
      sizes:[34,35,36,37,38,39,40,41.5,42,43],
      price:189.90,
      img:'/sapatenis.png',
      featured:true
    },
    {
      id:3,
      name:'Nike MD Runner',
      category:'Treino',
      sizes:[34,35,36,37,38,39,40,41.5,42,43],
      price:590.99,
      img:'/nike1.png',
      featured:true
    },
    {
      id:4,
      name:'Adidas runner',
      category:'Treino',
      sizes:[34,35,36,37,38,39,40,41.5,42,43],
      price:299.90,
      img:'/adidas.png',
      featured:true
    },
    {
      id:5,
      name:'Sapa tênis casual',
      category:'Casual',
      sizes:[34,35,36,37,38,39,40,41.5,42,43],
      price:180.99,
      img:'/nike3.png',
      featured:true
    },
  
    {
      id:6,
      name:'Nike MD Runner',
      category:'Treino',
      sizes:[34,35,36,37,38,39,40,41.5,42,43],
      price:590.99,
      img:'/nike1.png',
      featured:true
    },
     
    {
      id:7,
      name:'Sapa tênis kesis',
      category:'Casual',
      sizes:[34,35,36,37,38,39,40,41.5,42,43],
      price:189.90,
      img:'/sapatenis.png',
      featured:true
    },

    {
      id:8,
      name:'Sapa tênis casual',
      category:'Casual',
      sizes:[34,35,36,37,38,39,40,41.5,42,43],
      price:180.99,
      img:'/sapatenis2.png',
      featured:true
    },
    


]

export const ProductsFeatured2 : ProductTypeProps[] = [
  {
    id:1,
    name:'Adidas runner',
    category:'Treino',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:299.90,
    img:'/bone1.png',
    featured:true
  },
  {
    id:2,
    name:'Sapa tênis kesis',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:189.90,
    img:'/feminina.png',
    featured:true
  },
  {
    id:3,
    name:'Nike MD Runner',
    category:'Treino',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:590.99,
    img:'/camisadetime.png',
    featured:true
  },
  {
    id:4,
    name:'Adidas runner',
    category:'Treino',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:299.90,
    img:'/feminina1.png',
    featured:true
  },
  {
    id:5,
    name:'Sapa tênis casual',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:180.99,
    img:'/meia1.png',
    featured:true
  },

  {
    id:6,
    name:'Nike MD Runner',
    category:'Treino',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:590.99,
    img:'/camisa1.png',
    featured:true
  },
   
  {
    id:7,
    name:'Sapa tênis kesis',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:189.90,
    img:'/camisa2.png',
    featured:true
  },
  
  {
    id:8,
    name:'Sapa tênis casual',
    category:'Casual',
    sizes:[34,35,36,37,38,39,40,41.5,42,43],
    price:180.99,
    img:'/camisa3.png',
    featured:true
  },
  


]


export const SingleProductImages : ProductTypeProps[] = [
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
    img:'/adidas.png',
  
  },
  {
    id:2,
    img:'/sapatenis.png',
  
  },
  {
    id:3,
    img:'/nike1.png',
  
  },
  {
    id:4,
    img:'/sapatenis2.png',
  
  },
  {
    id:5,
    img:'/airmax.png',
  
  }

]