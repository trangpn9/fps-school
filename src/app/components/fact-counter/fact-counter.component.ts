import { Component, OnInit } from '@angular/core';
import { faUserFriends, faChild, faFootballBall } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-fact-counter',
  templateUrl: './fact-counter.component.html',
  styleUrls: ['./fact-counter.component.scss']
})
export class FactCounterComponent implements OnInit {

  faUserFriends = faUserFriends;
  faChild = faChild;
  faCalendarAlt = faCalendarAlt;
  faFootballBall = faFootballBall;

  constructor() { }

  ngOnInit() {
  }

}
