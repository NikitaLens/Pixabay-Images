import React, { useState, useEffect } from 'react';
import './App.scss';
import { Header } from './component/Header/header';
import { HitsList } from './component/HitsList/hits-list';
import { HitsType } from './types';
import { getUrl } from './utils';
import { PAGE_SIZE } from './constants/config';

function App() {
  const [hits, setHits] = useState<HitsType[]>([]);
  const [totalHits, setTotalHits] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (search) {
      fetch(getUrl(search, page))
        .then(response => response.json())
        .then(data => {
          setHits([...hits, ...data.hits]);
          setTotalHits(data.total);
        })
        .catch((error) => {
          console.log('Error: ', error);
        })
        .finally(() => setLoading(false));
    }
  }, [search, page]);

  const handleSearch = (searchValue?: string ) => {
    if (searchValue && search !== searchValue) {
      setSearch(searchValue);
      setPage(1);
      setHits([]);
      setLoading(true);
    }
  }

  const handleLoad = () => setPage(page + 1);

  return (
    <div className="app">
      <div className="app-container">
        <Header onClick={handleSearch} />
        <HitsList
          hits={hits}
          onLoad={handleLoad}
          needLoading={totalHits > page * PAGE_SIZE }
          isNotFound={!totalHits && !!search && !loading}
        />
      </div>
    </div>
  );
}

export default App;
