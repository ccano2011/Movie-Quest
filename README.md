# Project Overview

## Project Name

Movie Quest

## Project Description

Let's be honest: We've all spent more time scrolling to find something to watch than actually watching at one point or another. It's not fun. There's too many options, and there's only so many times one can rewatch *National Treasure.*  

If only there was a way to help alleviate this paradox of choice....

Enter: Movie-Picker! It is a web application that allows users to specify a genre, decade, actor, director, and even select if they want to watch an Oscar award winner and then return a recommendation using The Movie Database (https://developers.themoviedb.org/) api!


## Wireframes
Desktop/Tablet View:
![Imgur](https://i.imgur.com/PAmvMgT.png)
![Imgur](https://i.imgur.com/hSAyMXR.png)
![Imgur](https://i.imgur.com/JHWz7ua.png)
![Imgur](https://i.imgur.com/JHWz7ua.png)
![Imgur](https://i.imgur.com/qKlNDrd.png)

Mobile View:
![Imgur](https://i.imgur.com/PjynNL5.png)
![Imgur](https://i.imgur.com/HU972q9.png)
![Imgur](https://i.imgur.com/jPtN8Yf.png)
![Imgur](https://i.imgur.com/Dg5ADYL.png)

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

This project will also use Airtable to store movies the user wants to save for later

## Component Hierarchy
![Imgur](https://i.imgur.com/EYCoSkD.png)

## MVP/PostMVP

#### MVP 

- Leverage the TMDb API with Query Strings to add personalized results.
- Render appropriate movie information and images to the DOM
- Allow users to add movies to a list that will be saved to Airtable; a second API
- Properly style the compenents in the app

#### PostMVP  

- Add a link to a google search with the movie title as an extension like a query string: (https://www.google.com/search?q={MOVIE_TITLE_PASSED_HERE})
- Use local storage to save user's List

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|10-09-20| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|10-09-20| Project Approval | Incomplete
|10-11-20| Core Application Structure (HTML, CSS, etc.) | Incomplete
|10-12-20| Pseudocode / actual code | Incomplete
|10-14-20| Initial Clickable Model  | Incomplete
|10-14-20| MVP | Incomplete
|10-16-20| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial Pseudocode & Component structure| H | 2hrs| hrs | hrs |
| Initial React Application w/ components & TMDb API implemented| H | 12hrs| hrs | hrs |
| Working with Airtable API | H | 3hrs| hrs | hrs |
| Initial CSS for Mobile-First | H | 8hrs| hrs | hrs |
| Initial CSS for Desktop/Tablet-Second | H | 5hrs| hrs | hrs |
| Initial CSS for Mobile-First | H | 8hrs| hrs | hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## SWOT Analysis

### Strengths:
    Using axios in react
### Weaknesses:
    Class components
### Opportunities:
    Able to gain experience in writing in react
### Threats:
    Making my deliverables without major setbacks with the API

## Change Log:

    Any changes to the project will be reflected here
