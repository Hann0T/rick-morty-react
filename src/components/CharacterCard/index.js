import { Link } from 'react-router-dom';

const CharacterCard = ({ id, name, image }) => {
  return (
    <div className='relative'>
      <img src={image} alt={name} className='rounded-md w-full' />
      <div className='flex item-center justify-around bg-black w-full pl-4 py-4 opacity-80 text-white font-bold rounded-b-md absolute bottom-0'>
        <p>{name}</p>
        <p className='underline'>
          <Link to={`/character/${id}`}>detalles</Link>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
