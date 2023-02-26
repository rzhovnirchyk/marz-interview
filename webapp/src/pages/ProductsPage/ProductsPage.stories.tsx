import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { PRODUCTS_URL } from "../ApiHelper";
import ProductsPage from "./ProductsPage";

export default {
  title: "Products Page",
  component: ProductsPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "black",
    },
  },
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
  mockData: [
    {
      url: PRODUCTS_URL,
      method: "GET",
      status: 200,
      response: {
        data: [
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
          {
            ProductID: 3,
            ProductName: "Pants",
            ProductPhotoURL:
              "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ProductStatus: "Active",
          },
        ],
        message: "",
      },
    },
  ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
  mockData: [
    {
      url: PRODUCTS_URL,
      method: "GET",
      status: 200,
      response: {
        data: [],
        message: "",
      },
    },
  ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
  mockData: [
    {
      url: PRODUCTS_URL,
      method: "GET",
      status: 500,
      response: {
        data: [],
        message: "There was an error retrieving the products.",
      },
    },
  ],
};
