import CharCard from '../components/Card';
import Charcard from '../components/Card'
import { useOutletContext } from 'react-router-dom';
const FavoritesPage = () => {
    const {setFavorites, favorites} = useOutletContext();

    return (
        <>
        
        <h1>FavoritesPage</h1>
        <div className="card-grid">
        {favorites.map((character) => (
            <CharCard
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            //origin={character.origin.name}
            setFavorites={setFavorites}
            favorites={favorites}
            />
        ))}
        </div>
        </>
    )
}
export default FavoritesPage;