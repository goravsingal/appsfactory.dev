import React, { Component } from 'react';

export default class YoutubeEmbed extends Component {
  render() {
    const { videoId } = this.props;

    return (
      <div class="bg-dark my-2">
      <div className="container">
        <div className="row justify-content-md-center my-2">
          <div className="col-sm-10">
            <div className="card my-4">
            <div class="card-header text-center">
              <h3>Watch Your Youtube Video</h3>
            </div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe 
                  title="Youtube video"
                  className="embed-responsive-item" 
                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
