import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  playerNo: number;

  @Output()
  add: EventEmitter<void> = new EventEmitter<void> ();

  @Output()
  remove: EventEmitter<void> = new EventEmitter<void> ();

  @Output()
  start: EventEmitter<void> = new EventEmitter<void> ();

  constructor() { }

  ngOnInit() {
  }

  adding() {
    this.add.emit();
  }

  removing() {
    this.remove.emit();
  }

  starting() {
    this.start.emit();
  }
}
