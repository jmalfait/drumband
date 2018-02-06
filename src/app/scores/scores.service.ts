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
        this.url = `${environment.flatUri}/users/${environment.flatUser}/scores`;
    }


    getAllScores(): Observable<Score[]> {
        return this.http.get(this.url).map((res: any) => {
            const scoreArray = new Array<Score>();
            for (const score of res) {
                scoreArray.push(new Score(score.id, score.title, score.composer));
            }
            return scoreArray;
        });
    }
}
