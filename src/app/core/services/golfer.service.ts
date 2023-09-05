import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../environments/environments';
import { Golfer } from '../models/golfer';

@Injectable({
  providedIn: 'root'
})
export class GolferService {

  readonly sandyApiUrl = environments.sandyApiUrl;

  constructor(private http: HttpClient) { }

  public getAllGolfers(callback: (golfers: Golfer[]) => void): void {
    this.http.get<Golfer[]>(this.sandyApiUrl + "/Golfers").
      subscribe((golfers: Golfer[]) => {
        callback(golfers);
      });
  }
}
