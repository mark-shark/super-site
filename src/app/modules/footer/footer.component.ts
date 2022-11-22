import { Component } from '@angular/core';

@Component({
  selector: 'super-footer',
  templateUrl: '../../tpl/footer.html',
  styleUrls: ['../../assets/styles/3-layout/footer.scss']
})
export class FooterComponent {
}

@Component({
  selector: 'date-pipe',
  template: `<p>MIT - <a routerLink="/login">©</a>{{today | date:'y'}}</p>`,
  styleUrls: ['../../assets/styles/3-layout/footer.scss']
})
// Get the current date and time as a date-time value.
export class DatePipeComponent {
  today: number = Date.now();
}
