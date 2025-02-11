import React, { useState, useEffect } from 'react';
import NavBar from './Navbar';
import Input from './Input';
import BookList from './BookList';

const Home = () => {
    const [term, setTerm] = useState('Anything');
    const [Books, setBooks] = useState([]);

    useEffect(() => {
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

    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <h2>Books on {term}</h2>
                    <p>
                        "Reading is an act of civilization; it's one of the greatest acts
                        of civilization because it takes the free raw material of themind
                        and builds castles of possibilities."
                    </p>
                    <Input />
                    <div>
                        <BookList Books={Books} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;