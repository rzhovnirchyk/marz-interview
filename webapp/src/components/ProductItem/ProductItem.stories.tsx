import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Product } from "../interfaces";
import ProductItem from "./ProductItem";

export default {
  title: "Product Item",
  component: ProductItem,
  parameters: {
    backgrounds: {
      default: "black",
    },
  },
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
);

const product: Product = {
  ProductID: 1,
  ProductName: "Hat",
  ProductPhotoURL:
    "https://images.pexels.com/photos/7679679/pexels-photo-7679679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ProductStatus: "Active",
};

export const productItem = Template.bind({});
productItem.args = { product };
