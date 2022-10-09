import {Component} from '@angular/core';

@Component({
  selector: 'app-night-mode',
  templateUrl: '../../tpl/night-mode.html',
  styleUrls: ['../../assets/styles/2-components/night-mode.scss']
})
export class NightModeComponent {

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

  ngOnInit(): void {
  }

}
