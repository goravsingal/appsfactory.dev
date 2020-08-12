import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaRegFutbol, FaYoutube } from 'react-icons/fa';

export default class Home extends Component {
  render() {
    return (
      <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-8">
            <div className="jumbotron text-center">
              <h1 className="display-4">A Factory of Apps <FaRegFutbol /></h1>
              <p className="lead">
                A collection of useful apps. Made by developers, made for developers...
              </p>
              <hr className="my-4"/>
              <p className="lead">
                Browse our Apps
              </p>
            </div>

            <div className="media">
              <img class="mr-3" src="/youtube_logo.png" alt="Youtube thumbnail"></img>
              <div className="media-body">
                <h3 className="mt-0">Youtube Thumbnail Extractor</h3>
                <p className="lead">
                  Download youtube thumbnail images from Youtube video. Just put the URL of any youtube video, and see various resolution of images.
                </p>
                <Link className="btn btn-primary btn-lg" to="/youtube-thumbnail/">
                  <FaYoutube /> Youtube Thumbnail Downloader
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      </>
    )
  }
}
