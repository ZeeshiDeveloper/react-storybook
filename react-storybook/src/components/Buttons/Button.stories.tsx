import { Meta, Story } from "@storybook/react";
import { ButtonComponent, IButtonComponent } from "./ButtonComponent";

export default {
    title:"Buttons",
    component:ButtonComponent,
    argTypes: {
        label: String,
      },
} as Meta;

const Template: Story<IButtonComponent> = (args) => <ButtonComponent {...args} />;

export const withCustomLabel = Template.bind({});
withCustomLabel.args = {
  label: 'Contained Button',
  onClick: () => { alert('Clicked') }
};