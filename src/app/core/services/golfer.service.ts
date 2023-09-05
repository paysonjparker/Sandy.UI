import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../environments/environments';
import { Golfer } from '../models/golfer';
import { Observable } from 'rxjs';
import { GolferRequest } from '../models/golfer.request';

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
  public getGolferById(id : string) {
    return this.http.get<Golfer>(this.sandyApiUrl + "/Golfers/" + id);
  };

  public deleteGolfer(id: string): Observable<void> {
    return this.http.delete<void>(this.sandyApiUrl + "/Golfers/" + id);
  }
  
  public updateGolfer(id: string, golfer: GolferRequest): Observable<Golfer> {
    return this.http.put<Golfer>(this.sandyApiUrl + "/Golfers/" + id, golfer);
  }

  public createGolfer(golfer: GolferRequest, callback:() => void): void {
    this.http.post<Golfer>(this.sandyApiUrl + "/Golfers", golfer).
      subscribe((data) => {
        callback();
      });
  }
}
