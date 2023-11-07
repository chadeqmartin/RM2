import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import axios from 'axios';
import CharCard from '../components/Card'

const SingleCharacter = () => {
    const [character, setCharacter] = useState({});
    const { id } = useParams();
    const {setFavorites, favorites } = useOutletContext();

    const getCharacter = async () => {
        let response = await axios.get(
            `https://rickandmortyapi.com/api/character/${id}`

        );
        console.log(response.data)
        setCharacter(response.data);
    };

    useEffect(() => {
        getCharacter();
    }, [])

    return (
        <>

            <h1>{character.name}</h1>
                <CharCard
                id= {character.id}
                name={character.name}
                image={character.image}
                species={character.species}
                status={character.status}
                gender={character.gender}
                episode={character.episode}
                dimension={character.dimension}
                // origin={character.origin.name}
                // location = {character}
                setFavorites={setFavorites}
                favorites={favorites}
                />
        </>
    )
}

export default SingleCharacter
