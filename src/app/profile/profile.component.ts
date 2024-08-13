import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, map, switchMap } from 'rxjs';

import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  follower: any;

  constructor(private router: Router, private route : ActivatedRoute, private service: FollowerService) { }

  ngOnInit() {

    combineLatest([
        this.route.paramMap,
        this.route.queryParamMap
    ])
      .subscribe( combined => {
        let username = combined[0].get('username');
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        let order = combined[1].get('order');
        console.log(username+" "+id+" "+page+" "+order);
        this.getFollower(id);
      });
  }

  getFollower(id) {
    console.log(id);
    this.service.get(id)
    .subscribe(
      follower => this.follower = follower);
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    });
  }
}
