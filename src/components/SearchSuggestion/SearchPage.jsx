import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { filterResults } from './utils/filterResults'; // Assuming you have utility functions for filtering results
import Navigation2 from '../Navigation/Navigation2';
import Time from '../live_time/Time';
import Social_links from '../social_links/Social_links';
import Styles from './SearchPage.module.css';

const SearchPage = () => {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get('query');
        console.log("Search query from URL:", searchQuery); // Log the search query
        if (searchQuery) {
            searchRecommendations(searchQuery);
        } else {
            setError('No search query provided.');
        }
    }, [location]);

    const searchRecommendations = (query) => {
        setLoading(true);
        setError('');

        fetch('https://haseeb-505.github.io/travel_recommendation_api/travel_recommendation_api.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                const filteredResults = filterResults(data, query);
                setResults(filteredResults);
                console.log("Filtered results are: ", filteredResults);
            })
            .catch((error) => {
                console.error('Error fetching the recommendation data:', error);
                setError('Error fetching the recommendation data. Please try again later.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <Navigation2 />
            <Time />
            <Social_links />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div id="results" className={`${Styles.card_flex}`}>
                {results.map((result, index) => (
                    <div key={index} className={`${Styles.card}`}>
                        <img src={result.imageUrl} alt={result.name} width="300" height="300" />
                        <h3>{result.name}</h3>
                        <p>{result.description}</p>
                        <button className={`{travel_visit}`}>visit</button>
                    </div>
                ))}
            </div>
            <div className={`btn-outline`}>
                <button className={`${Styles.book_button} btn-outline-content `}type="submit" href="#">Book Now</button>
            </div>
        </div>
    );
};

export default SearchPage;
