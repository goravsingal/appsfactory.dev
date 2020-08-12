import React, { Component } from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import YoutubeInput from './YoutubeInput';
import YoutubeThumbImages from './YoutubeThumbImages';
import YoutubeExamples from './YoutubeExamples';

const getYouTubeID = require('get-youtube-id');

export default class YoutubeThumbnail extends Component {
  state = {
    cleared: true,
    url: null,
    videoId: null
  };

  handleChange = e => {
    this.setState({
      url: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      cleared: false,
      videoId: getYouTubeID(this.state.url)
    });
  };

  handleExampleClick = url => {
    this.setState({
      url: url,
      cleared: false,
      videoId: getYouTubeID(url)
    });
  };

  handleClear = () => {
    this.setState({
      url: null,
      cleared: true,
      videoId: null
    });
  };

  render() {
    return (
      <>
        <YoutubeInput 
          url={this.state.url}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
          handleSubmit={this.handleSubmit}/>

        {this.state.videoId && <YoutubeThumbImages videoId={this.state.videoId}/>}
        {this.state.videoId && <YoutubeEmbed videoId={this.state.videoId}/>}

        <hr />
        {<YoutubeExamples handleExampleClick={this.handleExampleClick}/>}
      </>
    )
  }
}
