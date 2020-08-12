import React, { Component } from 'react'
import { FaCloudDownloadAlt, FaClipboardCheck } from "react-icons/fa";

export default class DownloadButton extends Component {
  state = {
    copyBtnClicked: false
  }
  render() {
    const { imgUrl } = this.props;

    return (
      <>
        <button 
          className="btn btn-secondary btn-lg mr-2" 
          type="button"
          onClick={this.handleClipboardCopy}
          >
            <FaClipboardCheck /> {!this.state.copyBtnClicked ? 'Copy Link to Clipboard' : 'Copied to clipboard'}
        </button>
        
        <a className="btn btn-primary btn-lg" 
        target="_blank" 
        rel="noopener noreferrer"
        href={imgUrl} role="button">
        <FaCloudDownloadAlt /> Download Image
        </a>
      </>
    )
  }

  handleClipboardCopy = () => {
    navigator.clipboard.writeText(this.props.imgUrl);
    this.setState({copyBtnClicked: true});
  }
}
