home.jsx
import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import Input from './Input';

const [Books, setBooks] = useState([]);

useEffect (() => {
    fetch(`https://www.googleapis.com/books/v1/volumes q=${term}&key=${import.meta.env.VITE_SOME_VALUE}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        setBooks(data.items);
    })
    .catch((err) => {
        setError(err.message);
    });
}, []);

const Home = () => {
    const [term, setTerm] = useState('Anything')
    return (
        <div>
            <NavBar />
            <div className="header">
                <div className="overlay">
                    <h2 className="heading-text">Books on {term}</h2>
                    <p className="text-md mb-4 px-2 lg:px-0">
                        "Reading is an act of civilization; it's one of the greatest acts
                        of civilization because it takes the free raw material of themind
                        and builds castles of possibilities."
                    </p>
                    <Input />
                </div>
            </div>
        </div>
    );
}

export default Home;