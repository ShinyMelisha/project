import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../core/jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  authRequest:any={
    "username":"shiny",
    "password":"shiny"
  };

  

  constructor(private service:JwtClientService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }
  public getAccessToken(authRequest:string){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data=>console.log("Token: "+data));
  }

}
