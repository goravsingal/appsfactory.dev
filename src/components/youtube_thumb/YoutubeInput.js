import React, { Component } from 'react';
import { FaYoutube, FaLink, FaImages } from "react-icons/fa";
import ColOneShrink10 from '../../components/layouts/col_one_mid_shrink_10'

export default class YoutubeInput extends Component {
  
  render() {
    const { url, handleChange, handleSubmit, handleClear } = this.props;

    return (
      <ColOneShrink10 noHeader={true}>
        <h1 className="text-center"><FaYoutube className="text-danger h1"/> Fetch Youtube Video Thumbnail Image</h1>
        <div className="card text-center">
          <div className="card-header">
            <p className="h3 text-success text-center">Youtube Video thumbnail images in multiple sizes</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Write or Paste Youtube URL</h5>
            <p className="card-text">Example: https://www.youtube.com/watch?v=PEIBIekMbiQ</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="youtube-url">
                      <FaLink />
                    </span>
                  </div>
                  <input className="form-control form-control-lg" 
                    type="text" 
                    aria-describedby="youtube-url"
                    placeholder="Video URL"
                    value={url ? url : ''}
                    onChange={handleChange}
                    />
                </div>
                <small className="form-text text-muted">
                  Put youtube video URL for which you want the thumbnail image
                </small>
              </div>
              <button type="button" 
                className="btn btn-secondary btn-lg mr-4"
                onClick={handleClear}
                >Clear</button>
              <button type="submit" className="btn btn-primary btn-lg">
              <FaImages /> Get Video Thumbnail Image
              </button>
            </form>
          </div>
        </div>
      </ColOneShrink10>
    )
  }
}