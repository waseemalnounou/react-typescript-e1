import React, { useState } from 'react';
import './App.scss';
import logo from './logo.svg';
import { Container } from '@mui/system';
import StickyFooter from './components/FooterComp';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Done from '@mui/icons-material/Done';
import Undo from '@mui/icons-material/Undo';

function add(a: number, b: number): number {
  return a + b;
}

interface ITodo {
  toDo: string,
  compleated: boolean
}
type element = JSX.Element;
type formElement = React.FormEvent<HTMLFormElement>;

function App(): element {
  const [value, setValue] = useState<string>('');
  const [toDo, setToDo] = useState<ITodo[]>([]);

  const handleSubmit = (e: formElement): void => {
    e.preventDefault();
    addToDo(value);
    setValue('');
  }
  const addToDo = (text: string): void => {
    let newToDo: ITodo[] = [...toDo, { toDo: text, compleated: false }];
    setToDo(newToDo);
  }
  const isToDoCompleated = (index: number): void => {
    //let newToDo:ITodo[] =toDo;
    let newToDo: ITodo[] = [...toDo];
    newToDo[index].compleated = !newToDo[index].compleated;
    setToDo(newToDo);
  }
  const deleteToDo = (index: number): void => {
    setToDo(toDo.filter((e, ind) => (index !== ind)));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          To <code>Do</code> List
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
          <button type="submit" >Add To the List {add(2, 1)}</button>
        </form>
      </header>
      <Container>
        <ul>
          {toDo.map((e: ITodo, index: number) => (
            <li key={index}>
              <h2 style={{ textDecoration: e.compleated ? 'line-through' : "" }}>{e.toDo}</h2>
              <IconButton type='button' onClick={() => isToDoCompleated(index)} aria-label={e.compleated ? "Compleated" : "Incompleate"} color="primary">
                {e.compleated?<Undo/>:<Done />}
              </IconButton>
              <IconButton type='button' onClick={() => deleteToDo(index)} aria-label="delete" color="primary">
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
        </ul>
      </Container>
      <StickyFooter />
    </div>
  );
}

export default App;
