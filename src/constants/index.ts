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
        subtitle: "Destaque",
        items: [
          { name: "Nike", link: "/destaques/nike" },
          { name: "Botafogo", link: "/destaques/botafogo" },
          { name: "Adidas", link: "/destaques/adidas" },
        ],
      },
      {
        id: 2,
        subtitle: "Feminino",
        items: [
          { name: "Calçados", link: "/lancamentos/feminino/calcados" },
          { name: "Roupas", link: "/lancamentos/feminino/roupas" },
          { name: "Acessórios", link: "/lancamentos/feminino/acessorios" },
        ],
      },
      {
        id: 3,
        subtitle: "Masculino",
        items: [
          { name: "Calçados", link: "/lancamentos/masculino/calcados" },
          { name: "Roupas", link: "/lancamentos/masculino/roupas" },
          { name: "Acessórios", link: "/lancamentos/masculino/acessorios" },
        ],
      },
      {
        id: 4,
        subtitle: "Infantil",
        items: [
          { name: "Calçados", link: "/lancamentos/infantil/calcados" },
          { name: "Roupas", link: "/lancamentos/infantil/roupas" },
          { name: "Acessórios", link: "/lancamentos/infantil/acessorios" },
        ],
      },
    ],
  },
  {
    title: "Ofertas",
    subcategories: [
      {
        id: 5,
        subtitle: "Destaque",
        items: [
          { name: "Vestuário", link: "/ofertas/destaque/vestuario" },
          { name: "Natal", link: "/ofertas/destaque/natal" },
          { name: "Ano novo", link: "/ofertas/destaque/anonovo" },
        ],
      },
      {
        id: 6,
        subtitle: "Feminino",
        items: [
          { name: "Calçados", link: "/ofertas/feminino/calcados" },
          { name: "Roupas", link: "/ofertas/feminino/roupas" },
          { name: "Acessórios", link: "/ofertas/feminino/acessorios" },
        ],
      },
      {
        id: 7,
        subtitle: "Masculino",
        items: [
          { name: "Calçados", link: "/ofertas/masculino/calcados" },
          { name: "Roupas", link: "/ofertas/masculino/roupas" },
          { name: "Acessórios", link: "/ofertas/masculino/acessorios" },
        ],
      },
      {
        id: 8,
        subtitle: "Infantil",
        items: [
          { name: "Calçados", link: "/ofertas/infantil/calcados" },
          { name: "Roupas", link: "/ofertas/infantil/roupas" },
          { name: "Acessórios", link: "/ofertas/infantil/acessorios" },
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
          { name: "Boticário", link: "/feminino/maquiagem/boticario" },
          { name: "Boca Rosa", link: "/feminino/maquiagem/bocarosa" },
          { name: "Gkay", link: "/feminino/maquiagem/gkay" },
        ],
      },
      {
        id: 10,
        subtitle: "Roupas",
        items: [
          { name: "Tops", link: "/feminino/roupas/tops" },
          { name: "Shorts", link: "/feminino/roupas/shorts" },
          { name: "Leggings", link: "/feminino/roupas/leggings" },
        ],
      },
      {
        id: 11,
        subtitle: "Calçado",
        items: [
          { name: "Corrida", link: "/feminino/calcado/corrida" },
          { name: "Academia", link: "/feminino/calcado/academia" },
          { name: "Chuteira", link: "/feminino/calcado/chuteira" },
        ],
      },
      {
        id: 12,
        subtitle: "Acessórios",
        items: [
          { name: "Relógios", link: "/feminino/acessorios/relogios" },
          { name: "Bonés", link: "/feminino/acessorios/bones" },
          { name: "Bolsas", link: "/feminino/acessorios/bolsas" },
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
          { name: "Futebol", link: "/masculino/camisa/futebol" },
          { name: "Basquete", link: "/masculino/camisa/basquete" },
          { name: "Vôlei", link: "/masculino/camisa/volei" },
        ],
      },
      {
        id: 14,
        subtitle: "Feminino",
        items: [
          { name: "Calçados", link: "/masculino/feminino/calcados" },
          { name: "Roupas", link: "/masculino/feminino/roupas" },
          { name: "Acessórios", link: "/masculino/feminino/acessorios" },
        ],
      },
      {
        id: 15,
        subtitle: "Masculino",
        items: [
          { name: "Calçados", link: "/masculino/masculino/calcados" },
          { name: "Roupas", link: "/masculino/masculino/roupas" },
          { name: "Acessórios", link: "/masculino/masculino/acessorios" },
        ],
      },
      {
        id: 16,
        subtitle: "Infantil",
        items: [
          { name: "Calçados", link: "/masculino/infantil/calcados" },
          { name: "Roupas", link: "/masculino/infantil/roupas" },
          { name: "Acessórios", link: "/masculino/infantil/acessorios" },
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
    price: 299.9,
    img: "/adidas.png",
  },
  {
    id: 2,
    name: "Sapa tênis kesis",
    category: "Casual",
    price: 189.9,
    img: "/sapatenis.png",
  },
  {
    id: 3,
    name: "Nike MD Runner",
    category: "Treino",
    price: 590.99,
    img: "/nike1.png",
  },
  {
    id: 4,
    name: "Sapa tênis casual",
    category: "Casual",
    price: 180.99,
    img: "/sapatenis2.png",
  },
  {
    id: 5,
    name: "Nike Air Max",
    category: "Casual",
    price: 590.99,
    img: "/airmax.png",
  },
  {
    id: 6,
    name: "Nike Viper V2",
    category: "Casual",
    price: 690.99,
    img: "/nike2.png",
  },
];
