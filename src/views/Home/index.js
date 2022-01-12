import React from 'react';

import useFetch from '../../hooks/useFetch';
import CharacterCard from '../../components/CharacterCard';

const Home = () => {
  const { data, isLoading } = useFetch('https://rickandmortyapi.com/api/character/?page=1');
  return (
    <div className='w-full bg-gray-800'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mx-auto lg:w-3/4'>
        {!isLoading && data.results.map((character) => <CharacterCard key={character.id} {...character} />)}
      </div>
    </div>
  );
};

export default Home;
