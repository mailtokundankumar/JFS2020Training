import { Room } from './../../../model/room';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {


  @Input()
  room: Room;
  constructor() { }

  ngOnInit(): void {
  }

}
