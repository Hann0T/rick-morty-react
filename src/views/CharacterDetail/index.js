import { useParams, Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

const CharacterDetail = () => {
  let params = useParams();
  const { data: character, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${params.id}`);

  return (
    <>
      {!isLoading && (
        <div className='px-4 pt-5 w-screen h-screen bg-gray-800'>
          <div className='max-w-2xl mx-auto bg-gray-800 rounded-md p-5 text-white flex gap-4 justify-around items-center shadow-lg shadow-sky-500'>
            <div className='mr-auto '>
              <img className='rounded-md' src={character.image} alt={character.name} />
            </div>
            <div>
              <h2 className='text-2xl'>{character.name}</h2>
              <p>{character.species}</p>
              <p>{character.gender}</p>
            </div>
          </div>
          <Link
            to='/'
            className='top-5 relative left-2/4 translate-x-2/4 rounded-md px-4  py-2 text-lg text-white bg-sky-500'
          >
            Back
          </Link>
        </div>
      )}
    </>
  );
};

export default CharacterDetail;
