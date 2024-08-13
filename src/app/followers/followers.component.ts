import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, map, switchMap } from 'rxjs';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import { AppErrorHandler } from '../common/app-error-handler';
import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrl: './followers.component.css'
})
export class FollowersComponent {
  followers: any;

  constructor(private route: ActivatedRoute, private service: FollowerService) {}

  ngOnInit() {

    combineLatest([
        this.route.paramMap,
        this.route.queryParamMap
      ])
      .subscribe( combined => {
        console.log(combined[0])
        let id = combined[0].get('id');
        let page = combined[1].get('page');
        let order = combined[1].get('order');
        console.log(id+" "+page+" "+order)

        this.service.getAll()
          .subscribe(
            response => this.followers = response);
      });

  }

}
