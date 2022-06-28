import { useState } from 'react';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1); // APP

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar onSelectedGenre={setSelectedGenreId} IdGenre={selectedGenreId} />

      <Content IdGenre={selectedGenreId} />

    </div>
  )
}