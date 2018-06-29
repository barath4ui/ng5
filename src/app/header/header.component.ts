import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICurrentitemData } from './headerlinks';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public header={
    "home":{
      "title": "Clean Blog",
      "subtitle": "A Clean Blog Theme by Start Bootstrap",
      "bg": {
        'background-image': 'url("assets/img/home-bg.jpg")'
      }
    },
    "about":{
      "title": "About Me",
      "subtitle": "This is what I do.",
      "bg": {
        'background-image': 'url("assets/img/about-bg.jpg")'
      }
    },
    "contact":{
      "title": "Contact Me",
      "subtitle": "Have questions? I have answers (maybe).",
      "bg": {
        'background-image': 'url("assets/img/contact-bg.jpg")'
      }
    }
  };

  
  public currentNav = "home";


  constructor(private router : Router) { }

  ngOnInit() {
     this.currentNav = ICurrentitemData[this.router.url];   
  }

}
