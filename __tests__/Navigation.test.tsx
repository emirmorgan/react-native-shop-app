/**
 * @format
 */

import 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {render, screen} from '@testing-library/react-native';

//Components
import Trending from '../src/components/Trending';
import Categories from '../src/components/Categories';

const navigationRender = (component: JSX.Element) => {
  render(<NavigationContainer>{component}</NavigationContainer>);
};

describe('Navigation component render', () => {
  it('Trending Screen Navigate', () => {
    navigationRender(<Trending />);

    const navText = screen.getByTestId('trending-nav');

    expect(navText).toBeTruthy();
  });

  it('Categories Screen Navigate', () => {
    navigationRender(<Categories />);

    const navText = screen.getByTestId('categories-nav');

    expect(navText).toBeTruthy();
  });
});
