import React from 'react';
import { render, screen } from '@testing-library/react';
import App,{Add} from './App';
import userEvent from '@testing-library/user-event';



describe('App Element test',()=>{

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('render learn react text', () => {
    render(<App />);
    const linkElement = screen.getByText(/To do list/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('render new to do when the button is clicked', () => {
    //Arrange
    render(<App />);
    //Act
    userEvent.type(screen.getByRole('textbox'),"sport 1");
    userEvent.click(screen.getByText(/Add To the List 3/i));
    //Assert
    const toDoListItem = screen.getByText('sport 1');
    expect(toDoListItem).toBeInTheDocument();
  });

});


test('test add function', () => {
  let x:number =Add(2,3);
  expect(x).toBe(5);
});

