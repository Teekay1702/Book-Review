import React, { useState } from "react";

const Input = ({ searchBooks }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) {
            searchBooks(search); // Pass search term to parent
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your search term"
                    autoComplete="off"
                    className="input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Input;
