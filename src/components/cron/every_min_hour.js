import React, { Component } from 'react'
// const cronTime = require('crontab-time-generator');
import { EveryMinHourTypeData } from '../../data/cron_constants'

export default class EveryMinHour extends Component {
  constructor(props) {
    super(props);

    this.data = EveryMinHourTypeData;
    
    this.state = {
      config: this.data[this.props.type],
      value: 1, //default value
      maxNumber: this.data[this.props.type].maxNumber,
      name: this.data[this.props.type].defaultName,
      expr: this.data[this.props.type].expr
    };
  }

  render() {
    return (
      <>
      <div className="form-group row">
        <label className="col-sm-2">{this.state.config.preLabel}</label>
        <div className="col-sm-3">
          {this.state.config.widgetType === 'text' &&
            <input type="form-text text" className="form-control" 
              value={this.state.value}
              onChange={this.handleChange}/>
          }
          {this.state.config.widgetType === 'options' &&
            <select className="form-control"
              onBlur={this.handleWeekdayChange}>
              {this.state.config.options.map((item, idx) => {
                return (
                  <option key={idx} value={item.dayNum}>{item.name}</option>
                );
              })}
            </select>
          }
        </div>
        <label className="col-sm-2">{this.state.config.postLabel}</label>
        <div className="col-sm-2">
          <button type="button" className="btn btn-primary text-right"
            onClick={() => {this.props.setItem({
              name: this.state.name,
              expr: this.state.expr
            })}}>
            Evaluate
          </button>
        </div>
      </div>
      </>
    )
  }

  handleWeekdayChange = e => {
    const dayNum = parseInt(e.target.value);
    let selectedOption = null;
    for (let i = 0; i < this.state.config.options.length; i++) {
      if (this.state.config.options[i].dayNum === dayNum) {
        selectedOption = this.state.config.options[i];
      }
    }
    this.setState({
      value: e.target.value,
      name: this.state.config.preLabel + ' ' + e.target.value + ' ' + this.state.config.postLabel,
      expr: selectedOption.func()
    });
  }
  handleChange = e => {
    if (e.target.value === '') {
      this.setState({value: e.target.value});
      return;
    }
    if (isNaN(e.target.value) || e.target.value >= this.state.maxNumber) {
      console.log(`Enter a valid number from 0-${this.state.maxNumber-1}`);
      return;
    }
    const correctedValue = e.target.value % this.state.maxNumber
    this.setState({
      value: correctedValue,
      name: this.state.config.preLabel + ' ' + correctedValue + ' ' + this.state.config.postLabel,
      expr: this.state.config.calculate(correctedValue)
    });
  };
}
