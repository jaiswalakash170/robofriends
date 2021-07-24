import React from 'react';

const Card = () => {
    return (
        <div className="bg-light-green dib br3 pad3 mar3 grow bw2 shadow">
            <img alt="Robots" src="https://robohash.org/test?200x200" />
            <div>
                <h2>Jane Doe</h2>
                <p>Jane.Doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;