import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../shared/models/login-user.model';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler';
import { LoginComponent } from '../components/login/login.component';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
export  interface User{
 // role:string;
}
@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  private loginUrl = "http://localhost:8080/api/auth/login";
 
 // rolename: any;
  

  constructor(private http: HttpClient, private apiService: ApiService) { 
  }

  public generateToken(request: string) {
    return this.http.post("http://localhost:8080/api/auth/login", request, { responseType: 'text' as 'json' });
  }
  public welcome(token: string) {
    let tokenStr = "bearer " + token
    const headers = new HttpHeaders().set("Authorization", tokenStr)
    return this.http.get("http://localhost:8080/", { headers, responseType: 'text' as 'json' });
  }
  // 
    userLogin(loginData: LoginUser):Promise<any> {
    
    console.log(loginData)
    return new Promise((resolve) => {
      this.apiService.postWithoutHeader(`${environment.backendUrl}api/auth/login`, loginData).subscribe(
        res => {
          console.log(res) 
        
          //console.log(res.roles)
          if (res?.token)  {
            localStorage.setItem('token', res.token);
            localStorage.setItem('role', res.roles);
            
            let decode =this.getDecodedAccessToken(res.token)
            console.log(decode)
                      
            resolve(res);
           
          }
          resolve(null)
        });
        
    })
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  
  getRole(){
    return this.http.get(this.loginUrl);
    
}

  

}
