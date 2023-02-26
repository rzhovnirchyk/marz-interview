import { rest } from "msw";
import { setupServer } from "msw/node";
import { PRODUCTS_URL } from "../ApiHelper";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductsPage from "./ProductsPage";

describe("ProductsPage", () => {
  it("shouldDisplayLoadingSpinner", () => {
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );
    expect(screen.getByTestId(`loading-spinner-container`)).toBeInTheDocument();
  });
  it("shouldDisplayProductsContainer", async () => {
    // set up mock for axios.get
    const response = [
      {
        ProductID: 1,
        ProductName: "Hat",
        ProductPhotoURL:
          "https://images.pexels.com/photos/7679679/pexels-photo-7679679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ProductStatus: "Active",
      },
    ];
    const server = setupServer(
      rest.get(PRODUCTS_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(response));
      })
    );
    server.listen();
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId(`ProductList-container`)).toBeInTheDocument();
    });
    server.close();
  });
  it("shouldDisplayErrorMessage", async () => {
    const server = setupServer(
      rest.get(PRODUCTS_URL, (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.text("There was an error retrieving the products.")
        );
      })
    );
    server.listen();
    render(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId(`error-container`)).toBeInTheDocument();
    });
    server.close();
  });
});
