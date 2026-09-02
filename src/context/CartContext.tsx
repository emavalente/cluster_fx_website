import { createContext, useState, useEffect, type ReactNode } from "react";
import type { CartItem, Pedal } from "../types";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Pedal) => void;
  removeFromCart: (productId: Pedal["id"]) => void;
  increaseQuantity: (productId: Pedal["id"]) => void;
  decreaseQuantity: (productId: Pedal["id"]) => void;
  cleanCart: () => void;
  totalItems: number;
  totalPrice: number;
  isEmpty: boolean;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 5;

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("user-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("user-cart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const isEmpty = cart.length === 0;

  function addToCart(product: Pedal) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        if (existingItem.quantity >= MAX_QUANTITY) {
          return currentCart;
        }
        return currentCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          product,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(productId: Pedal["id"]) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.product.id !== productId),
    );
  }

  function increaseQuantity(productId: Pedal["id"]) {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.product.id === productId && item.quantity < MAX_QUANTITY) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      }),
    );
  }

  function decreaseQuantity(productId: Pedal["id"]) {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.product.id === productId && item.quantity > MIN_QUANTITY) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      }),
    );
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cleanCart,
        totalItems,
        totalPrice,
        isEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
