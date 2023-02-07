import { Component, NgZone } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-main';
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone; // store reference on window to be used by element during its bootstrap
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    registerMicroApps([
      {
        name: 'angular',
        entry: '//localhost:4201',
        container: '#subapp',
        activeRule: '/angular',
      },
    ]);
    // 启动 qiankun
    start();
  }
}
