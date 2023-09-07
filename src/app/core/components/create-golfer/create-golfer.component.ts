import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GolfCourse } from '../../models/golfCourse';
import { Golfer } from '../../models/golfer';
import { GolferRequest } from '../../models/golfer.request';
import { GolferService } from '../../services/golfer.service';
import { GolfCourseService } from '../../services/golf-course.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-golfer',
  templateUrl: './create-golfer.component.html',
  styleUrls: ['./create-golfer.component.css'],
  providers: [MessageService]
})
export class CreateGolferComponent {

  golfer: Golfer = {
    id: "",
    name: "",
    handicapIndex: 0,
    homeCourse: "",
    scores: [],
  };

  
  golfCourses: GolfCourse[] | undefined;

  // Used for dropdown on selecting home course
  // Must be a string
  golfCourseNames: string[] | undefined;

  selectedGolfCourse: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private golferService: GolferService, private messageService: MessageService, private golfCourseService: GolfCourseService) {

  }

  ngOnInit(): void {    
    this.golfCourseService.getGolfCourseNames((golfCourseNames: string[]) => this.golfCourseNames = golfCourseNames);
  }


  onSubmit() {
    if((document.getElementById("name") as HTMLInputElement).value == "" || (document.getElementById("homeCourse") as HTMLInputElement).value == "-- Select --"){
      this.messageService.add({ key: 'br', severity: 'error', summary: 'CANNOT CREATE: MISSING FIELDS', detail: 'Please give each field a value.' });
    } else{
      const golferRequest: GolferRequest = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        homeCourse: (document.getElementById("homeCourse") as HTMLInputElement).value,
      };
      let status = this.golferService.createGolfer(golferRequest, () => {
        console.log("Success create a Golfer");
      });    
      this.router.navigate(['/']);
    }
  }

  onCancel(){
    history.back();
  }
}
