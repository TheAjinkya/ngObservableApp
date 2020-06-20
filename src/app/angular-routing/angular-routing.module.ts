import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { TemplateDrivenComponent } from '../template-driven/template-driven.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { FooterComponent } from '../footer/footer.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { CreateFormComponent } from '../create-form/create-form.component';
import { AuthService } from '../auth.service';
import { ObservableComponent } from '../observable/observable.component';
import { HttpComponent } from '../http/http.component';

const routes : Routes = [
  {path : 'header', component: HeaderComponent},
  {path : 'home', component: HomeComponent},
  {path : 'template/:id', component: TemplateDrivenComponent},
  {path : 'reactive', component: ReactiveFormComponent, canActivateChild:[AuthService],
  children: [
    {path : 'create', component: CreateFormComponent},
    {path : 'edit', component: EditFormComponent},

  ]},
  {path : 'footer', component: FooterComponent},
  {path : 'observable', component: ObservableComponent},
  {path : 'http', component: HttpComponent},
  {path : '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AngularRoutingModule { }
