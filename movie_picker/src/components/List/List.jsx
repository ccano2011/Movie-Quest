import React from "react";

function List(props) {
    // 0:
    // createdTime: "2020-10-13T00:15:58.000Z"
    // fields:
    // poster: "https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"
    // title: "Enola Holmes"
    // userRating: 7.6
    // __proto__: Object
    // id: "rec6RHSEDpAXeTSVf"
    // __proto__: Object
    console.log(props.fetchList)
    return (
        <div>
            {
                props.fetchList.map((movie) => (
                    <div key={movie.id}>
                        <img src={movie.fields.poster} alt={"poster for" + movie.fields.title} /> <br />
                        <p className="title" >{movie.fields.title} <br /></p>
                        {/* <p className="plotSummary">{movie.overview} <br /></p> */}
                        <p className="userScore" >User ratings: {movie.fields.userRating}/10</p>
                    </div>
                ))
            }
        </div>
    )
}
export default List;