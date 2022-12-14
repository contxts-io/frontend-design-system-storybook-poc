// import React from 'react';
// import { GlobalStyle } from '../src/shared/global';

/*
 * decorators에 GlobalStyle를 아래와 같이 추가해주면, 어떤 스토리가 선택되었든 간에 GlobalStyle 가 반드시 렌더되도록 합니다.
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
// export const decorators = [
//   (Story) => (
//     <>
//       <GlobalStyle />
//       <Story />
//     </>
//   ),
// ];

/*
 * Read more about global parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
