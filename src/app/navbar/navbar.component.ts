import { Component } from '@angular/core';

@Component({
  selector: 'em-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public isNavbarCollapsed = true;

  constructor() { }

  public toggleNavbarCollapse() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
