import "./SearchResults.css";
import React from "react";
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Search Results</h2>
        <TrackList tracks={this.props.searchResults} />
      </div>
    );
  }
}

export default SearchResults;
