import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GolfCourse } from '../../models/golfCourse';
import { GolfCourseRequest } from '../../models/golfCourse.request';
import { GolfCourseService } from '../../services/golf-course.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-golf-course',
  templateUrl: './create-golf-course.component.html',
  styleUrls: ['./create-golf-course.component.css'],
  providers: [MessageService]
})
export class CreateGolfCourseComponent {

  golfCourse: GolfCourse = {
    id: "",
    name: "",
    location: "",
    slopeRating: 0,
    courseRating: 0,
    yardage: 0,
    par: 0
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: GolfCourseService, private messageService: MessageService) {

  }


  onSubmit() {
    if ((document.getElementById("name") as HTMLInputElement).value == "" || (document.getElementById("location") as HTMLInputElement).value == ""
      || (document.getElementById("slopeRating") as HTMLInputElement).value == "" || (document.getElementById("courseRating") as HTMLInputElement).value == ""
      || (document.getElementById("yardage") as HTMLInputElement).value == "" || (document.getElementById("par") as HTMLInputElement).value == "") {

      this.messageService.add({ key: 'br', severity: 'error', summary: 'CANNOT CREATE: MISSING FIELDS', detail: 'Please give each field a value.' });

    } else {
      const golfCourseRequest: GolfCourseRequest = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        location: (document.getElementById("location") as HTMLInputElement).value,
        slopeRating: Number((document.getElementById("slopeRating") as HTMLInputElement).value),
        courseRating: Number((document.getElementById("courseRating") as HTMLInputElement).value),
        yardage: Number((document.getElementById("yardage") as HTMLInputElement).value),
        par: Number((document.getElementById("par") as HTMLInputElement).value),
      };
      let status = this.service.createGolfCourse(golfCourseRequest, () => {
        console.log("Success create a Golf Course");
      });
      this.router.navigate(['/']);
    }
  }

  onCancel() {
    history.back();
  }
}
