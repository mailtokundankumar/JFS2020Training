import { Room } from './../../model/room';
import { Room } from './../../../../../rbc/src/app/model/Room';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Array<Room>;
  selectedRoom: Room;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.dataService);
    this.rooms = this.dataService.rooms;
  }

  setRoom(id: number){
    this.selectedRoom = this.rooms.find((room) => room.id === id);
    console.log(this.selectedRoom);
  }

}
