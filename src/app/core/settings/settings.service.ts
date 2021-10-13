import { Injectable } from '@angular/core';

// Configuration
import { Configuration } from './../../routes/configuration/configuration/configuration';

declare var $: any;

@Injectable()
export class SettingsService {
  public configuration: Configuration;
  public user: any;
  public app: any;
  public layout: any;

  constructor() {
    this.configuration = new Configuration();

    // User Settings
    // -----------------------------------
    this.user = {
        name: this.configuration.authors,
        job: this.configuration.career,
        picture: ''
    };

    // App Settings
    // -----------------------------------
    this.app = {
        name: this.configuration.name,
        description: this.configuration.description,
        year: this.configuration.dateCreation
    };

    // Layout Settings
    // -----------------------------------
    this.layout = {
        isFixed: true,
        isCollapsed: false,
        isBoxed: false,
        isRTL: false,
        horizontal: false,
        isFloat: false,
        asideHover: false,
        theme: null,
        asideScrollbar: false,
        isCollapsedText: false,
        useFullLayout: false,
        hiddenFooter: false,
        offsidebarOpen: false,
        asideToggled: false,
        viewAnimation: 'ng-fadeInUp'
    };
  }

  getAppSetting(name) {
      return name ? this.app[name] : this.app;
  }

  getUserSetting(name) {
      return name ? this.user[name] : this.user;
  }

  getLayoutSetting(name) {
      return name ? this.layout[name] : this.layout;
  }

  setAppSetting(name, value) {
      if (typeof this.app[name] !== 'undefined') {
          this.app[name] = value;
      }
  }

  setUserSetting(name, value) {
      if (typeof this.user[name] !== 'undefined') {
          this.user[name] = value;
      }
  }

  setLayoutSetting(name, value) {
      if (typeof this.layout[name] !== 'undefined') {
          return this.layout[name] = value;
      }
  }

  toggleLayoutSetting(name) {
      return this.setLayoutSetting(name, !this.getLayoutSetting(name));
  }
}
