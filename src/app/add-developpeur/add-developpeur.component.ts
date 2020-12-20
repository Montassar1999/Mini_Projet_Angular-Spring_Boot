import { Component, OnInit } from '@angular/core';
import { Developpeur } from '../model/developpeur';
import { DeveloppeurService } from '../services/developpeur.service';
import { ActivatedRoute,Router } from '@angular/router'; 

@Component({
  selector: 'app-add-developpeur',
  templateUrl: './add-developpeur.component.html',
  styleUrls: ['./add-developpeur.component.css']
})
export class AddDeveloppeurComponent implements OnInit {
newDeveloppeur = new Developpeur();
  constructor(private developpeurService : DeveloppeurService,private router :Router) { }

  ngOnInit(): void {
  }
  addDeveloppeur(){ 
    this.developpeurService.ajouterDeveloppeur(this.newDeveloppeur) .subscribe(devs => { 
      console.log(devs);
    }); 
    this.router.navigate(['developpeurs']);
 }
/*addDeveloppeur(){
  //console.log(this.newDeveloppeur);
  this.developpeurService.ajouterDeveloppeur(this.newDeveloppeur);
}*/
}
