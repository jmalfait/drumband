import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { CalendarEvents, CalendarItem, Creator, Organizer, Attachment } from './calendar.models';
import { attachEmbeddedView } from '@angular/core/src/view/view_attach';

@Injectable()
export class CalendarService {
    private url: string;

    constructor(private http: HttpClient) {
        this.url = 'https://www.googleapis.com/calendar/v3/calendars/' + environment.calendarId + '/events?key=' + environment.calendarApiKey; 
    }

    getCalendarEvent() {
        return this.http.get(this.url)
            .map((res: any) => {
                const events = new CalendarEvents();
                events.kind = res.kind;
                events.etag = res.etag;
                events.summary = res.summary;
                events.updated = res.updated;
                events.timeZone = res.timeZone;
                events.accessRole = res.accessRole;
                events.defaultReminders = res.defaultReminders;
                events.nextSyncToken = res.nextSyncToken;

                for (const item of res.items) {
                    const i = new CalendarItem();
                    i.kind = item.kind;
                    i.etag = item.etag;
                    i.id = item.id;
                    i.status = item.status;
                    i.htmlLink = item.htmlLink;
                    i.created = item.created;
                    i.updated = item.updated;
                    i.summary = item.summary;
                    i.location = item.location;
                    i.htmlLink = item.htmlLink;
                    i.creator = new Creator(item.creator.email, item.creator.displayName);
                    i.organizer = new Organizer(item.organizer.email, item.organizer.displayName, item.organizer.self);
                    i.start = item.start;
                    i.end = item.end;
                    i.iCalUID = item.iCalUID;
                    i.sequence = item.sequence;

                    for (const a of item.attachments) {
                        const attachment = new Attachment();
                        attachment.fileUrl = this.buildPublicUrlFromCalendatAttachmentFile(a.fileUrl);
                        attachment.title = a.title;
                        attachment.iconLink = a.iconLink;
                        attachment.fileId = a.fileId;
                        i.attachments.push(attachment);
                    }

                    events.items.push(i);
                }

                return events;
            });
    }

    private buildPublicUrlFromCalendatAttachmentFile(url: string): string {
        const id = url.split('https://drive.google.com/file/d/').pop().split('/').shift();
        return `https://docs.google.com/uc?id=${id}`;
    }

}

export { CalendarEvents, CalendarItem, Creator, Organizer } from './calendar.models';
