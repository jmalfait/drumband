import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class FireBaseService {
    constructor(private httpClient: HttpClient) { }

}
