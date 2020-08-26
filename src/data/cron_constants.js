const cronTime = require('crontab-time-generator');

const example_cron_expr = [
  {'name': 'Every Minute', expr: '* * * * *'},
  {'name': 'Every Hour', expr: '0 * * * *'},
  {'name': 'Every Day', expr: '0 0 * * *'},
  {'name': 'Every Day at 6', expr: '0 6 * * *'},
  {'name': 'Every Sunday', expr: '0 0 * * SUN'},
  {'name': 'Every Sunday at 4:30', expr: '30 4 * * SUN'},
  {'name': 'Every Weekday', expr: '0 0 * * 1-5'},
  {'name': 'Every Weekdat at 1:30', expr: '30 1 * * 1-5'},
  {'name': 'Every Weekend', expr: '0 0 * * 6,0'},
  {'name': 'Every Weekend at 1:30', expr: '30 1 * * 6,0'},
  {'name': 'Every Sunday to Thursday', expr: '0 0 * * 0-4'},
  {'name': 'Every Sunday to Thursday at 1:30', expr: '30 1 * * 0-4'},
  {'name': 'Every 5 Minute', expr: '*/5 * * * *'},
  {'name': 'Every 2 Hour', expr: '0 */2 * * *'},
  {'name': 'Every 7 days', expr: '0 0 */7 * *'},
  {'name': 'Every 7 days at 9:05', expr: '5 9 */7 * *'},
  {'name': 'Every Even Hours', expr: '0 */2 * * *'},
  {'name': 'Every Un-Even Hour', expr: '0 1-23/2 * * *'}
];

const EveryMinHourTypeData = {
  'Minute': {
    preLabel: 'Every',
    postLabel: 'Minute',
    maxNumber: 60,
    widgetType: 'text',
    defaultName: 'Every 1 Minute',
    expr: cronTime.every(1).minutes(),
    calculate: function(num) {
      return cronTime.every(num).minutes();
    }
  },
  'Hour': {
    preLabel: 'Every',
    postLabel: 'Hour',
    maxNumber: 24,
    widgetType: 'text',
    defaultName: 'Every 1 Hour',
    expr: cronTime.every(1).hours(),
    calculate: function(num) {
      return cronTime.every(num).hours();
    }
  },
  'EveryHourAt': {
    preLabel: 'Every Hour At',
    postLabel: 'Minute',
    maxNumber: 60,
    widgetType: 'text',
    defaultName: 'Every Hour at 1 Minute',
    expr: cronTime.everyHourAt(1),
    calculate: function(num) {
      return cronTime.everyHourAt(num);
    }
  },
  'EveryDayAt': {
    preLabel: 'Every Day At',
    postLabel: 'Hour',
    maxNumber: 24,
    widgetType: 'text',
    defaultName: 'Every Day at 1 Hour',
    expr: cronTime.everyDayAt(1),
    calculate: function(num) {
      return cronTime.everyDayAt(num);
    }
  },
  'EveryWeekday': {
    preLabel: 'Every',
    postLabel: '',
    maxNumber: 7,
    defaultName: 'Every Monday',
    expr: cronTime.everyMonday(),
    widgetType: 'options',

    options: [
      {dayNum: 1, name: 'Monday', func: cronTime.everyMonday},
      {dayNum: 2, name: 'Tuesday', func: cronTime.everyTuesday},
      {dayNum: 3, name: 'Wednesday', func: cronTime.everyWednesday},
      {dayNum: 4, name: 'Thursday', func: cronTime.everyThursday},
      {dayNum: 5, name: 'Friday', func: cronTime.everyFriday},
      {dayNum: 6, name: 'Saturday', func: cronTime.everySaturday},
      {dayNum: 7, name: 'Sunday', func: cronTime.everySunday}
    ]
  }
};

const EveryWeekYearMonthTypeData = {
  'EveryWeekdayAt': {
    preLabel: 'Every',
    maxNumber: 7,
    widgetType: 'options',
    defaultName: 'Every Monday at 0:0',
    expr: cronTime.everyMondayAt(0, 0),
    secondary_options: {
      hourField: {
        label: 'Hour',
        maxNumber: 24
      },
      minuteField: {
        label: 'Minute',
        maxNumber: 60
      }
    },
    options: [
      {dayNum: 1, name: 'Monday', func: cronTime.everyMondayAt},
      {dayNum: 2, name: 'Tuesday', func: cronTime.everyTuesdayAt},
      {dayNum: 3, name: 'Wednesday', func: cronTime.everyWednesdayAt},
      {dayNum: 4, name: 'Thursday', func: cronTime.everyThursdayAt},
      {dayNum: 5, name: 'Friday', func: cronTime.everyFridayAt},
      {dayNum: 6, name: 'Saturday', func: cronTime.everySaturdayAt},
      {dayNum: 7, name: 'Sunday', func: cronTime.everySundayAt}
    ]
  },
}

module.exports = { 
  example_cron_expr, 
  EveryMinHourTypeData,
  EveryWeekYearMonthTypeData
};
