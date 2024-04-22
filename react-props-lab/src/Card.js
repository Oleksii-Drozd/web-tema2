import React from 'react';
import './Card.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Card = ({ name, image, phone, email }) => {
    return (
        <div className="cat-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <div className="contact-info">
                <FaPhone /> <span>{phone}</span>
            </div>
            <div className="contact-info">
                <FaEnvelope /> <span>{email}</span>
            </div>
        </div>
    );
};


const PeopleCard = ({ name, image, phone, email }) => {
    return (
        <div className="people-card">
            <div className="top-section">
                <h2>{name}</h2>
                <img src={image} alt={name} />
            </div>
            <div className="bottom-section">
                <p>Телефон: {phone}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};


export { Card, PeopleCard };