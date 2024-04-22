import React from 'react';
import {Card} from './Card';
import {PeopleCard} from './Card';
import { cats, people } from './Element';


const App = () => {
    return (
        <div className="App">
            <h1>React-props (Тема 2)</h1>
            <div className="cat-cards-container">
                {cats.map((cat) => (
                    <Card key={cat.name} {...cat} />
                ))}
            </div>

            <h1>React-props (Тема 2)</h1>
            <div className="people-cards-container">
                {people.map((person) => (
                    <PeopleCard key={person.name} {...person} />
                ))}
            </div>
        </div>
    );
};

export default App;
