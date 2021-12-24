// import {Component} from '@angular/core';

// /**
//  * @title Autosize sidenav
//  */
// @Component({
//   selector: 'sidenav',
//   templateUrl: 'sidenav.component.html',
//   styleUrls: ['sidenav.component.css'],
// })
// export class SidenavAutosizeExample {
//   showFiller = false;
// }

import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

/** @title Sidenav with custom escape and backdrop click behavior */
@Component({
  selector: 'sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
})
export class SideNavComponent {
  @ViewChild('sidenav')
    sidenav: any;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
