import React, { Component } from 'react'

export default class CronExample extends Component {
  render() {
    return (
      <small className="form-text text-muted">
        <div className="dropdown">
          <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Example Expressions
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            {this.props.example_exprs.map((item, idx) => {
              return (
              <button type="button" className="dropdown-item" 
                key={idx}
                onClick={() => {this.props.setItem(item)}}>
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </small>
    )
  }
}
