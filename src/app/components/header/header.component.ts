import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBell = faBell;
  header: object[];
  constructor(private dataService: DataService) { 
   
  }

  ngOnInit(): void {
   this.header = this.dataService.getHeader();
  }

}
