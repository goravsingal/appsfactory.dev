import React from "react"
import { FaRegFutbol, FaYoutube } from 'react-icons/fa';
// import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/app.css'
// import 'bootstrap/dist/js/bootstrap.min.js';

import { Link } from "gatsby";
import ColOneMidShrink from '../components/layouts/col_one_mid_shrink'
import Metatags from '../components/seo/meta_tags'

export default function Home() {
  return (
    <>
      <ColOneMidShrink>
        <Metatags 
          title="Collection of utility Apps, Useful apps for free."
          pathname="/"
          ogImage="/youtube_logo.png"
          description="A collection of useful utility apps for free. You can use them for your work for free"
          />

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
      </ColOneMidShrink>
    </>
  )
}
