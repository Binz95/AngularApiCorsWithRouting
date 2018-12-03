import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'contacts',component:ContactsComponent},
      {path:'detail/:id',component: ContactDetailComponent}])
    ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
