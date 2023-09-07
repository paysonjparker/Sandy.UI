import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Golfer } from '../../models/golfer';
import { GolferService } from '../../services/golfer.service';
import { ScoreService } from '../../services/score.service';
import { Score } from '../../models/score';

@Component({
  selector: 'app-golfer',
  templateUrl: './golfer.component.html',
  styleUrls: ['./golfer.component.css'],
  providers: [ConfirmationService],
})
export class GolferComponent {
  golfer: Golfer = {
    id: "",
    name: "",
    handicapIndex: 0,
    homeCourse: "",
    scores: [],
  };

  scores!: Score[];

  constructor(private router: Router, private route: ActivatedRoute, private golferService: GolferService, private confirmationService: ConfirmationService, private scoreService: ScoreService) {

  }

  ngOnInit() {
    var id = this.route.snapshot.params['Id'];
    this.golferService.getGolferById(id).subscribe((golfer: Golfer) => this.golfer = golfer);
    this.scoreService.getScoresByGolferId(id, (scores: Score[]) => this.scores = scores);
  }

  onDeleteButtonClick() {
    this.confirmationService.confirm({
      message: 'Do you want to delete ' + this.golfer.name + '?',
      header: 'Confirm Delete',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.golferService.deleteGolfer(this.route.snapshot.params['Id']).subscribe({
          next: () => {
            this.router.navigate(['/']);
            // this.messageService.add({ severity: 'error', summary: 'Successfully deleted:', detail: this.golfCourse.name});
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }

  onEditButtonClick(){
    var id = this.route.snapshot.params['Id'];
    this.router.navigate(['editGolfer/' + id]);
  }

  onPostScoreButtonClick(){
    var id = this.route.snapshot.params['Id'];
    this.router.navigate(['addScore/' + id]);
  }

  onDeleteScore(id: string){
    var golferId = this.route.snapshot.params['Id'];

    this.confirmationService.confirm({
      message: 'Do you want to delete this score?',
      header: 'Confirm Delete',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.scoreService.deleteScore(id).subscribe({
          next: () => {
            window.location.reload();
            // this.messageService.add({ severity: 'error', summary: 'Successfully deleted:', detail: this.golfCourse.name});
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }
}
