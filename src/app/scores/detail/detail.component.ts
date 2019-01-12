import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { GoogleAnalyticsEventsService } from '../../core/google-analytics-events.service';

import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare const Flat: any;

@Component({
    selector: 'app-scores-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.css']
})

export class ScoreDetailComponent implements OnInit {
    coursesObservable: Observable<any[]>;
    trustedUrl: SafeResourceUrl;

    // tslint:disable-next-line:max-line-length
    constructor(private activatedRoute: ActivatedRoute, public googleAnalyticsEventsService: GoogleAnalyticsEventsService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        const url = `https://musescore.com/user/21840201/scores/${id}/embed`;
        this.googleAnalyticsEventsService.emitEvent('scoreDetail', 'init', 'scoreId', +id);

        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
