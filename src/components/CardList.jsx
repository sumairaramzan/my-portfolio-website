import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/cards")
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
