import React, { useEffect, useState } from "react";
import axios from "axios";


function List(props) {
    const [myList, setMyList] = useState()
    const [fetchList, setFetchList] = useState()

    useEffect(() => {
        const getList = async () => {
            const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/list`;
            const response = await axios.get(airtableURL, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
                },
            });
            setFetchList(response.data.records);
        };
        getList();
    }, []);


    console.log(fetchList)


    return (
        //     popEndpoint.map((movie) => (
        //         <div key={list.id}>
        //             <img src={list.} alt={"poster for" + movie.title} value={movie.poster} /> <br />
        //             <p className="title" value={title}>{movie.title} <br /></p>
        //             <p className="plotSummary">{movie.overview} <br /></p>
        //             <p className="userScore" value={userRating}>User ratings: {movie.vote_average}/10</p>
        //         </div>
        // ))
        <> </>
    )
}

export default List;