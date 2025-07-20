import { useState } from 'react';
import Form from './components/Form';
import UserTable from './components/Table';
import SearchBar from './components/Search';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <div>  
      <Form />
      <SearchBar search={search} setSearch={setSearch} />
      <UserTable search={search} />
    </div>
  );
}
