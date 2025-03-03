import { ProductTypeProps } from "@/components/ProductsCard";

export const CategoriesCards = [
  {
    id: 1,
    categoryName: "Casual",
    pictureUrl: "/casual.png",
  },
  { id: 2, categoryName: "Corrida", pictureUrl: "/corrida.png" },
  { id: 3, categoryName: "Futebol", pictureUrl: "/futebol.png" },
  { id: 4, categoryName: "Treino", pictureUrl: "/treino1.png" },
  { id: 5, categoryName: "NikeDunk", pictureUrl: "/nikedunk.png" },
  { id: 6, categoryName: "nikekillshot", pictureUrl: "/nikekillshot.png" },
  ,
  { id: 7, categoryName: "nikev2k", pictureUrl: "/nikev2k.png" },

  { id: 8, categoryName: "Casual", pictureUrl: "/casual.png" },
];

export const categoriesMenu = [
  {
    title: "Lançamentos",
    subcategories: [
      {
        id: 1,
        subtitle: "Destaques",
        items: [
          { name: "Nike", link: "/ofertas" },
          { name: "Botafogo", link: "/ofertas" },
          { name: "Adidas", link: "/ofertas" },
        ],
      },
      {
        id: 2,
        subtitle: "Feminino",
        items: [
          { name: "Calçados", link: "/ofertas" },
          { name: "Roupas", link: "/ofertas" },
          { name: "Acessórios", link: "/ofertas" },
        ],
      },
      {
        id: 3,
        subtitle: "Masculino",
        items: [
          { name: "Calçados", link: "/ofertas" },
          { name: "Roupas", link: "/ofertas" },
          { name: "Acessórios", link: "/ofertas" },
        ],
      },
      {
        id: 4,
        subtitle: "Infantil",
        items: [
          { name: "Calçados", link: "/ofertas" },
          { name: "Roupas", link: "/ofertas" },
          { name: "Acessórios", link: "/ofertas" },
        ],
      },
    ],
  },
  {
    title: "Ofertas",
    subcategories: [
      {
        id: 5,
        subtitle: "Destaques",
        items: [
          { name: "Vestuário", link: "/ofertas" },
          { name: "Natal", link: "/ofertas" },
          { name: "Ano novo", link: "/ofertas" },
        ],
      },
      {
        id: 6,
        subtitle: "Feminino",
        items: [
          { name: "Calçados", link: "/ofertas/" },
          { name: "Roupas", link: "/ofertas" },
          { name: "Acessórios", link: "/ofertas/" },
        ],
      },
      {
        id: 7,
        subtitle: "Masculino",
        items: [
          { name: "Calçados", link: "/ofertas" },
          { name: "Roupas", link: "/ofertas" },
          { name: "Acessórios", link: "/ofertas" },
        ],
      },
      {
        id: 8,
        subtitle: "Infantil",
        items: [
          { name: "Calçados", link: "/ofertas" },
          { name: "Roupas", link: "/ofertas" },
          { name: "Acessórios", link: "/ofertas" },
        ],
      },
    ],
  },
  {
    title: "Feminino",
    subcategories: [
      {
        id: 9,
        subtitle: "Maquiagem",
        items: [
          { name: "Boticário", link: "/ofertas" },
          { name: "Boca Rosa", link: "/ofertas" },
          { name: "Gkay", link: "/ofertas" },
        ],
      },
      {
        id: 10,
        subtitle: "Roupas",
        items: [
          { name: "Tops", link: "/ofertas" },
          { name: "Shorts", link: "/ofertas" },
          { name: "Leggings", link: "/ofertas" },
        ],
      },
      {
        id: 11,
        subtitle: "Calçado",
        items: [
          { name: "Corrida", link: "/ofertas"},
          { name: "Academia", link: "/ofertas" },
          { name: "Chuteira", link: "/ofertas" },
        ],
      },
      {
        id: 12,
        subtitle: "Acessórios",
        items: [
          { name: "Relógios", link: "/ofertas" },
          { name: "Bonés", link: "/ofertas" },
          { name: "Bolsas", link: "/ofertas" },
        ],
      },
    ],
  },
  {
    title: "Masculino",
    subcategories: [
      {
        id: 13,
        subtitle: "Camisa de time",
        items: [
          { name: "Futebol", link: "/ofertas" },
          { name: "Basquete", link: "/ofertas" },
          { name: "Vôlei", link: "/ofertas" },
        ],
      },
      {
        id: 14,
        subtitle: "Feminino",
        items: [
          { name: "Calçados", link: "/ofertas" },
          { name: "Roupas", link: "/ofertas" },
          { name: "Acessórios", link: "/ofertas" },
        ],
      },
      {
        id: 15,
        subtitle: "Masculino",
        items: [
          { name: "Calçados", link: "/ofertas"},
          { name: "Roupas", link: "/ofertas" },
          { name: "Acessórios", link: "/ofertas" },
        ],
      },
      {
        id: 16,
        subtitle: "Infantil",
        items: [
          { name: "Calçados", link: "/ofertas" },
          { name: "Roupas", link: "/ofertas" },
          { name: "Acessórios", link: "/ofertas" },
        ],
      },
    ],
  },
];

