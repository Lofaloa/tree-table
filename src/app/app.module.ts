import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataComponent } from './components/data/data.component';
import { GroupComponent } from './components/group/group.component';
import {MatTableModule} from "@angular/material/table";
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    GroupComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
