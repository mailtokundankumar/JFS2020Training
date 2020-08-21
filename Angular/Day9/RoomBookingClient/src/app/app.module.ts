import { RoomDetailComponent } from './admin/rooms/room-detail/room-detail.component';
//import { AppRoutingModule } from './app.routing.module';
import { roomBookingroutes } from './rb-routes';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RoomsComponent } from './admin/rooms/rooms.component';
import { UsersComponent } from './admin/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalendarComponent,
    RoomsComponent,
    UsersComponent,
    PageNotFoundComponent,
    RoomDetailComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    //Routes Consifuration is getting registered
    //in the RouterModule
    RouterModule.forRoot(roomBookingroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
