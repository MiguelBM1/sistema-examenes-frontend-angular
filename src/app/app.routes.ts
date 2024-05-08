import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/Dashboard/Dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { normalGuard } from './services/normal.guard';
import { adminGuard } from './services/admin.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { noAuthGuard } from './services/no-auth.guard';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: SignupComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [noAuthGuard],
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: DashboardComponent,
        canActivate: [adminGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent,
            },
            {
                path: '',
                component: WelcomeComponent
            },
            {
                path: 'categorias',
                component: ViewCategoriasComponent
            }
            ,
            {
                path: 'add-categoria',
                component: AddCategoriaComponent
            },
            {
                path: 'examenes',
                component: ViewExamenesComponent
            },

            {
                path: 'add-examen',
                component: AddExamenComponent
            },

            {
                path: 'examen/:examenId',
                component: ActualizarExamenComponent
            }
            

        ]

    },
    {
        path: 'user-dashboard',
        component: UserDashboardComponent,
        pathMatch: 'full',
        canActivate: [normalGuard]
    }

        
];
