import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

import { Score } from './score.model';

@Injectable()
export class ScoresService {
    private url: string;

    constructor(private http: HttpClient) {
        const base_url = window.location.origin;
        this.url = `${base_url}/assets/data/scores.json`;
    }


    getAllScores(): Observable<Score[]> {
        return this.http.get(this.url).map((res: any) => {
            const scoreArray = new Array<Score>();
            for (const score of res.scores) {
                scoreArray.push(new Score(score.id, score.title, score.url));
            }
            return scoreArray;
        });
    }
}
