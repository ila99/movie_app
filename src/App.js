import PropTypes from "prop-types";
import React from "react";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "pizza",
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5
  },
  {
    id: 2,
    name: "icecream",
    image:
      "https://images.pexels.com/photos/3625373/pexels-photo-3625373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 10
  },
  {
    id: 3,
    name: "hambuger",
    image:
      "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}
export default App;