export const Products: ProductTypeProps[] = [
  {
    id: 1,
    name: "Adidas runner",
    category: "Treino",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    colors: ["black", "amber", "blue"],
    price: 299.9,
    img: [
      {
        colorImg: "black",
        url: [
          "/adidas/adidas.png",
          "/adidas/adidasum.png",
          "/adidas/adidasdois.png",
          "/adidas/adidastres.png",
          "/adidas/adidasquatro.png"
        ],
      },
    ],
    featured: false,
  },
  {
    id: 2,
    name: "Sapa tênis kesis",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40],
    colors: ["slate"],
    price: 189.9,
    img: [
      {
        colorImg: "slate",
        url: [
          "/sapatenis/sapatenis.png",
          "/sapatenis/sapatenisum.png",
          "/sapatenis/sapatenisdois.png",
          "/sapatenis/sapatenistres.png",
        ],
      },
    ],
    featured: false,
  },
  {
    id: 3,
    name: "Nike MD Runner",
    category: "Treino",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43, 44, 44.5, 50, 51, 56],
    price: 590.99,
    colors: ["black", "blue", "slate", "red"],
    img: [
      {
        colorImg: "black",
        url: [
          "/nike/nikezero.png",
          "/nike/nikeum.png",
          "/nike/nikedois.png",
          "/nike/niketres.png",
          "/nike/nikequatro.png",
        ],
      },
      //  { colorImg: 'blue', url: ['/nike1.png'] },
      // { colorImg: 'slate', url: ['/nike1.png'] },
      // { colorImg: 'red', url: ['/nike1.png'] }
    ],
    featured: false,
  },
  {
    id: 4,
    name: "Nike feminino SX-3",
    category: "Casual",
    colors: ["pink"],
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 380.99,
    img: [
      {
        colorImg: "pink",
        url: ["/nikedois/nike.png", "/nikedois/nikeum.png", "/nikedois/nikedois.png"],
      },
    ],
    featured: true,
  },
  {
    id: 5,
    name: "Tênis Nike Air Max SC Masculino",
    category: "Treino",
    sizes: [
      34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43, 44, 44.5, 50, 51, 56, 89, 67,
      86, 77, 21,
    ],
    price: 590.99,
    colors: ["white", "blue", "slate", "black"],
    img: [
      {
        colorImg: "white",
        url: [
          "/niketres/nike.png",
          "/niketres/nikeum.png",
          "/niketres/nikedois.png",
          "/niketres/niketres.png",
        ],
      },
      // { colorImg: 'blue', url: ['/airmax.png'] },
      // { colorImg: 'slate', url: ['/airmax.png'] },
      // { colorImg: 'black', url: ['/airmax.png'] }
    ],
    featured: false,
  },
  {
    id: 6,
    name: "Nike Shox",
    category: "casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 999.99,
    colors: ["black", "yellow"],
    img: [
      {
        colorImg: "black",
        url: [
          "/nikequatro/nike.png",
          "/nikequatro/nikeum.png",
          "/nikequatro/nikedois.png",
          "/nikequatro/niketres.png",
          "/nikequatro/nikequatro.png",
          "/nikequatro/nikefive.png",
        ],
      },
      // { colorImg: 'yellow', url: ['/nikeShox.png'] }
    ],
    featured: true,
  },
  {
    id: 7,
    name: "Sapa tênis kesis",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 189.9,
    colors: ["black"],
    img: [
      {
        colorImg: "black",
        url: [
          "/nikefive/nike.png",
          "/nikefive/nikeum.png",
          "/nikefive/nikedois.png",
          "/nikefive/niketres.png",
          "/nikefive/nikequatro.png",
        ],
      },
    ],
    featured: true,
  },
  {
    id: 8,
    name: "Sapa tênis casual",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 180.99,
    colors: ["black"],
    img: [
      {
        colorImg: "black",
        url: [
          "/sapatenisdois/sapatenis.png",
          "/sapatenisdois/sapatenisum.png",
          "/sapatenisdois/sapatenisdois.png",
          "/sapatenisdois/sapatenistres.png",
          "/sapatenisdois/sapatenisquatro.png",
        ],
      },
    ],
    featured: true,
  },
  {
    id: 9,
    name: "Boné Nike",
    category: "Casual",
    sizes: ["P"],
    price: 299.9,
    img: [
      { colorImg: "black", url: ["/bone/bonezero.png", "/bone/boneum.png"] },
      // { colorImg: 'white', url: ['/bone1.png'] },
      // { colorImg: 'red', url: ['/bone1.png'] }
    ],
    colors: ["black", "white", "red"],
    featured: true,
  },
  {
    id: 10,
    name: "Sapa tênis 3sx femme",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 189.9,
    img: [
      {
        colorImg: "pink",
        url: [
          "/nikefive/nike.png",
          "/nikefive/nikeum.png",
          "/nikefive/nikedois.png",
          "/nikefive/niketres.png",
          "/nikefive/nikequatro.png",
        ],
      },
      // { colorImg: 'red', url: ['/feminina.png'] },
      // { colorImg: 'black', url: ['/feminina.png'] }
    ],
    colors: ["pink", "red", "black"],
    featured: true,
  },
  {
    id: 11,
    name: "Camiseta 24/25 Corinthians",
    category: "Futebol",
    sizes: ["P", "M", "G", "X", "XX", "XXX"],
    price: 590.99,
    img: [
      {
        colorImg: "black",
        url: [
          "/camisaum/camisa.png",
          "/camisaum/camisaum.png",
          "/camisaum/camisadois.png",
          "/camisaum/camisatres.png",
        ],
      },
    ],
    colors: ["black", "white"],
    featured: true,
  },
  {
    id: 12,
    name: "Legging Shorts Academia",
    category: "Treino",
    sizes: ["P", "M"],
    price: 299.9,
    img: [{ colorImg: "slate", url: ["/feminina1.png"] }],
    colors: ["slate"],
    featured: true,
  },
  {
    id: 13,
    name: "Meia Nike Cano Longo",
    category: "Casual",
    sizes: ["P", "M"],
    price: 180.99,
    img: [{ colorImg: "white", url: ["/meia1.png"] }],
    colors: ["white"],
    featured: true,
  },
  {
    id: 14,
    name: "Camisa Compressão Nike",
    category: "Treino",
    sizes: ["M"],
    colors: ["black"],
    price: 590.99,

    img: [
      {
        colorImg: "black",
        url: [
          "/camisadois/camisa.png",
          "/camisadois/camisaum.png",
          "/camisadois/camisadois.png",
        ],
      },
    ],
    featured: true,
  },
  {
    id: 15,
    name: "Camisa SB-Summer Nike",
    category: "Casual",
    sizes: ["P", "M", "G"],
    colors: ["amber"],
    price: 189.9,
    img: [
      {
        colorImg: "amber",
        url: [
          "/camisatres/camisa.png",
          "/camisatres/camisaum.png",
          "/camisatres/camisadois.png",
        ],
      },
    ],
    featured: true,
  },
  {
    id: 16,
    name: "Camisa FC Barcelona",
    category: "Futebol",
    sizes: ["P", "M", "G", "XX"],
    price: 499.99,
    colors: ["red"],
    img: [
      {
        colorImg: "red",
        url: [
          "/camisaquatro/camisa.png",
          "/camisaquatro/camisaum.png",
          "/camisaquatro/camisadois.png",
          "/camisaquatro/camisatres.png",
          "/camisaquatro/camisaquatro.png",
          "/camisaquatro/camisacinco.png",
        ],
      },
    ],
    featured: true,
  },
];

