import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-event-section',
  templateUrl: './event-section.component.html',
  styleUrls: ['./event-section.component.scss']
})
export class EventSectionComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;

  constructor() { }

  ngOnInit() {
  }

}
