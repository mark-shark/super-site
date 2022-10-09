import {Component, TemplateRef, ViewContainerRef} from '@angular/core';
import {OverlayConfig, PositionStrategy, ScrollStrategy} from "@angular/cdk/overlay";
import {TemplatePortal} from "@angular/cdk/portal";

class C {
}

@Component({
  selector: 'modal-dialog',
  templateUrl: '../../tpl/modal-dialog.html',
  styleUrls: ['../../assets/styles/2-components/modal-dialog.scss'],
})
export class ModalDialogComponent {
  backdropClass?: string[];
  hasBackdrop?: boolean; //Whether overlay will have backdrop or not.
  height?: number | string; //defines the height of overlay.
  width?: number | string; //defines the width of overlay.
   //Custom class for overlay.
  positionStrategy?: PositionStrategy; //How will the overlay be placed on screen.
  scrollStrategy?: ScrollStrategy;

  private overlay: any;
  private overlayRef: any;
  private tpl: TemplateRef<C> | undefined;
  private viewContainerRef: ViewContainerRef | undefined;

  create() {
    const overlayRef = this.overlay.create({
      height: '20vh',
      width: '80vw',
    });
  }

  openWithTemplate(tpl: TemplateRef<any>) {
    const config = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'active'],
      backdropClass: 'modal-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });
    this.overlayRef = this.overlay.create(config);
    if (this.viewContainerRef instanceof ViewContainerRef) {
      // @ts-ignore
      this.overlayRef.attach(new TemplatePortal(this.tpl, this.viewContainerRef));
    }
  }

  closeModal(){
    this.overlayRef.dispose();
  }

}
