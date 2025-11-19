import User from "./User.mjs";
import Product from "./Product.mjs";
import Cart from "./Cart.mjs";
import CartItem from "./CartItem.mjs";

User.hasMany(Product, { foreignKey: "UserId" });
Product.belongsTo(User, { foreignKey: "UserId" });

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

export { User, Product, Cart, CartItem };
