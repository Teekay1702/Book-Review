import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import Input from './Input';
import BookList from './BookList';

const Home = () => {
    const [term, setTerm] = useState('Anything');
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=${import.meta.env.VITE_SOME_VALUE}`)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.items || []); // Ensure books is always an array
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [term]);

    return (
        <div>
            <NavBar />
            <div>
                <h2>Books on {term}</h2>
                <p>
                    "Reading is an act of civilization; it's one of the greatest acts
                    of civilization because it takes the free raw material of the mind
                    and builds castles of possibilities."
                </p>
                <Input setTerm={setTerm} />
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                <div>
                    <BookList Books={books} />
                </div>
            </div>
        </div>
    );
}

export default Home;
