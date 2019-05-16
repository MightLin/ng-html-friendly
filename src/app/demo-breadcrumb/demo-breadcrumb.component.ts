import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, ActivationEnd, ActivatedRouteSnapshot, Event } from '@angular/router';
// import { filter, map, takeWhile, tap, first } from 'rxjs/internal/operators';
// import { Observable, of, from, Subject } from 'rxjs';
import { BreadcrumbService } from 'projects/ng-html-friendly/src';

@Component({
  selector: 'app-demo-breadcrumb',
  templateUrl: './demo-breadcrumb.component.html',
  styleUrls: ['./demo-breadcrumb.component.css']
})
export class DemoBreadcrumbComponent implements OnInit {

  title: string = '頁面內Title';

  constructor(
    router: Router,
    breadcrumbService: BreadcrumbService,
  ) {
    // this.getBreadcrumbByEvent(this.router.events).subscribe(br => {
    //   console.log(br);
    // });
    // console.log(this.activatedRoute);
    // console.log(this.router);

    breadcrumbService.getBreadcrumb(router.events).subscribe(br => {
      console.log(br);
    });

  }

  // getBreadcrumbByEvent(events: Observable<Event>): Observable<{
  //   path: string,
  //   breadcrumb: string,
  //   snapshot: ActivatedRouteSnapshot,
  //   url: string,
  // }> {
  //   return Observable.create((ob) => {
  //     let arr: ActivatedRouteSnapshot[] = [];
  //     events.pipe(
  //       takeWhile((e) => !(e instanceof NavigationEnd)),
  //       filter(event => event instanceof ActivationEnd),
  //       tap((e) => console.log(e)),
  //       map((e) => (e as ActivationEnd).snapshot),
  //     ).subscribe(breadcrumb => {
  //       arr.push(breadcrumb);
  //     }, null, () => {
  //       arr = arr.reverse();
  //       arr.reduce((parent, snap) => {
  //         let ans;
  //         if (parent) {
  //           ans = {
  //             path: snap.url[0].path,
  //             breadcrumb: snap.data.breadcrumb,
  //             snapshot: snap,
  //             url: parent.url + '/' + snap.url[0].path
  //           };
  //         } else {
  //           ans = {
  //             path: snap.url[0].path,
  //             breadcrumb: snap.data.breadcrumb,
  //             snapshot: snap,
  //             url: snap.url[0].path,
  //           };
  //         }
  //         ob.next(ans);
  //         return ans;
  //       }, null);
  //       ob.complete();
  //     });
  //   });
  // }


  // getBreadcrumbByActivatedRouteSnapshot(events: Observable<Event>): Observable<{
  //   path: string,
  //   breadcrumb: string,
  //   snapshot: ActivatedRouteSnapshot,
  //   url: string,
  // }> {
  //   return Observable.create((ob) => {
  //     events.pipe(
  //       takeWhile((e) => !(e instanceof NavigationEnd)),
  //       filter(event => event instanceof ActivationEnd),
  //       map((e) => (e as ActivationEnd).snapshot),
  //       // tap((e) => this._getBreadcrumbByActivatedRouteSnapshot(ob, e)),
  //       first(),
  //     ).subscribe(e => {
  //       this._getBreadcrumbByActivatedRouteSnapshot(ob, e);
  //     });
  //   });
  // }

  // private _getBreadcrumbByActivatedRouteSnapshot(ob: Subject<any>, snap: ActivatedRouteSnapshot): any {
  //   console.log(snap);
  //   if (snap.parent.url.length == 0) {
  //     console.log(snap);
  //     const r = {
  //       path: snap.url[0].path,
  //       breadcrumb: snap.data.breadcrumb,
  //       snapshot: snap,
  //       url: snap.url[0].path,
  //     };
  //     ob.next(r);
  //     return r;
  //   }
  //   const parent = this._getBreadcrumbByActivatedRouteSnapshot(ob, snap.parent);
  //   const r = {
  //     path: snap.url[0].path,
  //     breadcrumb: snap.data.breadcrumb,
  //     snapshot: snap,
  //     url: parent.url + '/' + snap.url[0].path
  //   };
  //   ob.next(r);
  //   return r;
  // }

  ngOnInit() {
    // console.log(this.activatedRoute);
    // console.log(this.router);

  }


}