export const ProductsFeatured: ProductTypeProps[] = [
  {
    id: 1,
    name: "Adidas runner",
    category: "Treino",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 299.9,
    img: [
      {
        colorImg: "black",
        url: [
          "/adidas/adidas.png",
          // "/adidas/adidasum.png",
          // "/adidas/adidasdois.png",
          // "/adidas/adidastres.png",
        ],
      },
    ],
    colors: ["black", "amber", "blue"],
    featured: true,
  },
  {
    id: 2,
    name: "Sapa tênis kesis",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40],
    price: 189.9,
    img: [{ colorImg: "slate", url: ["/sapatenis/sapatenis.png"] }],
    colors: ["slate"],
    featured: true,
  },
  {
    id: 3,
    name: "Nike MD Runner",
    category: "Treino",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 590.99,
    img: [
      {
        colorImg: "black",
        url: [
          "/nike/nikezero.png",
          // "/nike/nikeum.png",
          // "/nike/nikedois.png",
          // "/nike/niketres.png",
          // "/nike/nikequatro.png",
        ],
      },
    ],
    colors: ["black", "white"],
    featured: true,
  },
  {
    id: 4,
    name: "Sapa tênis casual",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 180.99,
    img: [{ colorImg: "brown", url: ["/nikedois/nike.png"] }],
    colors: ["brown", "gray"],
    featured: true,
  },
  {
    id: 5,
    name: "Sapa tênis casual",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 180.99,
    img: [{ colorImg: "brown", url: ["/niketres/nike.png"] }],
    colors: ["brown", "gray"],
    featured: true,
  },
  {
    id: 6,
    name: "Nike Shox",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 999.99,
    img: [{ colorImg: "red", url: ["/nikequatro/nike.png"] }],
    colors: ["red", "silver"],
    featured: true,
  },
  {
    id: 7,
    name: "Sapa tênis kesis",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 189.9,
    img: [{ colorImg: "slate", url: ["/nikefive/nike.png"] }],
    colors: ["slate"],
    featured: true,
  },
  {
    id: 8,
    name: "Sapa tênis casual",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 180.99,
    colors: ["black"],
    img: [
      {
        colorImg: "black",
        url: [
          "/sapatenisdois/sapatenis.png",
          // "/sapatenis2/sapatenis1.png",
          // "/sapatenis2/sapatenis2.png",
          // "/sapatenis2/sapatenis3.png",
          // "/sapatenis2/sapatenis4.png",
        ],
      },
    ],
    featured: true,
  },
];

