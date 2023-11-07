import axios from 'axios';
import {useEffect, useState} from "react";
import CharCard from '../components/Card';
import { useOutletContext } from 'react-router-dom';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {setFavorites, favorites} = useOutletContext()

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                const totalPages = response.data.info.pages;
                const allCharacters = [];
                for (let page=1; page <= totalPages; page++) {
                    const pageResponse = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                    allCharacters.push(...pageResponse.data.results);
                }
                setCharacters(allCharacters);
                setIsLoading(false);
            } catch (error) {
                console.error("I'm mr meeksees and you have no data", error)
                setIsLoading(false);
            }

        };
        getCharacters();
    }, [])

    // const totalPages = 42;

    // const getCharacters = async (page) => {
    //     try {
    //     const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    //     const newCharacters = response.data.results;
    //     setCharacters((previousCharacters) => [...previousCharacters, ...newCharacters]);
    // }   catch (error) {
    //     console.log(error);
    // }
    // };
    // useEffect(() => {
    //     if (currentPage <= totalPages){
    //         getCharacters(currentPage);
    //         setCurrentPage(currentPage + 1)
    //     }
    // }, [currentPage]);

    return (
        <div>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
        <>
        <h1>CharactersPage</h1>
        
       <div className="card-grid">
        {characters.map((character, idx) => (
            <CharCard 
                key={idx}
                id={character.id}
                name={character.name}
                image={character.image}
                species={character.species}
                status={character.status}
                location={character.location.name}
                gender={character.gender}
                origin={character.origin.name}
                setFavorites={setFavorites}
                favorites={favorites}
                />
        ))}
        </div>
        </>
        )}
        </div>
    )
}
export default CharactersPage;