import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Create',
        icon: 'pi pi-plus',
        items: [
          {
            label: 'Golfer',
            icon: 'pi pi-user',
            routerLink: 'createGolfer',
          },
          {
            label: 'Golf Course',
            icon: 'pi pi-flag',
            routerLink: 'createGolfCourse',
          }
        ],
      },
    ];
  }
}
