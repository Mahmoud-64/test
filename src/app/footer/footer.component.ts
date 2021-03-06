import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faGooglePlusG = faGooglePlusG;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr'])
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

}
