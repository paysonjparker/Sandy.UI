import { Component } from '@angular/core';
import { GolferService } from '../../services/golfer.service';
import { Golfer } from '../../models/golfer';

@Component({
  selector: 'app-golfer-table',
  templateUrl: './golfer-table.component.html',
  styleUrls: ['./golfer-table.component.css']
})
export class GolferTableComponent {
  golfers!: Golfer[];

    constructor(private golferService: GolferService) {}

    ngOnInit() {
        this.golferService.getAllGolfers((golfers: Golfer[]) => this.golfers = golfers);
    }
}
