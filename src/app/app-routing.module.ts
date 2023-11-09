import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ServicesComponent } from './services/services.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent},
  { path: 'destinations',component: DestinationsComponent },
  { path: 'services',component: ServicesComponent },
  { path: 'articles',component: ArticlesComponent },
  { path: 'contact' , component: ContactComponent},
  { path: 'faq' , component: FaqComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
