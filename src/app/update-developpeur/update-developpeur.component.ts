import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router'; 
import { DeveloppeurService } from '../services/developpeur.service'; 
import { Developpeur } from '../model/developpeur';

@Component({
  selector: 'app-update-developpeur',
  templateUrl: './update-developpeur.component.html',
  styles: [
  ]
})
export class UpdateDeveloppeurComponent implements OnInit {
  currentDeveloppeur = new Developpeur();
  constructor(private activatedRoute: ActivatedRoute, 
              private developpeurService: DeveloppeurService,
              private router :Router) 
  { 

  }

  ngOnInit(): void 
  {
    this.developpeurService.consulterDeveloppeur(this.activatedRoute.snapshot.params.id). subscribe( dev =>{ this.currentDeveloppeur = dev; } ) ; 
  }
  /*updateDeveloppeur() {
     //console.log(this.currentDeveloppeur);
      this.developpeurService.updateDeveloppeur(this.currentDeveloppeur);
      this.router.navigate(['developpeurs']);
     }*/
  updateDeveloppeur() 
  {
    this.developpeurService.updateDeveloppeur(this.currentDeveloppeur).subscribe(dev => { this.router.navigate(['developpeurs']); },
    (error) => { alert("Problème lors de la modification !"); } );
  }
}
