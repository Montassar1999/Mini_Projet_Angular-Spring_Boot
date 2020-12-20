import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloppeursComponent } from './developpeurs/developpeurs.component';
import { AddDeveloppeurComponent } from './add-developpeur/add-developpeur.component';
import { FormsModule } from '@angular/forms';
import { UpdateDeveloppeurComponent } from './update-developpeur/update-developpeur.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DeveloppeursComponent,
    AddDeveloppeurComponent,
    UpdateDeveloppeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
