import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TranslateService } from '@ngx-translate/core'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller, public translate: TranslateService) {
    translate.addLangs(['en', 'fr'])
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {
  }

}
