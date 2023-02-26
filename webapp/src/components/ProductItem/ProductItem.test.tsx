import { render, screen } from "@testing-library/react";
import { Product } from "../interfaces";
import ProductItem from "../ProductItem/ProductItem";

describe("ProductItem", () => {
  let product: Product;
  beforeEach(() => {
    product = {
      ProductID: 1,
      ProductName: "Hat",
      ProductPhotoURL:
        "https://images.pexels.com/photos/7679679/pexels-photo-7679679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ProductStatus: "Active",
    };
  });
  afterEach(() => {});
  it("rendersProductItem", async () => {
    render(<ProductItem product={product} />);
    expect(
      screen.getByTestId(`ProductItem-container-${product.ProductID}`)
    ).toBeInTheDocument();
    expect(
      screen
        .getByTestId(`ProductItem-image-${product.ProductID}`)
        .getAttribute("src")
    ).toBe(product.ProductPhotoURL);
    expect(
      screen.getByTestId(`ProductItem-name-${product.ProductID}`).textContent
    ).toBe(product.ProductName);
  });
});
