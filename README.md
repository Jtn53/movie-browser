### Movie Browser App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app is powered by themoviedb API to look for movies and return results.

## To run

1. npm install
2. npm start

## To use

1. Type a search term in the search box
2. Click on a movie to view the details

## Things that can be improved, given more time

- add pagination to movie results
- styling (looks pretty ugly, a little janky at very small screen sizes)
- create a fetch wrapper (or use Axios, etc) for better browser compatibility and separation of concerns with the view
- error edge cases especially around API responses
- call MovieDB's configuration API to set configs up properly instead of hardcoding
- make back button work properly with React Router's history
- better loading states for the pages (isLoading state, show a loading spinner or something)