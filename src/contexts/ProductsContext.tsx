import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { Product } from "../types/Product";

interface ProductContextData {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  totalQuantity: number;
  changeProductName: (id: Product["id"], name: Product["name"]) => void;
  changeProductQuantity: (
    id: Product["id"],
    quantity: Product["quantity"]
  ) => void;
}

const ProductContext = createContext<ProductContextData>({
  products: [],
  setProducts: () => undefined,
  totalQuantity: 0,
  changeProductName: (id: Product["id"], name: Product["name"]) => undefined,
  changeProductQuantity: (id: Product["id"], quantity: Product["quantity"]) =>
    undefined,
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState([] as Product[]);

  const changeProductName = (id: Product["id"], name: Product["name"]) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, name };
        } else {
          return product;
        }
      })
    );
  };

  const changeProductQuantity = (
    id: Product["id"],
    quantity: Product["quantity"]
  ) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity };
        } else {
          return product;
        }
      })
    );
  };

  const totalQuantity = useMemo(
    () => products.reduce((total, currentProduct) => total + currentProduct.quantity, 0),
    [products]
  );

  const context = {
    products,
    setProducts,
    totalQuantity,
    changeProductName,
    changeProductQuantity,
  };
  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};
