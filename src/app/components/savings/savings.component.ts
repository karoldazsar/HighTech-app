import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {
  blog: object[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.blog = this.dataService.getSavings();
  }

}