export const ProductsFeatured2: ProductTypeProps[] = [
  {
    id: 9,
    name: "Boné Nike",
    category: "Casual",
    sizes: ["P"],
    price: 299.9,
    colors: ["black"],
    img: [
      {
        colorImg: "black",
        url: ["/bone/bonezero.png"],
      },
    ],
    featured: true,
  },
  {
    id: 10,
    name: "Sapa tênis kesis",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 189.9,
    colors: ["slate"],
    img: [
      {
        colorImg: "slate",
        url: ["/nikefive/nike.png"],
      },
    ],
    featured: true,
  },
  {
    id: 11,
    name: "Camisa Corinthians",
    category: "Treino",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 590.99,
    colors: ["black", "white"],
    img: [
      {
        colorImg: "black",
        url: ["/camisaum/camisa.png"],
      },
      // {
      //   colorImg: "white",
      //   url: ["/camisadetime.png"],
      // },
    ],
    featured: true,
  },
  {
    id: 12,
    name: "Adidas runner",
    category: "Treino",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 299.9,
    colors: ["black"],
    img: [
      {
        colorImg: "black",
        url: ["/feminina1.png"],
      },
    ],
    featured: true,
  },
  {
    id: 13,
    name: "Sapa tênis casual",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 180.99,
    colors: ["brown", "gray"],
    img: [
      {
        colorImg: "brown",
        url: ["/meia1.png"],
      },
      // {
      //   colorImg: "gray",
      //   url: ["/meia1.png"],
      // },
    ],
    featured: true,
  },
  {
    id: 14,
    name: "Nike MD Runner",
    category: "Treino",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 590.99,
    colors: ["black"],
    img: [
      {
        colorImg: "black",
        url: ["/camisadois/camisa.png"],
      },
    ],
    featured: true,
  },
  {
    id: 15,
    name: "Sapa tênis kesis",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 189.9,
    colors: ["slate"],
    img: [
      {
        colorImg: "slate",
        url: ["/camisatres/camisa.png"],
      },
    ],
    featured: true,
  },
  {
    id: 16,
    name: "Sapa tênis casual",
    category: "Casual",
    sizes: [34, 35, 36, 37, 38, 39, 40, 41.5, 42, 43],
    price: 180.99,
    colors: ["brown"],
    img: [
      {
        colorImg: "brown",
        url: ["/camisaquatro/camisa.png"],
      },
    ],
    featured: true,
  },
];

export type SingleProductTypeProps = {
  id: number;
  name: string;
  price: number;
  img: string;
  sizes: number[] | string[];
  category: string;
  featured: boolean;
};

export const RecomendedProducts = [
  {
    id: 1,
    img: "/adidas/adidas.png", // Corresponde ao primeiro produto
  },
  {
    id: 9,
    img: "/bone/bonezero.png", // Boné Nike
  },
  {
    id: 11,
    img: "/camisaum/camisa.png", // Camisa Corinthians
  },
  {
    id: 16,
    img: "/camisaquatro/camisa.png", // Camisa Barcelona
  },
];