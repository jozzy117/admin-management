import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User_Data } from './shared/components/data.ts/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Admin-Management';
  users = User_Data;
  public currentRoute!: string;
  private subscription: Subscription = new Subscription();

  constructor(private router: Router){
    this.subscription.add(
      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe(x => this.currentRoute = x.url)
    )
  }
  ngOnInit(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
