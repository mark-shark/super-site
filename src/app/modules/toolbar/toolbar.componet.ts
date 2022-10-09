import {Component} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: '../../tpl/toolbar.html',
  styleUrls: ['../../assets/styles/3-layout/toolbar.scss']
})
export class ToolbarComponent {

  title = 'SuperSite';

  ngOnInit(): void {
    this.openNavigation();
  }

  bodyClass?: string;

  open_nav: boolean = true;
  openNavigation() {
    const bodyElement = document.body;

    if (bodyElement) {
      this.open_nav = !this.open_nav;
      const nextClass = !this.open_nav ? 'open-nav' : 'close-nav';
      const activeClass = this.open_nav ? 'open-nav' : 'close-nav';

      bodyElement.classList.remove(nextClass);
      bodyElement.classList.add(activeClass);

      this.bodyClass = activeClass;
    }
  }
}
