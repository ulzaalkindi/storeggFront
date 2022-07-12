/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react'
import StepItem, {
  StepItemProps,
} from '../../../../components/molecules/StepItem'

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta

const Template = (args: StepItemProps) => <StepItem {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: 'step-1',
  title: 'Mengisi Catu daya',
  desc1: 'Dengan Baik',
  desc2: 'Dan juga benar',
}
