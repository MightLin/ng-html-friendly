import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ActivationEnd, ActivatedRouteSnapshot, Event } from '@angular/router';
// import { filter, map, takeWhile, tap, first } from 'rxjs/operators';
// import { Observable, of, from, Subject } from 'rxjs';
import { BreadcrumbService } from 'projects/ng-html-friendly/src';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'projects/ng-html-friendly/src/lib/breadcrumb';
import { toArray, map } from 'rxjs/operators';

@Component({
  selector: 'app-demo-breadcrumb',
  templateUrl: './demo-breadcrumb.component.html',
  styleUrls: ['./demo-breadcrumb.component.css']
})
export class DemoBreadcrumbComponent implements OnInit {


  breadcrumb: any;

  constructor(
    router: Router,
    breadcrumbService: BreadcrumbService,
  ) {
    breadcrumbService.getBreadcrumb(router.events)
      .pipe(
        map(s => {
          return {
            breadcrumb: s.breadcrumb,
            url: s.url,
            path: s.path
          }
        }),
        toArray()).subscribe(s => {
          console.log(s);
          this.breadcrumb = s
        });

  }


  ngOnInit() {
  }


}
