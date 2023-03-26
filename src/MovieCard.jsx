import React from 'react';

// const f = () => {
//     return {
//         x: 1,
//         y: 2,
//         z: 3
//     };
// };

// const {x, y, z} = f();
// const whatever = f();
// console.log(whatever.x);

const MovieCard = ({movie}) => {
    return (
        <div className="movie">

            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https:;;//via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    );
}
export default MovieCard;