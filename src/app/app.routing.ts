import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { ContactsComponent } from './components/main/contacts/contacts.component';
import { PageNotFoundComponent } from './components/main/page-not-found/page-not-found.component';




export const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',    component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '**', component: PageNotFoundComponent }
]