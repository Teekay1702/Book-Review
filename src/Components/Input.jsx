import React from "react";

const Input = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your search term"
                    autoComplete="off"
                    className="input"
                />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>
        </div>
    )
}
export default Input;