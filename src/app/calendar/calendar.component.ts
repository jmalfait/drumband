import { Component, OnInit } from '@angular/core';
import { CalendarService, CalendarEvents } from './calendar.service';

@Component({
    selector: 'app-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css']
})

export class CalendarComponent implements OnInit {
    calendar: CalendarEvents;

    constructor(private calenderService: CalendarService) {
        this.calendar = new CalendarEvents();
    }

    ngOnInit() {
        this.calenderService.getCalendarEvent().subscribe(
            (res: CalendarEvents) => {
                this.calendar = res;
        });
    }
}
