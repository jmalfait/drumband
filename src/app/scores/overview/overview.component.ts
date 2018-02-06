import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoresService } from '../scores.service';
import { Score } from '../score.model';

@Component({
    selector: 'app-scores-overview',
    templateUrl: 'overview.component.html',
    styleUrls: ['overview.component.css']
})

export class ScoreOverviewComponent implements OnInit {
    scores: Score[];

    constructor(private scoreService: ScoresService, private router: Router) {
        this.scores = new Array<Score>();
     }

    ngOnInit() {
        this.scoreService.getAllScores().subscribe((data: Score[]) => {
            this.scores = data;
        });
    }

    onClickScoreDetail(id: string) {
        this.router.navigate([`score/${id}`]);
    }
}
