
import { Routes } from '@angular/router'
export const Full_ROUTES: Routes = [
    {
        path:'home',
        loadChildren:()=>import('../../home/home-routing.module').then((m)=>m.HomeRoutingModule),
        pathMatch:'full'
    }
]