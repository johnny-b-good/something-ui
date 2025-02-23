import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs } from "../components";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    parts: [{ content: "Store", url: "/store" }, { content: "Orders" }],
  },
};
