import React, { Component } from 'react';
import YoutubeEmbed from '../components/youtube_thumb/YoutubeEmbed';
import YoutubeInput from '../components/youtube_thumb/YoutubeInput';
import YoutubeThumbImages from '../components/youtube_thumb/YoutubeThumbImages';
import YoutubeExamples from '../components/youtube_thumb/YoutubeExamples';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Metatags from '../components/seo/meta_tags'

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
        <Metatags 
          title="Download different resolution of thumbnail images for any youtube video"
          pathname="/youtube-thumbnail/"
          ogImage="/youtube_logo.png"
          description="Download high resolution image of youtube video. You can get other resolution of images as well."
          />
        <Navbar />
        <YoutubeInput 
          url={this.state.url}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
          handleSubmit={this.handleSubmit}/>

        {this.state.videoId && <YoutubeThumbImages videoId={this.state.videoId}/>}
        {this.state.videoId && <YoutubeEmbed videoId={this.state.videoId}/>}

        <hr />
        {<YoutubeExamples handleExampleClick={this.handleExampleClick}/>}

        <Footer />
      </>
    )
  }
}
