import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({ addReadingTime, addBookMark }) => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    return (
        <div>
            <div>
                {
                    cards.map(card =>
                        <Card
                            addReadingTime={addReadingTime}
                            addBookMark={addBookMark}
                            card={card}
                            key={card.id}
                        >   
                        </Card>)
                }
            </div>
        </div>
    );

};

export default Cards;