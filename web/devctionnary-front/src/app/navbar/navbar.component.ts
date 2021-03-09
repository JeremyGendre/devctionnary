import { AuthenticatedStoreService } from './../services/stores/authenticated-store.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public authenticatedStoreService: AuthenticatedStoreService
  ) { }

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.authenticatedStoreService.updateAuthenticated();
  }
}
