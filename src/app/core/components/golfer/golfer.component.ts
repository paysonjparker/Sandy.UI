import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Golfer } from '../../models/golfer';
import { GolferService } from '../../services/golfer.service';

@Component({
  selector: 'app-golfer',
  templateUrl: './golfer.component.html',
  styleUrls: ['./golfer.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class GolferComponent {
  golfer: Golfer = {
    id: "",
    name: "",
    handicapIndex: 0,
    homeCourse: "",
    scores: [],
  };

  constructor(private router: Router, private route: ActivatedRoute, private golferService: GolferService, private confirmationService: ConfirmationService, private messageService: MessageService) {

  }

  ngOnInit() {
    var id = this.route.snapshot.params['Id'];
    this.golferService.getGolferById(id).subscribe((golfer: Golfer) => this.golfer = golfer);
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
    alert("You clicked the post score button")
  }
}
