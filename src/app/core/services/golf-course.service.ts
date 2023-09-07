import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';
import { GolfCourse } from '../models/golfCourse';
import { GolfCourseRequest } from '../models/golfCourse.request';

@Injectable({
  providedIn: 'root'
})
export class GolfCourseService {
  readonly sandyApiUrl = environments.sandyApiUrl;

  constructor(private http: HttpClient) 
  {

  }

  public getGolfCourses(callback: (golfCourses: GolfCourse[]) => void): void {
    this.http.get<GolfCourse[]>(this.sandyApiUrl + "/GolfCourses").
      subscribe((golfCourses: GolfCourse[]) => {
        callback(golfCourses);
      });
  }

  public getGolfCourseById(id : string) {
    return this.http.get<GolfCourse>(this.sandyApiUrl + "/GolfCourses/" + id);
  };

  public getGolfCourseByName(name : string) {
    return this.http.get<GolfCourse>(this.sandyApiUrl + "/GolfCourses/" + name);
  };

  // public getGolfCourseByName(name : string, callback: (golfCourse: GolfCourse) => void): void {
  //   this.http.get<GolfCourse>(this.sandyApiUrl + "/GolfCourses/" + name).
  //     subscribe((golfCourse: GolfCourse) => {
  //       callback(golfCourse);
  //     });
  // }

  public deleteGolfCourse(id: string): Observable<void> {
    return this.http.delete<void>(this.sandyApiUrl + "/GolfCourses/" + id);
  }
  
  public updateGolfCourse(id: string, golfCourse: GolfCourseRequest): Observable<GolfCourse> {
    return this.http.put<GolfCourse>(this.sandyApiUrl + "/GolfCourses/" + id, golfCourse);
  }

  public createGolfCourse(golfCourse: GolfCourseRequest, callback:() => void): void {
    this.http.post<GolfCourse>(this.sandyApiUrl + "/GolfCourses", golfCourse).
      subscribe((data) => {
        callback();
      });
  }

  public getGolfCourseNames(callback: (golfCourseNames: string[]) => void): void {
    this.http.get<string[]>(this.sandyApiUrl + "/GolfCourses/names").
      subscribe((golfCourseNames: string[]) => {
        callback(golfCourseNames);
      });
  }
}
