import type { Meta, StoryObj } from "@storybook/react";

import { PasswordInput } from "../components";

const meta = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "swordfish",
  },
};
