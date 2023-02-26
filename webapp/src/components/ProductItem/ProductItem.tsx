import { Product } from "../interfaces";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div
      key={product.ProductID}
      className="w-full sm:w-80 bg-neutral-500 overflow-hidden"
      data-testid={`ProductItem-container-${product.ProductID}`}
    >
      {product.ProductPhotoURL ? (
        <div className="">
          <img
            src={product.ProductPhotoURL}
            alt={product.ProductName}
            className="aspect-video object-cover w-full h-full"
            data-testid={`ProductItem-image-${product.ProductID}`}
          />
        </div>
      ) : null}
      <div className="p-4">
        <h6
          className="font-bold text-white"
          data-testid={`ProductItem-name-${product.ProductID}`}
        >
          {product.ProductName}
        </h6>
      </div>
    </div>
  );
}
