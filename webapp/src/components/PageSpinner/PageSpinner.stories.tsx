import React from "react";
import { ComponentMeta } from "@storybook/react";
import PageSpinner from "./PageSpinner";

export default {
  title: "Page Spinner",
  component: PageSpinner,
  parameters: {
    backgrounds: {
      default: "black",
    },
  },
} as ComponentMeta<typeof PageSpinner>;

export const pageSpinner = () => <PageSpinner />;
