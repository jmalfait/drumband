import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

declare const Flat: any;

@Component({
    selector: 'app-scores-detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.css']
})

export class ScoreDetailComponent implements OnInit {
    coursesObservable: Observable<any[]>;

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');

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
