import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title: string = 'Location';
  lat: number = 42.221248;
  lng: number = 24.727603;
  
  constructor(private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '456717764667069',
      xfbml: true,
      version: 'v2.11'
    };

    fb.init(initParams);

  }

  ngOnInit() {
  }

}
