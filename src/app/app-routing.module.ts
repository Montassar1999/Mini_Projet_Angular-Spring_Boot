import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ DeveloppeursComponent } from './developpeurs/developpeurs.component';
import{ AddDeveloppeurComponent } from './add-developpeur/add-developpeur.component';
import{ UpdateDeveloppeurComponent } from './update-developpeur/update-developpeur.component';

const routes: Routes = [{path : "developpeurs" , component : DeveloppeursComponent},
{path : "add-developpeur" , component : AddDeveloppeurComponent},
{ path: "", redirectTo: "developpeurs", pathMatch: "full" },
{path : "updateDeveloppeur/:id" , component : UpdateDeveloppeurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
