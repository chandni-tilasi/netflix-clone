import React from "react";
import "./RoutesCard.css"
function RoutesCard(props) {
  const results = props.arr.results;
  return (
    <div>
      <div className="routesContainer">
        {/* {obj.map((ele) => {
          return (
            <img
              key={ele.id}
              src={`https://image.tmdb.org/t/p/original/${ele.poster_path}`}
            />
          );
        })} */}
        {console.log(results)};
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
