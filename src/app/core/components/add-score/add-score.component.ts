import { Component } from '@angular/core';
import { ScoreRequest } from '../../models/score.request';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Golfer } from '../../models/golfer';
import { GolferRequest } from '../../models/golfer.request';
import { GolferService } from '../../services/golfer.service';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.css']
})
export class AddScoreComponent {

  constructor(private router: Router, private route: ActivatedRoute, private service: ScoreService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {

  }

  onSubmit() {
    const scoreRequest: ScoreRequest = {
      total: (document.getElementById("total") as HTMLInputElement).valueAsNumber,
      differential: (document.getElementById("differential") as HTMLInputElement).valueAsNumber,
      golferId: this.route.snapshot.params['Id'],
    };
    let status = this.service.createScore(scoreRequest, () => {
      console.log("Success create score");
    });
    this.router.navigate(['/golfer/' + this.route.snapshot.params['Id']]);
  }

  onCancel(){
    this.router.navigate(['/golfer/' + this.route.snapshot.params['Id']]);
  }
}
