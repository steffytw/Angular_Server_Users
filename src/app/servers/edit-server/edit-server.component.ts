import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server:{id:number,name:string,status:string};
  serverName:string;
  serverStatus:string;
  
  onUpdateServer(){
    
  }

  constructor(private serversService:ServersService) { 
    
  }

  ngOnInit() {
    this.server=this.serversService.getServer(1);
    this.serverName=this.server.name;
    this.serverStatus=this.server.status;
  }

}
