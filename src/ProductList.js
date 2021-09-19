import Product from './Entities/product';

import EN00AA00 from "./images/EN00AA00.JPG";
import EN00AA02 from "./images/EN00AA02.JPG";
import EN00AA05 from "./images/EN00AA05.JPG";
import EN00AA07 from "./images/EN00AA07.JPG";
import EN00AA09 from "./images/EN00AA09.JPG";
import EN00AA12 from "./images/EN00AA12.JPG";
import EN00AA13 from "./images/EN00AA13.JPG";
import EN00AA16 from "./images/EN00AA16.JPG";
import EN00AA19 from "./images/EN00AA19.JPG";
import EN00AA21 from "./images/EN00AA21.JPG";
import EN00AA24 from "./images/EN00AA24.JPG";
import EN00AA25 from "./images/EN00AA25.JPG";
import EN00AA26 from "./images/EN00AA26.JPG";
import EN00AA27 from "./images/EN00AA27.JPG";
import EN00AA28 from "./images/EN00AA28.JPG";
import EN00AA29 from "./images/EN00AA29.JPG";
import EN00AA30 from "./images/EN00AA30.JPG";
import EN00AA31 from "./images/EN00AA31.JPG";

const Products = [
    new Product(1 , EN00AA19, "Trikini Estrella",                 "",        "1 piezas",      "No incluye medias",                                                 ["red", "blanco","negro", "Rosado"],                        54000,  "conjuntos"),
    new Product(2 , EN00AA00, "Trikini Mariposa",                 "",        "2 piezas",      "No incluye medias",                                                 ["red", "blanco","negro", "Rosado"],                         54000, "conjuntos"),
    new Product(3,  EN00AA05, "Conjunto encaje ",                 "",        "2 piezas"       ,"No incluye medias",                                                ["red", "blanco","negro", "Rosado"],                         51600, "conjuntos"),
    new Product(4,  EN00AA09, "Conjunto encaje liguero",          "" ,        "4 piezas",       "",                                                                ["red", "blanco","negro", "Rosado"]                         ,63600, "conjuntos"),
    new Product(5,  EN00AA27, "Conjunto Bralete encaje abierto y liguero","", "2 piezas",      "No incluye medias"  ,                                              ["red", "blanco","negro", "Rosado" ,"violeta","azul"],       54600, "conjuntos"),
    new Product(6,  EN00AA21,  "Trikini tiras",                   "",           "1 pieza",      "No incluye medias",                                               ["red", "blanco","negro", "Rosado" ]                 ,       54000, "conjuntos"),
    new Product(7,  EN00AA26,  "baby Doll Túll",                  "",           "2 piezas",     "No incluye medias",                                                [ "red", "blanco","negro"],                               54000, "conjuntos"),
    new Product(8,  EN00AA02,  "pijama Satín",                    "",           "2 piezas",      "",                                                               [ "red", "blanco","negro","Vinotinto","Rosa" ],              54000,   "pijamas"),
    new Product(9, EN00AA07, "pijama Satín Enteriza",             "",          "1 pieza",       "",                                                                ["red", "blanco","negro","Azul","Rosa" ],                    54000,   "pijamas"),
    new Product(10 ,EN00AA24, "Conjunto encaje argolla tiras",    "",           "2 pieza",      "No incluye medias"  ,                                             ["red", "blanco","negro"],                                   54000, "conjuntos"),
    new Product(11 ,EN00AA28, "Conejita sexy",                    "",           "5 piezas",     "incluye: medias liguero, orejas, corbatín, colita y body",        ["red", "blanco","negro"],                                  54000,   "disfraz"),
    new Product(12, EN00AA13, "Conjunto Cuerina",                 "",           "2 piezas",     "incluye: medias liguero, orejas, corbatín, colita y body",        ["red", "negro" ],                                           51600,  "conjuntos"),
    new Product(13, EN00AA16, "Trikini transformable",            "",            "1 pieza",     "no incluye medias",                                               ["red", "negro","blanco", "azul","rosa"],                    63600,  "conjuntos"),
    new Product(14,EN00AA12,  "Diablita Cuerina",                 "",            "4 piezas",    "Incluye: cuernos, Medias liguero, top, tanga ajustables",         ["rojo", "negro" ],                                          75600,   "disfraz"),
    new Product(15,EN00AA30,  "Policía",                          "",             "5 piezas",   "Incluye: medias liguero, kepis, esposas, top y panty",            ["negro"],                                                   84000,   "disfraz"),
    new Product(16,EN00AA31,  "Conejita cuerina",                 "",           "6 piezas",      "Incluye: medias liguero, orejas, corbatin top y tanga ajustable",["negro", "rojo"],                                           88600,   "disfraz"),
    new Product(17,EN00AA25,  "Conjunto Brallete y Panty",        "",            "2 piezas",     "No incluye medias",                                              ["negro", "blanco","azul", "rojo","violeta"],            84000,    "conjuntos"),
    new Product(18,EN00AA29, "Conjunto Mallatex",                 "",             "2 piezas",    "No incluye medias",                                              [ "negro", "blanco","azul", "rojo","rosa" ],               60000,    "conjuntos"),
    new Product(19,EN00AA30, "Diablita encaje",                   "",             "4 piezas",    "Incluye medias liguero, cachitos, top y panty",                  [ "negro", "rojo" ],                                       84000,     "disfraz"),

]

export default Products;
