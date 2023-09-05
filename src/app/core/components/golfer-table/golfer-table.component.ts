import { Component } from '@angular/core';
import { GolferService } from '../../services/golfer.service';
import { Golfer } from '../../models/golfer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-golfer-table',
  templateUrl: './golfer-table.component.html',
  styleUrls: ['./golfer-table.component.css']
})
export class GolferTableComponent {

  selectedGolfer!: any;

  golfers!: Golfer[];

    constructor(private router: Router, private golferService: GolferService) {}

    ngOnInit() {
        this.golferService.getAllGolfers((golfers: Golfer[]) => this.golfers = golfers);
    }

    onSelectGolfer(golferId: string){
      this.router.navigate(['/golfer/' + golferId]);
    }
}
