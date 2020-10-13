import React, { useEffect, useState } from "react";
import axios from "axios";


function List(props) {
    const [fetchList, setFetchList] = useState([])

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

    const myList = async (list) => {
        const fields = {
            title: title,
            poster: poster,
            userRating: userRating,
        };
        fetchList.response.data.records
    }


    console.log(fetchList)
    // 0:
    // createdTime: "2020-10-13T00:15:58.000Z"
    // fields:
    // poster: "https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg"
    // title: "Enola Holmes"
    // userRating: 7.6
    // __proto__: Object
    // id: "rec6RHSEDpAXeTSVf"
    // __proto__: Object

    return (
        fetchList.map((list) => (
            <div key={list.id}>
                <img src={list.poster} alt={"poster for" + list.title} value={list.poster} /> <br />
                <p className="title" value={list.title}>{list.title} <br /></p>
                {/* <p className="plotSummary">{movie.overview} <br /></p> */}
                <p className="userScore" value={list.userRating}>User ratings: {list.userRating}/10</p>
            </div>
        ))

    )
}

export default List;