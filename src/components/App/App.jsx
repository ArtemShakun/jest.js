import { useState } from 'react';
import { List } from '../List/List';
import './App.css';
import { Search } from '../Search/Search';

const data = ['HTML', 'CSS', 'JS', 'React', 'TypeScript', 'NodeJs', 'Angular'];

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={e => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={data} />
      </div>
    </div>
  );
}

export default App;
