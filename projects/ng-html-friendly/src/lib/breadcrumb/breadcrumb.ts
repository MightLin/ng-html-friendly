import { ActivatedRouteSnapshot } from '@angular/router';

export interface Breadcrumb {
  path: string;
  breadcrumb: string;
  snapshot: ActivatedRouteSnapshot;
  url: string;
}
