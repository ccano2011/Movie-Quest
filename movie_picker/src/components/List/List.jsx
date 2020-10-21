import React from "react";
import axios from 'axios';
function List(props) {
    //This Rerender state was found on stack overflow

    const handleDelete = async (id) => {
        setTimeout(async () => {
            const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/list/${id}`;
            await axios.delete(airtableURL, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                },
            });
            props.setFetchList(!props.fetchList);
        }, 200);
    };


    return (
        <div className="body">
            <div className="map">
                {
                    props.list.map((movie) => (
                        <div className="mappedContent" key={movie.id}>
                            <img id="pickPoster" src={movie.fields.poster} alt={"poster for" + movie.fields.title} /> <br />
                            <p id="title" >{movie.fields.title} <br /></p>
                            <button className="listButton" onClick={() => handleDelete(movie.id)}>Remove from My List</button>
                            <p id="plotSummary">{movie.fields.plotSummary} <br /></p>
                            <p id="userScore" >User ratings: {movie.fields.userRating}/10</p>

                        </div>
                    ))
                }
                <div>
                </div>
            </div>
        </div>
    )
}
export default List;