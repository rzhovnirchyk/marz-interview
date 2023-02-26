import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PageError from "./PageError";

export default {
  title: "Page Error",
  component: PageError,
  parameters: {
    backgrounds: {
      default: "black",
    },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
  <PageError {...args} />
);

export const pageError = Template.bind({});
pageError.args = { message: "Error message" };
