# Project Overview

## Project Name

Movie Quest

## Project Description

Let's be honest: We've all spent more time scrolling to find something to watch than actually watching at one point or another. It's not fun. There's too many options, and there's only so many times one can rewatch *National Treasure.*  

If only there was a way to help alleviate this paradox of choice....

Enter: Movie Quest! It is a web application that allows users to see what movies are popular right now, find a movie to watch by specifying up to 2 genres and have Movie Quest return a recommendation, or find the best movies by year by leveraging the The Movie Database (https://developers.themoviedb.org/) api! Users can also save titles that interest them to a list hosted by Airtable so they can return to it at a later time.


## Wireframes
Desktop/Tablet Wireframes:
![Imgur](https://i.imgur.com/acWaJPB.png)
![Imgur](https://i.imgur.com/HdXhOc4.png)
![Imgur](https://i.imgur.com/9eTmTXX.png)
![Imgur](https://i.imgur.com/25ZWhCT.png)
![Imgur](https://i.imgur.com/ywgngCD.png)

Mobile Wireframes:
![Click Here](Mobile-wireframes.md)

### Post MVP
![Imgur](https://i.imgur.com/7FqOh6l.png)


## API and Data Sample

A sample from the API: https://api.themoviedb.org/3/movie/550?{API_KEY_HERE}
```
{
    "adult": false,
    "backdrop_path": "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    "belongs_to_collection": null,
    "budget": 63000000,
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "http://www.foxmovies.com/movies/fight-club",
    "id": 550,
    "imdb_id": "tt0137523",
    "original_language": "en",
    "original_title": "Fight Club",
    "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    "popularity": 34.408,
    "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        ....etc.....}
```

This project will also use Airtable to store movies the user wants to save for later. Here's a sample JSON response for the Airtable:

```
{
    "records": [
        {
            "id": "recCjSMDPEqPygkeN",
            "fields": {
                "Title": "place-holder title",
                "Poster": "URL for <img> path",
                "Release Year": "20XX",
                "Runtime": "525,600 min."
            },
            "createdTime": "2020-10-09T14:22:08.000Z"
        },
        {
            "id": "recVPB3MDpkdLr1ep",
            "fields": {},
            "createdTime": "2020-10-09T14:22:08.000Z"
        },
        {
            "id": "rec1o5jHfqaCFtO17",
            "fields": {},
            "createdTime": "2020-10-09T14:22:08.000Z"
        }
    ],
    "offset": "rec1o5jHfqaCFtO17"
}
```

## Component Hierarchy
![Imgur](https://i.imgur.com/52W3RBW.png)

## MVP/PostMVP

#### MVP 

- Leverage the TMDb API with Query Strings to return "Popular Movies"
- Have a component that will direct you to "Results"
- Allow the user to save the result (Title, Poster, Release Year, Runtime) to Airtable
- Render appropriate movie information and images to the DOM
- Make a second component that will allow for Query strings to return results that gives the "best of" & "genre"
- Properly style the compenents in the app

#### PostMVP  

- Add a component that will allow users to search by up to 2 genres and return user to "Results"
- Add a link to a google search with the movie title as an extension like a query string: (https://www.google.com/search?q={MOVIE_TITLE_PASSED_HERE})
- Use local storage to save user's List

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|10-09-20| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|10-09-20| Project Approval | Complete
|10-11-20| React component: */* | Incomplete
|10-12-20| Initial Clickable Model | Incomplete
|10-14-20| Core Application Structure (HTML, CSS, etc.) | Incomplete
|10-14-20| MVP | Incomplete
|10-16-20| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial Pseudocode/Planning & App component structure| H | 2hrs| hrs | hrs |
| Add axios to return "Popular Movies" from TMDB API w/ Query strings| H | 2hrs| hrs | hrs |
| Create React component */* for the Homepage with Button for "Show me what's popular" | H | 4hrs| hrs | hrs |
| Have Button redirect user to */choice/:query* | H | 3hrs| hrs | hrs |
| Add axios to */choice/:query* from Airtable and create "Add to My List" Button | H | 4hrs| hrs | hrs |
| Have */choice/:query* return a list of results for "Popular Movies" | H | 4hrs| hrs | hrs |
| Allow user to select a movie from */choice/:query* and add it to "My List" | H | 4hrs| hrs | hrs |
| Create */pick/:menu* for the "Best of genre/year" with options for users to use dropdown selection for either genre or year  | H | 4hrs| hrs | hrs |
| Have */choice/:query* return a list of results for "Best of genre/year" | H | 4hrs| hrs | hrs |
| After MVP functionality is completed, begin initial CSS styling for "Homepage"| H | 3hrs| hrs | hrs |
| CSS styling for "Popular Movies" | H | 3hrs| hrs | hrs |
| CSS styling for "Results" | H | 3hrs| hrs | hrs |
| CSS styling for "My List" | H | 3hrs| hrs | hrs |
| CSS styling for "Best of genre/year" | H | 3hrs| hrs | hrs |
| CSS styling for Mobile & Tablet | H | 3hrs| hrs | hrs |
| Total | H | 49hrs| hrs | hrs |

## SWOT Analysis

### Strengths:
    Resourcefulness in looking up information
### Weaknesses:
    Class components
### Opportunities:
    This will be an incredible way to reinforce React and hopefully learn a lot!
### Threats:
    Making my deliverables without major setbacks due to my inexperience with React or issues with the API

## Change Log:

    Any changes to the project will be reflected here

