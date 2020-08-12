import React, { Component } from 'react';
// const {promisify} = require("es6-promisify");
// const imageExists = require('image-exists');
// const imageExistsP = promisify(imageExists);
import DownloadImgBtn from '../../lib/DownloadImgBtn';

export default class YoutubeThumbImages extends Component {
  // checkImages = async () => {
  //   console.log('Checking images', this.props.videoId);
  //   const { videoId } = this.props;
    
  //   let correctUrls = [];
  //   for(let i=0; i<urls.length; i++) {
  //     console.log('Checking image', urls[i].url);
  //     const iExists = await imageExistsP(urls[i].url);
  //     if (iExists) {
  //       correctUrls.push(urls[i]);
  //     }
  //   }

  //   console.log(correctUrls);
  // }

  render() {
    const { videoId } = this.props;
    this.urls = [
      {url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, title: 'size-1280x720', active: true},
      {url: `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`, title: 'size-640x480', active: false},
      {url: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`, title: 'size-480x360', active: false},
      {url: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`, title: 'size-320x180', active: false},
      {url: `https://i.ytimg.com/vi/${videoId}/default.jpg`, title: 'size-120x90', active: false}
    ];

    return (
      <div className="container">
      <div className="card border-primary mb-3">
      <div className="card-header text-center">
        <h3>Download Video Images</h3>
        <small>Click on sizes for multiple size images</small>
      </div>
      <div className="container mb-2 mt-2">
        <div className="row justify-content-md-center">
          <div className="col-sm-2">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              {this.urls.map(item => {
                return (
                  <a key={item.title} className={item.active ? "nav-link active" : "nav-link"} 
                    id={`${item.title}-tab`} data-toggle="pill" 
                    href={`#${item.title}`} role="tab" 
                    aria-controls={`${item.title}`} 
                  aria-selected="true">{item.title}</a>
                );
              })}

            </div>
          </div>
          <div className="col-sm-10">
            <div className="tab-content" id="v-pills-tabContent">
            {this.urls.map(item => {
              return (
                  <div className={item.active ? "tab-pane fade show active" : "tab-pane fade show"} 
                    id={item.title} role="tabpanel" 
                    key={item.title}
                    aria-labelledby={`${item.title}-tab`}>
                    <div className="card text-center">
                      <div className="d-flex justify-content-center align-items-center-center">
                        <img src={item.url} alt="youtube thumbnail" className="img-thumbnail"/>
                      </div>
                      <div className="card-footer">
                        <DownloadImgBtn imgUrl={item.url} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
