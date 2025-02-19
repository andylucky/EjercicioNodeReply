import { User } from "./User.js";
import { Product } from "./Product.js";

const Usuario = new User("Juan", 25);
console.log(Usuario.name);

const unProducto = new Product("Cola de cacao", 10);
console.log(unProducto.name);
