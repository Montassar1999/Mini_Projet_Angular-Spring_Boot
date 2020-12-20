import { Injectable } from '@angular/core';
import { Developpeur } from '../model/developpeur';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };

@Injectable({
  providedIn: 'root'
})
export class DeveloppeurService {
  apiURL: string = 'http://localhost:8080/developpeur/api';
  developpeurs!: Developpeur[];
  developpeur!:Developpeur;
  
  constructor(private http : HttpClient){}

  listeDeveloppeur(): Observable<Developpeur[]>
  {
     return this.http.get<Developpeur[]>(this.apiURL); 
  }

  ajouterDeveloppeur( dev: Developpeur):Observable<Developpeur>
  {
   return this.http.post<Developpeur>(this.apiURL, dev, httpOptions);
  }

  supprimerDeveloppeur(id : number) 
  { 
    const url = `${this.apiURL}/${id}`; 
    return this.http.delete(url, httpOptions);
  }

  consulterDeveloppeur(id: number): Observable<Developpeur>
  { 
    const url = `${this.apiURL}/${id}`; 
    return this.http.get<Developpeur>(url);
  }

  updateDeveloppeur(prod :Developpeur) : Observable<Developpeur>
  { 
    return this.http.put<Developpeur>(this.apiURL, prod, httpOptions); 
  }


  /*constructor() { 
  this.developpeurs=[
      {idDeveloppeur : 1, nom : "Montassar", salaire : 3000, dateEmbauche : new Date("01/14/2011")},
      {idDeveloppeur : 2, nom : "Mohamed", salaire : 3500, dateEmbauche : new Date("08/14/2016")},
      {idDeveloppeur : 3, nom : "Ali", salaire : 2500, dateEmbauche : new Date("12/02/2014")}
    ];
    this.developpeur=new Developpeur();
  }
  
  listeDeveloppeurs() : Developpeur[]{
    return this.developpeurs;
  }
  ajouterDeveloppeur(d:Developpeur){
    this.developpeurs.push(d);
  }
  supprimerDeveloppeur( dev: Developpeur){
    const index = this.developpeurs.indexOf(dev, 0);
    if (index > -1) {
    this.developpeurs.splice(index, 1);
    }
    }

   consulterDeveloppeur(id:number): Developpeur
    { 
      this.developpeur = this.developpeurs.find(d => d.idDeveloppeur == id);
       return this.developpeur; 
    }

      trierDeveloppeurs()
      { 
        this.developpeurs = this.developpeurs.sort((n1,n2) => { 
          if (n1.idDeveloppeur > n2.idDeveloppeur)
         {
            return 1; 
          }
           if (n1.idDeveloppeur < n2.idDeveloppeur)
            { return -1; }
             return 0;
          }
          ); 
        }
      updateDeveloppeur(d:Developpeur) 
      { // console.log(d); 
        this.supprimerDeveloppeur(d.idDeveloppeur); 
        this.ajouterDeveloppeur(d); 
        this.trierDeveloppeurs();
      }*/
}
