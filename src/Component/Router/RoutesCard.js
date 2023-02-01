import React from 'react'

function RoutesCard(props) {
    const obj = props.arr.results;
  return (
    <div>
            <div className='routesContainer'> 
            {
                obj.map((ele) => {
                    
                    return <img key={ele.id} src={`https://image.tmdb.org/t/p/original/${ele.poster_path} `} />
                })
            }
            </div>
           
        </div>
  )
}

export default RoutesCard;