import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoresService } from '../scores.service';
import { Score } from '../score.model';
import { GoogleAnalyticsEventsService } from '../../core/google-analytics-events.service';

@Component({
    selector: 'app-scores-overview',
    templateUrl: 'overview.component.html',
    styleUrls: ['overview.component.css']
})

export class ScoreOverviewComponent implements OnInit {
    scores: Score[];

    constructor(private scoreService: ScoresService, private router: Router,
                public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
        this.scores = new Array<Score>();
     }

    ngOnInit() {
        this.googleAnalyticsEventsService.emitEvent('scoreOverview', 'init', '', 0);
        this.scoreService.getAllScores().subscribe((data: Score[]) => {
            this.scores = data;
        });
    }

    onClickScoreDetail(id: string) {
        this.router.navigate([`score/${id}`]);
    }
}
