# Project Overview

## Project Name

Movie Quest

## Project Description

Let's be honest: We've all spent more time scrolling to find something to watch than actually watching at one point or another. It's not fun. There's too many options, and there's only so many times one can rewatch *National Treasure.*  

If only there was a way to help alleviate this paradox of choice....

Enter: Movie Quest! It is a web application that allows users to see what movies are popular right now, find a movie to watch by checking out what what's popular, and find recommendations based on genre & user rating. This takes the guess work out of finding something to watch by leveraging the The Movie Database (https://developers.themoviedb.org/) api! Users can also save titles that interest them to a list hosted by Airtable so they can return to it at a later time.


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
![Imgur](https://i.imgur.com/Vbv4M6N.png)

## MVP/PostMVP

#### MVP 

- Leverage the TMDb API with Query Strings to return "Popular Movies"
- Have a component that will direct you to "List"
- Allow the user to save the result (Title, Poster, Plot Summary, & User Rating) to Airtable
- Render appropriate movie information and images to the DOM
- Make a second component that will allow for Query strings to return results that gives the "best of" & "genre"
- Properly style the compenents in the app

#### PostMVP  

- Add a component that will allow users to search by up to 2 genres and return user to "Results"
- Add a "Dark Mode" styling
- "Change 'Added to My List' button to a 'Remove from My List' within the 'Choice' component"
- Change the form elements in the "Pick" component to a pre-populated drop-down menu
- Use local storage to save user's List

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|10-09-20| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|10-09-20| Project Approval | Complete
|10-14-20| React component: */* | Complete
|10-14-20| Initial Clickable Model | Complete
|10-15-20| Core Application Structure (HTML, CSS, etc.) | Complete
|10-16-20| MVP | Complete
|10-16-20| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial Pseudocode/Planning & App component structure| H | 2hrs| 3hrs | hrs |
| Add axios to return "Popular Movies" from TMDB API w/ Query strings| H | 2hrs| 2hrs | hrs |
| Create React component */* for the Homepage with Button for "Show me what's popular" | H | 4hrs| 5hrs | hrs |
| Have Button redirect user to */choices/:query* | H | 3hrs| 30min | hrs |
| Add axios to */choices/:query* from Airtable and create "Add to My List" Button | H | 4hrs| 5hrs | hrs |
| Have */choices/:query* return a list of results for "Popular Movies" | H | 4hrs| 2hrs | hrs |
| Allow user to select a movie from */choices/:query* and add it to "My List" | H | 4hrs| 4hrs | hrs |
| Create */pick/:menu* for the "Best of genre/year" with options for users to input either genre or year  | H | 4hrs| 5hrs | hrs |
| Have */choice/:query* return a list of results for "Best of genre/year" | H | 4hrs| 4hrs | hrs |
| After MVP functionality is completed, begin initial CSS styling for "Homepage"| H | 3hrs| 3hrs | hrs |
| CSS styling for "Popular Movies" | H | 3hrs| 30 min | hrs |
| CSS styling for "Choice" | H | 3hrs| 10min | hrs |
| CSS styling for "My List" | H | 3hrs| 10min | hrs |
| CSS styling for "Pick" | H | 3hrs| 1hr | hrs |
| CSS styling for Mobile & Tablet | H | 15min| 20min | hrs |
| Total | H | 49hrs| 35.5hrs | hrs |

## SWOT Analysis

### Strengths:
    Resourcefulness in looking up information
### Weaknesses:
    Class components, .map() functions, & CSS
### Opportunities:
    This will be an incredible way to reinforce React and hopefully learn a lot!
### Threats:
    Making my deliverables without major setbacks due to my inexperience with React or issues with the API

## Change Log:

    10/09/20: 
        - Moved the "genre-picking" to Post MVP to prioritize efficiency in coding the basic functionality for the major components

    10/13/20:
        - Made the following changes to the component hierarchy:
            - Removed "Options" component
            - Moved the code within "Options" to "Choices" for better organization 
        Component Hierarchy updated to appropriately reflect the changes.
        - Updated deliverables on Timeframes.

    10/14/20:
        - Added 3 additional "Post-MVPs":
            - "Add a 'Dark Theme'"
            - "Change 'Added to My List' button to a 'Remove from My List' within the 'Choice' component"
            - Change the forms on the "Pick" component to drop down selections
        - Removed an unnessary "Post-MVP":
            - "Add a link to a google search with the movie title as an extension like a query string: (https://www.google.com/search?q={MOVIE_TITLE_PASSED_HERE})"
        - Made the following changes to the component hierarchy:
            - Removed "MovieInfo" Component for simplicity and to ensure a better, feature complete version upon deliverable
            - Added "Footer" component to satisfy TMDB's Terms & Conditions for use of their API and credit them on every component of the app
        - Changed the dropdown feature to a form for simplicity and to ensure on-time deliverable