import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <button
        type="button"
        onClick={() => {
          throw Error("OOpps");
        }}
      >
        Donot click
      </button>
      <Row title="Trending Now Updated" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceOriginals} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentares} />
    </div>
  );
}

export default Sentry.withProfiler(App);
