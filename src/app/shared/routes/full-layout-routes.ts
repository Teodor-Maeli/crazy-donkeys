
import { Routes } from '@angular/router'
export const Full_ROUTES: Routes = [
    {
        path:'home',
        loadChildren:()=>import('../../home/home-routing.module').then((m)=>m.HomeRoutingModule),
        pathMatch:'full'
    },
    {
        path:'contacts',
        loadChildren:()=>import('../../contacts/contacts-routing.module').then((m)=>m.ContactsRoutingModule),
        pathMatch:'full'
    }
]