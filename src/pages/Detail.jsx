import React from 'react';
import { useParams } from 'react-router-dom';
import pizzas from '../pizzasData';
import './PizzaDetailsPage.css';

function Detail() {
  const { id } = useParams();
  const pizza = pizzas.find((pizza) => pizza.id === parseInt(id));

  if (!pizza) {
    return <div>Pizza not found!</div>;
  }

  return (
    <div className="pizza-details-container">
      <div className="pizza-image-container">
        <img src={pizza.image} alt={pizza.name} className="pizza-image" />
      </div>
      <div className="pizza-info">
        <h1 className="pizza-name">{pizza.name}</h1>
        <p className="pizza-description">{pizza.description}</p>
        
        <h3 className="pizza-ingredients-title">Ingredients</h3>
        <ul className="pizza-ingredients">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3 className="pizza-nutrition-title">Nutritional Facts</h3>
        <ul className="pizza-nutritional-facts">
          <li><strong>Calories:</strong> {pizza.nutritionalFacts.calories}</li>
          <li><strong>Fat:</strong> {pizza.nutritionalFacts.fat}</li>
          <li><strong>Protein:</strong> {pizza.nutritionalFacts.protein}</li>
          <li><strong>Carbs:</strong> {pizza.nutritionalFacts.carbs}</li>
        </ul>

        <div className="pizza-price-container">
          <span className="pizza-price">${pizza.price.toFixed(2)}</span>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
