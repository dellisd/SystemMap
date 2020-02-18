# System Map

This is a proof of concept of an interactive OC Transpo system map made using Mapbox, React, and the `shapes.txt` file from OC Transpo's GTFS data.

## Setup

Before building, you will need Node.js and NPM installed.

To setup this project for development or building, follow these steps:

1. Clone the repository.
2. Obtain a [Mapbox access token](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/).
3. Create a `.env` file in the root of the project and put the following line in it

```
MAPBOX_KEY=<mapbox access token>
```

4. Run `npm install`
5. Run `npm start`
