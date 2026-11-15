
import React, { useState } from "react";
import "./App.css";

function App() {

    const [number, setNumber] = useState(null);

    function generateNumber() {
        const random = Math.floor(Math.random() * 100) + 1;
        setNumber(random);
    }

    return (
        <div className="container">

            <h1>Random Number Generator</h1>

            {number === null ? (
                <p>No number generated yet</p>
            ) : (
                <h2>{number}</h2>
            )}

            <button onClick={generateNumber}>
                Generate Random Number
            </button>

        </div>
    );
}

export default App;
