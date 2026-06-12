import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  specs: string;
}

type AddItemInput = Omit<CartItem, 'quantity'> & { quantity?: number };

interface CartContextType {
  items: CartItem[];
  addItem: (item: AddItemInput) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('biohacks_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item: AddItemInput) => {
    const qty = item.quantity ?? 1;
    setItems(prev => {
      const existing = prev.find(i => i.productId === item.productId);
      let newItems: CartItem[];
      if (existing) {
        newItems = prev.map(i =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + qty }
            : i
        );
      } else {
        newItems = [...prev, {
          productId: item.productId,
          name: item.name,
          price: item.price,
          specs: item.specs,
          quantity: qty,
        }];
      }
      localStorage.setItem('biohacks_cart', JSON.stringify(newItems));
      return newItems;
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems(prev => {
      const newItems = prev.filter(i => i.productId !== productId);
      localStorage.setItem('biohacks_cart', JSON.stringify(newItems));
      return newItems;
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    setItems(prev => {
      const newItems = prev.map(i =>
        i.productId === productId ? { ...i, quantity } : i
      );
      localStorage.setItem('biohacks_cart', JSON.stringify(newItems));
      return newItems;
    });
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem('biohacks_cart');
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
