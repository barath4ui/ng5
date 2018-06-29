import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  public bloglists = [
    {
      "headTitle": "Man must explore, and this is exploration at its greatest",
      "headSubtitle" : "Problems look mighty small from 150 miles up",
      "postBy": "Start Bootstrap",
      "postdate": "September 24, 2014"
    },
    {
      "headTitle": "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      "headSubtitle" : "",
      "postBy": "Start Bootstrap",
      "postdate": "September 18, 2014"
    },
    {
      "headTitle": "Science has not yet mastered prophecy",
      "headSubtitle" : "We predict too much for the next year and yet far too little for the next ten.",
      "postBy": "Start Bootstrap",
      "postdate": "August 24, 2014"
    },
    {
      "headTitle": "Failure is not an option",
      "headSubtitle" : "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
      "postBy": "Start Bootstrap",
      "postdate": "July 8, 2014"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
