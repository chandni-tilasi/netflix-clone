import React from "react";
import "./Card.css";
function Card(props) {
  const obj = props.arr.results;

  return (
    <div>
      <div className="card">
        {obj.map((ele) => {
          return (
            <img
              key={ele.id}
              src={`https://image.tmdb.org/t/p/original/${ele.poster_path} `}
              alt={ele.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Card;
