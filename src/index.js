import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD4DTkmA_1WYxmfjB5uHeHgjy443CjAhZU';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('cat videos');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({ videos: data,
                      selectedVideo: data[0]
      });
      
      console.log(this.state);
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} 
                   onVideoSelect = {selectedVideo => this.setState({selectedVideo}) } />
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.querySelector('.container'));