import React, { Component } from 'react'

export default class YoutubeExamples extends Component {
  constructor(props) {
    super(props);
    this.links = [
      'https://www.youtube.com/watch?v=WRVsOCh907o',
      'https://www.youtube.com/watch?v=CezgTNwk1-s',
      'https://www.youtube.com/watch?v=XqZsoesa55w',
      'https://www.youtube.com/watch?v=yP8Qedl1gS0'
    ];
  }
  
  render() {
    return (
      <div className="container">
      <div className="row justify-content-md-center m-4">
        <div className="col-sm-8">
          <h2 className="text-success">Try some examples by clicking below links</h2>
          <div className="list-group">
            {this.links.map((item, idx) => {
              return (
              <button type="button" 
                className="list-group-item list-group-item-action" 
                key={idx}
                onClick={() => {this.props.handleExampleClick(item)}}>
                  {item}
                </button>
              );
            })}
        </div>
        </div>
      </div>
    </div>
    )
  }
}
