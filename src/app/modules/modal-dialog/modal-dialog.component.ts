import {Component} from '@angular/core';

@Component({
  selector: 'super-modal',
  templateUrl: '../../tpl/modal-dialog.html',
  styleUrls: ['../../assets/styles/2-components/modal-dialog.scss'],
})
export class ModalDialogComponent {
  show = false;
}
