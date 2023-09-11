import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'teamConfigurationFrontEnd';
  users:any;

  displayedColumns: string[] = [ 'Name', 'Surname', 'Email','Team',];
  teams: any;

  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.getUsers();
    this.getTeams();
  }

  getUsers(){
    this.userService.getUsers().subscribe(data=>{
      this.users= data;
      console.log(data);
      
    })
  }

  getTeams(){
    this.userService.getTeams().subscribe(data=>{
      this.teams= data;
      console.log(data);
      
    })
  }
}
