import { createContext, ReactNode, useContext, useState } from "react";

interface CartProps {
  children: ReactNode;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartProviderData {
  // cart é um array de produtos
  cart: Product[];
  // addProduct recebe um produto e não tem retorno
  addProduct: (product: Product) => void;
  // deleteProducts recebe um produto e não tem retorno
  deleteProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    // aqui estou usando o parametro do use state, que é o antigo estado do state.
    console.log("Produto adicionado ao carrinho", product);
    setCart((oldState) => [...oldState, product]);
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    const newCart = cart.filter(
      (product) => product.id !== productToBeDeleted.id
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ addProduct, cart, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
