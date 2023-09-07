import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ScoreRequest } from '../../models/score.request';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Golfer } from '../../models/golfer';
import { GolferRequest } from '../../models/golfer.request';
import { GolferService } from '../../services/golfer.service';
import { ScoreService } from '../../services/score.service';
import { GolfCourseService } from '../../services/golf-course.service';
import { MessageService } from 'primeng/api';
import { GolfCourse } from '../../models/golfCourse';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.css'],
  providers: [MessageService]
})
export class AddScoreComponent{
  
  golfCourses: GolfCourse[] | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private service: ScoreService, private messageService: MessageService, private golfCourseService: GolfCourseService) {

  }

  ngOnInit() {
    this.golfCourseService.getGolfCourses((golfCourses: GolfCourse[]) => this.golfCourses = golfCourses);
  }

  onSubmit() {
    if((document.getElementById("golfCourse") as HTMLInputElement).value != "-- Select --"){
      const scoreRequest: ScoreRequest = {
        total: (document.getElementById("total") as HTMLInputElement).valueAsNumber,
        differential: this.onGolfCourseSelection((document.getElementById("total") as HTMLInputElement).valueAsNumber),
        golferId: this.route.snapshot.params['Id'],
      };
      let status = this.service.createScore(scoreRequest, () => {
        console.log("Success create score");
      });
      this.router.navigate(['/golfer/' + this.route.snapshot.params['Id']]);
    } else{
      this.messageService.add({ key: 'br', severity: 'error', summary: 'Error', detail: 'Please select a golf course.' });
    }
  }

  onCancel(){
    this.router.navigate(['/golfer/' + this.route.snapshot.params['Id']]);
  }

  onGolfCourseSelection(score: number) : number{
    var differential = 0;

    var golfCourseStats = (document.getElementById("golfCourse") as HTMLInputElement).value;
    var golfCourseStatsArr = golfCourseStats.split(",");
    var slopeRating = Number(golfCourseStatsArr[0]);  
    var courseRating = Number(golfCourseStatsArr[1]);  

    differential = ((113 / slopeRating) * (score - courseRating));
    differential = Math.round(differential * 10) / 10

    console.log(courseRating);
    console.log(slopeRating);

    return differential;
  }
}
