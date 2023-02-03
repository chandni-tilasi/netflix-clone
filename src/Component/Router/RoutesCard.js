import React from "react";
import "./RoutesCard.css"
function RoutesCard(props) {
  const results = props.arr.results;
  return (
    <div>
      <div className="routesContainer">
{/*         
        {console.log(results)}; */}
        {results &&
          results.map((el) => (
            <div key={el.id}>
              <img
                style={{ height: "200px" }}
                src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                alt={el.title}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default RoutesCard;
