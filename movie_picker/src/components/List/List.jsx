import React from "react";
import axios from 'axios';
function List(props) {
    // 0:
    // createdTime: "2020-10-13T00:15:58.000Z"
    // fields:
    // poster: "https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"
    // title: "Enola Holmes"
    // userRating: 7.6
    // __proto__: Object
    // id: "rec6RHSEDpAXeTSVf"
    // // __proto__: Object
    // console.log(props.fetchList)

    const handleDelete = async () => {
        setTimeout(async () => {
            const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/list/${props.movie}`;
            await axios.delete(airtableURL, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                },
            });
            props.setFetchList(!props.fetchList);
        }, 200);
    };


    return (
        <div>
            {
                props.fetchList.map((movie) => (
                    <div key={movie.id}>
                        <img src={movie.fields.poster} alt={"poster for" + movie.fields.title} /> <br />
                        <p className="title" >{movie.fields.title} <br /></p>
                        {/* <p className="plotSummary">{movie.overview} <br /></p> */}
                        <p className="userScore" >User ratings: {movie.fields.userRating}/10</p>
                        <button onClick={handleDelete}>Remove from My List</button>
                    </div>
                ))
            }
            <div>

            </div>
        </div>

    )
}
export default List;