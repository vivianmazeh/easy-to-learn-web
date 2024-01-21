import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import  {WaiverComponent} from './Components/waiver/waiver.component'
import {BookPartyComponent} from './Components/book-party/book-party.component';
import {BuyTicketsComponent} from './Components/buy-tickets/buy-tickets.component';
import { PriceComponent } from './Components/price/price.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { BookPartySelectDateComponent } from './Components/book-party-select-date/book-party-select-date.component';

// sets up routes constant where you define your routes
const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'waiver', component: WaiverComponent},
  {path: 'price', component: PriceComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'book-a-party', component: BookPartyComponent},
  {path: 'select-date', component: BookPartySelectDateComponent},
  {path: 'buy-tickets', component: BuyTicketsComponent},
  {path: '', redirectTo: 'home', pathMatch : 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


