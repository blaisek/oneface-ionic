import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, IonRouterOutlet } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy{

  public dashboard;

  constructor(public navCtrl: NavController, public router: Router, private ionRouterOutlet: IonRouterOutlet) { }
    private routerEvents: any;
    private previousUrl: string;
    private currentUrl: string;
    public canGoBack: boolean;


  ngOnInit() {

    this.canGoBack = this.ionRouterOutlet.canGoBack();
        this.currentUrl   = this.router.url;
        this.routerEvents = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.previousUrl = this.currentUrl;
                this.currentUrl  = event.url;
            }
        });


  }

  ngOnDestroy() {
    this.routerEvents.unsubscribe();
}


  goBack() {
    this.navCtrl.back();
  }

}
