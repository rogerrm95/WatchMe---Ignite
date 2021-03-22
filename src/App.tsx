import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { Content } from './components/Content';
import { MovieCard } from './components/MovieCard';
import { SideBar } from './components/SideBar';

import { api } from './services/api';

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