# Ravenous

## Summary

Ravenous project is a restaurant recommendation website built using HTML, CSS, JavaScript, and React. Utilizing the
[Yelp API](https://docs.developer.yelp.com/docs/fusion-intro), users can search for local businesses by entering their location and keywords.
The application replicates the key functionalities of Yelp, allowing users to view search results. Through React
components and state management, Ravenous delivers a seamless and responsive user experience,
enabling users to find and explore dining options efficiently.
Users can refine their restaurant search results based on several criteria, including "best match," "highest rated," and
"most reviewed". These options allow users to customize their search experience according to their preferences and priorities.

## Development

The app was created using `create-react-app` so in order to start it simply clone the repo. Then download
dependencies with

`npm install`

Once you have all the dependencies you'll need to obtain a token to call Yelp API which you can do by following
these instructions: [YelpApi - fusion-authentication](https://docs.developer.yelp.com/docs/fusion-authentication).

Then you can start the app by running:

`REACT_APP_YELP_API_KEY=<token> npm start`

## App Design

The app is using vanilla CSS styles without any framework. It is split in multiple components and is calling
Yelp API through a proxy service in order to bypass [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) restrictions

### Screenshot

![Screenshot from 2024-03-01 09-46-12](https://github.com/nowAnia/ravenous/assets/152620390/80121b0d-fab7-40b4-b590-306257767027)

### High-level Component structure

The core of the application is `App` component which manages other components. It includes `Header` that handles
search logic, where a user can decide what type of food they would like to choose, where they want to eat and choose the
type of search between _best match_, _highest rated_, or _most reviewed_ . Once the data is retrieved from
Yelp API it will be presented in `BusinessList` with multiple single `Business` that contain detailed information about
a restaurant.

### Proxy server

Unfortunately Yelp API does not provide Access-Control-Allow-Origin headers making it impossible to be called directly
from a web browser. In order to bypass this safeguard we are using a
[proxy server](https://cors-anywhere.herokuapp.com/corsdemo) that adds these headers. Obviously for a
production-like system this would be a major vulnerability. However for development and training purposes and the
specific use case that we are using it with - it is acceptable. Below you can see the entire diagram of ravenous
network requests:

![CORS drawio](https://github.com/nowAnia/ravenous/assets/152620390/c843ce96-0ff9-458d-b6f1-f287bb6fb8a8)
