import { Component, OnInit } from '@angular/core';
import { Developpeur } from '../model/developpeur';
import { DeveloppeurService } from '../services/developpeur.service';
import { ActivatedRoute,Router } from '@angular/router'; 


@Component({
  selector: 'app-developpeurs',
  templateUrl: './developpeurs.component.html',
  styleUrls: ['./developpeurs.component.css']
})
export class DeveloppeursComponent implements OnInit
 {
  developpeurs! : Developpeur[];
  constructor(private developpeurService : DeveloppeurService,private router :Router) { 
    /*this.developpeurs=[
      {idDeveloppeur : 1, nom : "Montassar", salaire : 3000, dateEmbauche : new Date("01/14/2011")},
      {idDeveloppeur : 2, nom : "Mohamed", salaire : 3500, dateEmbauche : new Date("08/14/2016")},
      {idDeveloppeur : 3, nom : "Ali", salaire : 2500, dateEmbauche : new Date("12/02/2014")}
    ];*/
    //this.developpeurs=developpeurService.listeDeveloppeurs();
  }

  ngOnInit(): void 
  {
    this.developpeurService.listeDeveloppeur().subscribe(devs => { 
    console.log(devs); 
    this.developpeurs = devs;
  });
  }

  supprimerDeveloppeur(d: Developpeur)
  { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.developpeurService.supprimerDeveloppeur(d.idDeveloppeur).subscribe(() => { console.log("developpeur supprimé"); }); 
    this.router.navigate(['developpeurs']).then(() => { window.location.reload(); });
   }

   
  /*supprimerDeveloppeur(d: Developpeur) { 
    //console.log(d);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.developpeurService.supprimerDeveloppeur(d);
   }*/


}