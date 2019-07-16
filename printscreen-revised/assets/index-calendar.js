$(document).ready(function () {
    $('#calendar').eCalendar({

 weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        textArrows: {previous: '<', next: '>'},
        eventTitle: 'Holidays',
        /* url: '', */
        events: [
            {title: 'Ratha Yathra', datetime: new Date(2019, 7, 15)},
            {title: 'Holiday 2', datetime: new Date(2019, 7, 14)},
            {title: 'Holiday 3', datetime: new Date(2019, 7, 10)},
			{title: 'Holiday 4', datetime: new Date(2019, 8, 10)},
        ],
		retire: [
            {title: 'Ramesh', datetime: new Date(2019, 7, 16)},
            {title: 'Suresh', datetime: new Date(2019, 7, 19)},
            {title: 'Raj Ram Mohan Roy', datetime: new Date(2019, 7, 12)},
			{title: 'Ramana', datetime: new Date(2019, 8, 01)},
        ]});
});
