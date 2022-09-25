import { Component } from '@angular/core';

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

  availableClasses: string[] = ["light", "dark"];
  currentClassIdx: number = 0;

  bodyClass: string;

  constructor() {
    this.bodyClass = this.availableClasses[this.currentClassIdx];
    this.changeBodyClass();
  }

  changeBodyClass() {
    // get html body element
    const bodyElement = document.body;

    if (bodyElement) {
      this.currentClassIdx = this.getNextClassIdx();
      const nextClass = this.availableClasses[this.currentClassIdx];
      const activeClass = this.availableClasses[this.getPrevClassIdx()];

      // remove existing class (needed if theme is being changed)
      bodyElement.classList.remove(activeClass);
      // add next theme class
      bodyElement.classList.add(nextClass);

      this.bodyClass = nextClass;
    }
  }

  getPrevClassIdx(): number {
    return this.currentClassIdx === 0
      ? this.availableClasses.length - 1
      : this.currentClassIdx - 1;
  }

  getNextClassIdx(): number {
    return this.currentClassIdx === this.availableClasses.length - 1
      ? 0
      : this.currentClassIdx + 1;
  }

  status: boolean = true;
  openNavigation() {
    const bodyElement = document.body;

    if (bodyElement) {
      this.status = !this.status;
      const nextClass = !this.status ? 'open-nav' : 'close-nav';
      const activeClass = this.status ? 'open-nav' : 'close-nav';

      bodyElement.classList.remove(nextClass);
      bodyElement.classList.add(activeClass);

      this.bodyClass = activeClass;
    }
  }

}
