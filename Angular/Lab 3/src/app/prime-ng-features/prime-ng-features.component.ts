import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-prime-ng-features',
  templateUrl: './prime-ng-features.component.html',
  styleUrls: ['./prime-ng-features.component.css'],
})
export class PrimeNgFeaturesComponent implements OnInit {
  constructor() {}
  items: MenuItem[] = [];
  knobValue = 20;
  ngOnInit(): void {
    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
    ];
  }
}
