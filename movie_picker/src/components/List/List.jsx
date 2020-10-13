import React from "react";
import axios from 'axios';
function List(props) {

    const handleDelete = async (id) => {
        setTimeout(async () => {
            const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/list/${id}`;
            await axios.delete(airtableURL, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                },
            });
            // props.setFetchList();
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
                        <button onClick={() => handleDelete(movie.id)}>Remove from My List</button>
                    </div>
                ))
            }
            <div>

            </div>
        </div>

    )
}
export default List;