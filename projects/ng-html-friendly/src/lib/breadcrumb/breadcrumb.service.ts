import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NavigationEnd, ActivationEnd, ActivatedRouteSnapshot, Event } from '@angular/router';
import { takeWhile, filter, tap, map, first } from 'rxjs/internal/operators';
import { Breadcrumb } from './breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  constructor() { }

  getBreadcrumb(routerEvents: Observable<Event>): Observable<Breadcrumb> {
    return this.getBreadcrumbByActivatedRouteSnapshot(routerEvents);
  }


  private getBreadcrumbByEvent(events: Observable<Event>): Observable<Breadcrumb> {
    return Observable.create((ob) => {
      let arr: ActivatedRouteSnapshot[] = [];
      events.pipe(
        takeWhile((e) => !(e instanceof NavigationEnd)),
        filter(event => event instanceof ActivationEnd),
        // tap((e) => console.log(e)),
        map((e) => (e as ActivationEnd).snapshot),
      ).subscribe(breadcrumb => {
        arr.push(breadcrumb);
      }, null, () => {
        arr = arr.reverse();
        arr.reduce((parent, snap) => {
          let ans;
          if (parent) {
            ans = {
              path: snap.url[0].path,
              breadcrumb: snap.data.breadcrumb,
              snapshot: snap,
              url: parent.url + '/' + snap.url[0].path
            };
          } else {
            ans = {
              path: snap.url[0].path,
              breadcrumb: snap.data.breadcrumb,
              snapshot: snap,
              url: snap.url[0].path,
            };
          }
          ob.next(ans);
          return ans;
        }, null);
        ob.complete();
      });
    });
  }


  private getBreadcrumbByActivatedRouteSnapshot(events: Observable<Event>): Observable<Breadcrumb> {
    return Observable.create((ob) => {
      events.pipe(
        takeWhile((e) => !(e instanceof NavigationEnd)),
        filter(event => event instanceof ActivationEnd),
        map((e) => (e as ActivationEnd).snapshot),
        // tap((e) => this._getBreadcrumbByActivatedRouteSnapshot(ob, e)),
        first(),
      ).subscribe(e => {
        this._getBreadcrumbByActivatedRouteSnapshot(ob, e);
      });
    });
  }

  private _getBreadcrumbByActivatedRouteSnapshot(ob: Subject<Breadcrumb>, snap: ActivatedRouteSnapshot): any {
    // console.log(snap);
    if (snap.parent.url.length == 0) {
      // console.log(snap);
      const r = {
        path: snap.url[0].path,
        breadcrumb: snap.data.breadcrumb,
        snapshot: snap,
        url: snap.url[0].path,
      };
      ob.next(r);
      return r;
    }
    const parent = this._getBreadcrumbByActivatedRouteSnapshot(ob, snap.parent);
    const r = {
      path: snap.url[0].path,
      breadcrumb: snap.data.breadcrumb,
      snapshot: snap,
      url: parent.url + '/' + snap.url[0].path
    };
    ob.next(r);
    return r;
  }
}
