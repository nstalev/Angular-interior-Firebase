import { CarListComponent } from "./car-list/car-list.component";
import { CarDetailsComponent } from "./car-details/car-details.component";

export const carPaths = [
    { path: 'cars', component: CarListComponent},
    { path: 'details/:id', component: CarDetailsComponent},
]