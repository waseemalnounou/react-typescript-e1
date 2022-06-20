import React from 'react';
import { render, screen } from '@testing-library/react';
import StickyFooter from './FooterComp';

test('render StickyFooter component', () => {
    //A
    render(<StickyFooter/>)
    //A
    //A
    const footer = screen.getByText(/My sticky footer can be found here./i);
    expect(footer).toBeInTheDocument();
  });