import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ComicDetailComponent } from './pages/comic-detail/comic-detail.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';


export const rootRouterConfig: Routes = [
    { path:'', redirectTo:"/home", pathMatch:"full" },
    { path:'home', component: HomeComponent },
    { path:'contact', component: ContactComponent },
    { path:'comicDetail', component: ComicDetailComponent },
    { path:'cart', component: ShoppingCartComponent },
    { path:'check-out', component: CheckOutComponent }
]
