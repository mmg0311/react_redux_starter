import React from 'react';
import './App.css';
import List from './js/components/List';
import Form from './js/components/Form';
import { TextButton, ButtonGroup } from '@dailykit/ui'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonGroup align='left'>
         <TextButton type="solid">Solid Button</TextButton>
      </ButtonGroup>
        <div>
          <h2>Articles</h2>
          <List />
        </div>
        <div>
          <h2>Add a new article</h2>
          <Form />
        </div>

      </header>
    </div>
  );
}

export default App;
