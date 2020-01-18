import { configure, addDecorator } from '@storybook/react';
import React from 'react';

const AppProvider = ({ children }) => (
  <>{children}</>
);

addDecorator(storyFn => <AppProvider>{storyFn()}</AppProvider>);

// automatically import all files ending in *.stories.js
configure([
  require.context('../packages/react-styled-core/src/', true, /\.stories\.(js|mdx)$/),
], module);
