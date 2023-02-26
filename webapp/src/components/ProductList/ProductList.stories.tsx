import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Product } from "../interfaces";
import ProductList from "./ProductList";

export default {
  title: "Product List",
  component: ProductList,
  parameters: {
    backgrounds: {
      default: "black",
    },
  },
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => (
  <ProductList {...args} />
);

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

export const productList = Template.bind({});
productList.args = { products };

export const emptyProductList = Template.bind({});
emptyProductList.args = { products: [] };
