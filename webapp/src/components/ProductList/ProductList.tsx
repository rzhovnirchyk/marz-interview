import { Product } from "../interfaces";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div
      className="flex flex-col justify-center w-full pt-4"
      data-testid="ProductList-container"
    >
      <h2
        className="text-center text-3xl font-bold text-white mb-4"
        data-testid="ProductList-title"
      >
        {products.length ? "Active Products" : "No active products found!"}
      </h2>
      {products.length ? (
        <div
          className="flex flex-wrap justify-center w-full gap-4 relative"
          data-testid="ProductList-products"
        >
          {products.map((product) => (
            <ProductItem
              key={`ProductItem-${product.ProductID}`}
              product={product}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
