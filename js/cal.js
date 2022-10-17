$(document).ready(function() {
    $('#cal-events').fullCalendar({
      
      defaultView: 'month', //Options: month, basicWeek, basicDay, agendaWeek, agendaDay
      weekends: true, // Show / hide weekends
      timeFormat: 'H:mm',
      header: { 
        left:   'prevYear, today, nextYear',
        center: 'title',
        right:  'basicDay, basicWeek, prev, month, next', //Possible Values: month, basicWeek, basicDay, agendaWeek, agendaDay, today prevYear,prev,next,nextYear
      },
      buttonIcons: {
        prev: 'left-single-arrow',
        next: 'right-single-arrow',
        prevYear: 'left-double-arrow',
        nextYear: 'right-double-arrow'
      },
      buttonText:{
        today: 'Today',
        day: 'Day',
        week: 'Week',
        month: 'Month'
      },
      events: [
          {
              id: 0, // Optional (String | Integer)
              title: 'Event 1', // Required (String | Main event title)
              allDay: false, // Optional (true | false)
              start: '2016-12-01T16:15:00', // Required (2014-11-10T10:00:00)
              end: '2016-12-01T11:15:00', // Optional (2014-11-10T10:00:00)
              url: 'https://google.co.uk', // Optional (Target URL to visit when event is clicked)
              className: '', // Optional (String | array of classes or single string class)
              editable: false, // Optional (true | false)
              startEditable: false, // Optional (true | false)
              durationEditable: false, // Optional (true | false)
              resourceEditable: false, // Optional (true | false)
              rendering: 'background', // Optional ('background' or 'inverse-background')
              overlap: false, // Optional (true | false)
              constraint: '', // Optional (String | an event ID, "businessHours", object)(Limits event dragging and resizing to certain windows of time.)
              source: '', // (A reference to the event source that this event came from.)
              color: '', // Optional (Sets an event's background and border color)
              backgroundColor: '#5AFD68', // Optional (Sets an event's background color)
              borderColor: '#5AFD68', // Optional (Sets an event's border color)
              textColor: '#090908' // Optional (Sets an event's text color)
          },
          {
              id: 1, // Optional (String | Integer)
              title: 'Event 2', // Required (String | Main event title)
              allDay: false, // Optional (true | false)
              start: '2016-12-01T09:15:00', // Required (2014-11-10T10:00:00)
              end: '2016-12-01T11:15:00', // Optional (2014-11-10T10:00:00)
              url: 'https://google.co.uk', // Optional (Target URL to visit when event is clicked)
              className: '', // Optional (String | array of classes or single string class)
              editable: false, // Optional (true | false)
              startEditable: false, // Optional (true | false)
              durationEditable: false, // Optional (true | false)
              resourceEditable: false, // Optional (true | false)
              rendering: 'background', // Optional ('background' or 'inverse-background')
              overlap: false, // Optional (true | false)
              constraint: '', // Optional (String | an event ID, "businessHours", object)(Limits event dragging and resizing to certain windows of time.)
              source: '', // (A reference to the event source that this event came from.)
              color: '', // Optional (Sets an event's background and border color)
              backgroundColor: '#5AFD68', // Optional (Sets an event's background color)
              borderColor: '#5AFD68', // Optional (Sets an event's border color)
              textColor: '#090908' // Optional (Sets an event's text color)
          },
          {
              id: 2, // Optional (String | Integer)
              title: 'Event 3', // Required (String | Main event title)
              allDay: false, // Optional (true | false)
              start: '2016-12-05T09:30:00', // Required (2014-11-10T10:00:00)
              end: '2016-12-07T17:30:00', // Optional (2014-11-10T10:00:00)
              url: 'https://google.co.uk', // Optional (Target URL to visit when event is clicked)
              className: '', // Optional (String | array of classes or single string class)
              editable: false, // Optional (true | false)
              startEditable: false, // Optional (true | false)
              durationEditable: false, // Optional (true | false)
              resourceEditable: false, // Optional (true | false)
              rendering: 'background', // Optional ('background' or 'inverse-background')
              overlap: false, // Optional (true | false)
              constraint: '', // Optional (String | an event ID, "businessHours", object)(Limits event dragging and resizing to certain windows of time.)
              source: '', // (A reference to the event source that this event came from.)
              color: '', // Optional (Sets an event's background and border color)
              backgroundColor: '#5AFD68', // Optional (Sets an event's background color)
              borderColor: '#5AFD68', // Optional (Sets an event's border color)
              textColor: '#090908' // Optional (Sets an event's text color)
          }
      ],
      businessHours: [ // specify an array instead
      { // Event 1
          dow: [ 1, 2, 3 ], // Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6
          start: '08:00', // 8am
          end: '18:00' // 6pm
      },
      { // Event 2
          dow: [ 4, 5 ], // Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6
          start: '10:00', // 10am
          end: '16:00' // 4pm
      },
      { // Event 3
          dow: [ 2, 3, 4, 5 ], // Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6
          start: '10:00', // 10am
          end: '16:00' // 4pm
      }
  ]
      
      });
  
  });
  
  
  
  
  // ### A Sample Event Object ### //
  // {
  // id: 0, // Optional (String | Integer)
  // title: 'Event 2', // Required (String | Main event title)
  // allDay: false, // Optional (true | false)
  // start: 'YYYY-MM-DDTHH:MM:SS', // Required (2014-11-10T10:00:00)
  // end: 'YYYY-MM-DDTHH:MM:SS', // Optional (2014-11-10T10:00:00)
  // url: 'http://targetURL-On-Click.com', // Optional (Target URL to visit when event is clicked)
  // className: '', // Optional (String | array of classes or single string class)
  // editable: false, // Optional (true | false)
  // startEditable: false, // Optional (true | false)
  // durationEditable: false, // Optional (true | false)
  // resourceEditable: false, // Optional (true | false)
  // rendering: 'background', // Optional ('background' or 'inverse-background')
  // overlap: false, // Optional (true | false)
  // constraint: '', // Optional (String | an event ID, "businessHours", object)(Limits event dragging and resizing to certain windows of time.)
  // source: '', // (A reference to the event source that this event came from.)
  // color: '', // Optional (Sets an event's background and border color)
  // backgroundColor: '', // Optional (Sets an event's background color)
  // borderColor: '', // Optional (Sets an event's border color)
  //  textColor: '' // Optional (Sets an event's text color)
  // },