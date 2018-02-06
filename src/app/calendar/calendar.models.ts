export class CalendarEvents {
    kind: string;
    etag: string;
    summary: string;
    updated: Date;
    timeZone: string;
    accessRole: string;
    defaultReminders: string[];
    nextSyncToken: string;
    items: CalendarItem[];

    constructor() {
        this.defaultReminders = new Array<string>();
        this.items = new Array<CalendarItem>();
    }
}

export class CalendarItem {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    created: Date;
    updated: Date;
    summary: string;
    discription: string;
    location: string;
    creator: Creator;
    organizer: Organizer;
    attachments: Attachment[];
    start: Date;
    end: Date;
    iCalUID: string;
    sequence: number;

    constructor() {
        this.attachments = new Array<Attachment>();
    }
}

export class Creator {
    email: string;
    displayName: string;

    constructor(email: string, name: string) {
        this.email = email;
        this.displayName = name;
    }
}

export class Organizer {
    email: string;
    displayName: string;
    self: boolean;

    constructor(email: string, name: string, self: boolean) {
        this.email = email;
        this.displayName = name;
        this.self = self;
    }
}

export class Attachment {
    fileUrl: string;
    title: string;
    iconLink: string;
    fileId: string;
}
