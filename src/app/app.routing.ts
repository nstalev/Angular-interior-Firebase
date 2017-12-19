import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { ContactsComponent } from './components/main/contacts/contacts.component';
import { PageNotFoundComponent } from './components/main/page-not-found/page-not-found.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { ForUsComponent } from './components/main/for-us/for-us.component';




export const routes : Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',    component: HomeComponent },
    { path: 'info',    component: ForUsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'cars', loadChildren: './components/cars/cars.module#CarsModule' },
    { path: '**', component: PageNotFoundComponent }
]