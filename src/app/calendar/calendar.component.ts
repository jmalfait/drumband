import { Component, OnInit } from '@angular/core';
import { CalendarService, CalendarEvents } from './calendar.service';
import { GoogleAnalyticsEventsService } from '../core/google-analytics-events.service';

@Component({
    selector: 'app-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css']
})

export class CalendarComponent implements OnInit {
    calendar: CalendarEvents;

    constructor(private calenderService: CalendarService, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
        // this.calendar = new CalendarEvents();
    }

    ngOnInit() {
        this.googleAnalyticsEventsService.emitEvent('calendar', 'init', '', 0);
        // this.calenderService.getCalendarEvent().subscribe(
        //     (res: CalendarEvents) => {
        //         debugger;
        //         this.calendar = res;
        // });
    }
}
