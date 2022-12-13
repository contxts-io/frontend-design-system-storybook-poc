import React from 'react';

import { MainButton } from './Button';
import { ButtonWrapper } from './button.styled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MainButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    size: { control: 'select' },
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    width: { control: 'text' },
  },
  parameters: {
    componentSubtitle:
      'NFTBank에서 사용되는 버튼입니다. 버튼의 크기, 색상, 너비 등을 조절할 수 있습니다.',
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Standard = (args) => <MainButton {...args} />
Standard.args = {
  variant: 'primary',
  width: '100%',
  label: 'Select',
  disabled: false,
  loading: false,
  size: 'medium',
};

// Other Button stories

export const Variants = (args) => (
  <ButtonWrapper>
    <MainButton {...args} variant="primary" />
    <MainButton {...args} variant="secondary" />
    <MainButton {...args} variant="tertiary" />
  </ButtonWrapper>
);
Variants.args = {
  width: '200px',
  label: 'Select',
  disabled: false,
  loading: false,
  size: 'medium',
};
Variants.parameters = {
  docs: {
    storyDescription: '3가지 타입의 variant를 지원합니다.',
  },
};
