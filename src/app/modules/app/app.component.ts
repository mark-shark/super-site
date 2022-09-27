import {Component, Renderer2} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'super-site-app',
  templateUrl: '../../tpl/app.html',
  styleUrls: ['../../assets/styles/layout.scss']
})
export class AppComponent {
  previousUrl?: string;

  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1)
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      });
  }
}
