import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { GoogleAnalyticsEventsService } from '../../core/google-analytics-events.service';

import { environment } from '../../../environments/environment';

declare const Flat: any;

@Component({
    selector: 'app-scores-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.css']
})

export class ScoreDetailComponent implements OnInit {
    coursesObservable: Observable<any[]>;

    constructor(private activatedRoute: ActivatedRoute, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.googleAnalyticsEventsService.emitEvent('scoreDetail', 'init', 'scoreId', +id);
        // this.coursesObservable = this.getCourses('/scores');
        const container = document.getElementById('embed-container');
        const embed = new Flat.Embed(container, {
            score: id,
            width: '100%',
            height: '100%',
            embedParams: {
              appId: environment.flatAppId,
              controlsFloating: false
            }
          });
    }
}
