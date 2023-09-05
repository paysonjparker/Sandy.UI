import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Golfer } from '../../models/golfer';
import { GolferRequest } from '../../models/golfer.request';
import { GolferService } from '../../services/golfer.service';

@Component({
  selector: 'app-edit-golfer',
  templateUrl: './edit-golfer.component.html',
  styleUrls: ['./edit-golfer.component.css']
})
export class EditGolferComponent {

  golfer: Golfer = {
    id: "",
    name: "",
    handicapIndex: 0,
    homeCourse: "",
    scores: [],
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: GolferService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // this.golfCourseEditForm = this.createGolfCourseEditForm();
    var id = this.route.snapshot.params['Id'];
    this.service.getGolferById(id).subscribe((golfer: Golfer) => this.golfer = golfer);
  }

  onSubmit() {
    const golferRequest: GolferRequest = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      homeCourse: (document.getElementById("homeCourse") as HTMLInputElement).value,
    };
    this.service.updateGolfer(this.golfer.id, golferRequest).subscribe((golfer: Golfer) => this.golfer = golfer);
    this.router.navigate(['/golfer/' + this.golfer.id]);
  }

  onCancel(){
    this.router.navigate(['/golfer/' + this.route.snapshot.params['Id']]);
  }
}
