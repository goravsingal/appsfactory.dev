import React, { Component } from 'react'
// const cronTime = require('crontab-time-generator');
import { EveryWeekYearMonthTypeData } from '../../data/cron_constants'

export default class EveryWeekYearMonth extends Component {
  constructor(props) {
    super(props);

    this.data = EveryWeekYearMonthTypeData;
    
    this.state = {
      config: this.data[this.props.type],
      value: 1, //default value
      maxNumber: this.data[this.props.type].maxNumber,
      name: this.data[this.props.type].defaultName,
      expr: this.data[this.props.type].expr,
      
      selectedDayOption: this.data[this.props.type].options[0],
      hourValue: 0,
      minuteValue: 0
    };
  }

  render() {
    return (
      <>
      <div className="form-group row">
        <label className="col-sm-4">{this.state.config.preLabel}</label>
        <div className="col-sm-3">
          {this.state.config.widgetType === 'text' &&
            <input type="form-text text" className="form-control" 
              value={this.state.value}
              // onChange={this.handleChange}
              />
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
      </div>
      <div className="form-group row">
        <div className="col-sm-4 text-right">At</div>
        {this.state.config.secondary_options.hourField && 
          <div className="col-sm-3">
            <input type="form-text text" className="form-control" 
              value={this.state.hourValue}
              id="hourField"
              onChange={this.handleChange}
              />
            Hour
          </div>
        }
        {/* {this.state.config.secondary_options.hourField && 
          <div className="">Hour</div>
        } */}
        {this.state.config.secondary_options.minuteField && 
          <div className="col-sm-3">
            <input type="form-text text" className="form-control" 
              value={this.state.minuteValue}
              id="minuteField"
              onChange={this.handleChange}
              />
            <div className="">Minute</div>
          </div>
        }
        {/* {this.state.config.secondary_options.minuteField && 
          <div className="">Minute</div>
        } */}
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

  buildName = (selectedOption, hourValue, minuteValue) => {
    return this.state.config.preLabel + ' ' + selectedOption.name + ' at ' + 
      hourValue + ' Hour ' + minuteValue + ' Minute';
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
      name: this.buildName(selectedOption, this.state.hourValue, this.state.MinuteValue),
      expr: selectedOption.func(this.state.hourValue, this.state.MinuteValue),
      selectedDayOption: selectedOption
    });
  }

  handleChange = e => {
    if (e.target.value === '') {
      if (e.target.id === 'hourField') {
        this.setState({hourValue: e.target.value});
      }
      else if (e.target.id === 'minuteField') {
        this.setState({minuteValue: e.target.value});
      }
      return;
    }
    const maxNumber = this.state.config.secondary_options[e.target.id].maxNumber;
    if (isNaN(e.target.value) || e.target.value >= maxNumber) {
      console.log(`Enter a valid number from 0-${maxNumber}`);
      return;
    }
    const correctedValue = e.target.value % maxNumber

    if (e.target.id === 'hourField') {
      this.setState({
        hourValue: correctedValue,
        name: this.buildName(this.state.selectedDayOption, correctedValue, this.state.minuteValue),
        expr: this.state.selectedDayOption.func(correctedValue, this.state.MinuteValue),
      });
    }
    else if (e.target.id === 'minuteField') {
      this.setState({
        minuteValue: correctedValue,
        name: this.buildName(this.state.selectedDayOption, this.state.hourValue, correctedValue),
        expr: this.state.selectedDayOption.func(this.state.hourValue, correctedValue),
      });
    }
  }
}
