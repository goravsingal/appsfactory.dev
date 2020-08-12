import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FaInfoCircle, FaYoutube } from 'react-icons/fa';

export default class About extends Component {
  render() {
    return (
      <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-8">
            <div className="jumbotron">
              <h1><FaInfoCircle /> About Apps-Factory</h1>
              <p className="lead">
                Apps Factory is determined to produce useful Apps. 
              </p>
              <hr className="my-4"/>
              <p>Apps-Factory is run by developers. The aim is to provide lot of useful apps.</p>
              <p>On this page, we list down the apps developed by us.</p>
            </div>

            <div className="card my-2">
              <div className="card-body">
                <h5 className="card-title">Youtube Video Thumbnail Downloader</h5>
                <h6 className="card-subtitle mb-2 text-muted">Youtube Tool</h6>
                <p className="card-text">This tool is used to download youtube video's image or thumbnails. User provideds youtube url, and this tool gives you 4-5 different size image, which you can use in your portal or app.</p>

                See youtube video image downloader in action.<br/>
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
