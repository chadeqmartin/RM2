import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CharCard({id, name, image, species, status, gender, origin, location, setFavorites, favorites}) {
  const navigate = useNavigate()

   const favoritesHandler = () => {
            const isFavorite = favorites.some((favorite) => favorite.id === id);

            if (isFavorite) {
                const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
                setFavorites(updatedFavorites);
            } else {
                if (favorites.length < 4) {
                    setFavorites([...favorites, { id, name, image} ]);
                }else {
                    alert('Wubbadubalubdubs! Too many favorites!');
                }
                }
            }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Species: {species}
         <br/>
         Status: {status}
         <br/>
         Gender: {gender}
         <br/>
         Origin: {origin}
         <br/>
         Location: {location}

        </Card.Text>
        <Button 
        variant="primary"
        onClick={() => navigate(`/characters/${id}`)}>Get more details</Button>
      </Card.Body>
      <Button
      variant="warning"
      onClick={()=>favoritesHandler()}
    >
        {favorites.some((favorite) => favorite.id === id)
        ? 'Remove from Favorites'
        : 'Favorite'}
        
        </Button>
    </Card>
  );
}

export default CharCard;