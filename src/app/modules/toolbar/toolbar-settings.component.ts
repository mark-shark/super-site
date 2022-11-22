import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'super-toolbar-settings',
  templateUrl: '../../tpl/toolbar-settings.html',
  styleUrls: ['../../assets/styles/3-layout/toolbar.scss']
})
export class ToolbarSettingsComponent {

  constructor(private translate: TranslateService) {
    // translate.addLangs(['cs', 'en']);
    translate.setDefaultLang('cs');
    translate.use('cs');
  }

  useLanguage(language: string): void {
    console.log(language);
    this.translate.use(language);
  }

  // User
  isAccount = false;
  toggleAccount() {
    // reverse the value of property
    this.isAccount = !this.isAccount;
  }
  toggleAccountClickedOutside() {
    this.isAccount = false;
  }

  // SupeVisor
  isSuperAccount = false;
  toggleSuperAccount() {
    // reverse the value of property
    this.isSuperAccount = !this.isSuperAccount;
  }
  toggleSuperAccountClickedOutside() {
    this.isSuperAccount = false;
  }
  // Languages
  isLanged = false;
  toggleLanguage() {
    // reverse the value of property
    this.isLanged = !this.isLanged;
  }
  toggleLanguageClickedOutside() {
    this.isLanged = false;
  }

  // Mini Basket
  isMiniBasketed = false;
  toggleMiniBasket() {
    // reverse the value of property
    this.isMiniBasketed = !this.isMiniBasketed;
  }
  toggleMiniBasketClickedOutside() {
    this.isMiniBasketed = false;
  }

  isSetted = false;
  toggleSetting() {
    // reverse the value of property
    this.isSetted = !this.isSetted;
  }
  toggleSettingClickedOutside() {
    this.isSetted = false;
  }
}
