import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';
import { faShoppingCart, faSignOutAlt, faSign, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() button = '';
  @Input() btnlogout = '';
  @Input() count = '0';
  @Input() btnlogin= '';
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void { }
  public onLogout = () => {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }

  faShoppingCart = faShoppingCart;
  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;
}
