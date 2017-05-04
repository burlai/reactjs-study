import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyD4DTkmA_1WYxmfjB5uHeHgjy443CjAhZU';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'cat videos' }, (videos) => {
      this.setState({ videos });
      console.log(videos);
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.querySelector('.container'));