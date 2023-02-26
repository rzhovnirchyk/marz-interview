import { render, screen } from "@testing-library/react";
import { Product } from "../interfaces";
import ProductList from "./ProductList";

describe("ProductList", () => {
  beforeEach(() => {});
  afterEach(() => {});
  it("rendersProductList", async () => {
    const products: Product[] = [
      {
        ProductID: 1,
        ProductName: "Hat",
        ProductPhotoURL:
          "https://images.pexels.com/photos/7679679/pexels-photo-7679679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ProductStatus: "Active",
      },
      {
        ProductID: 2,
        ProductName: "Shoes",
        ProductPhotoURL:
          "https://images.pexels.com/photos/6828904/pexels-photo-6828904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ProductStatus: "Active",
      },
    ];
    render(<ProductList products={products} />);
    expect(screen.getByTestId(`ProductList-container`)).toBeInTheDocument();
    expect(screen.getByTestId(`ProductList-title`).textContent).toBe(
      "Active Products"
    );
    products.forEach((product) => {
      expect(
        screen.getByTestId(`ProductItem-container-${product.ProductID}`)
      ).toBeInTheDocument();
    });
  });
  it("rendersEmptyProductList", async () => {
    const products: Product[] = [];
    render(<ProductList products={products} />);
    expect(screen.getByTestId(`ProductList-container`)).toBeInTheDocument();
    expect(
      screen.queryByTestId(`ProductList-products`)
    ).not.toBeInTheDocument();
  });
});
