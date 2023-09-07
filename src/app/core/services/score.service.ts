import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Score } from '../models/score';
import { Observable } from 'rxjs';
import { ScoreRequest } from '../models/score.request';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  readonly sandyApiUrl = environments.sandyApiUrl;

  constructor(private http: HttpClient) { }

  public getAllScores(callback: (scores: Score[]) => void): void {
    this.http.get<Score[]>(this.sandyApiUrl + "/Scores").
      subscribe((scores: Score[]) => {
        callback(scores);
      });
  }

  public getScoresByGolferId(id : string, callback: (scores: Score[]) => void): void {
    this.http.get<Score[]>(this.sandyApiUrl + "/Scores/" + id).
      subscribe((scores: Score[]) => {
        callback(scores);
      });
  }

  public deleteScore(id: string): Observable<void> {
    return this.http.delete<void>(this.sandyApiUrl + "/Scores/" + id);
  }

  public createScore(score: ScoreRequest, callback:() => void): void {
    this.http.post<Score>(this.sandyApiUrl + "/Scores", score).
      subscribe((data) => {
        callback();
      });
  }
}

