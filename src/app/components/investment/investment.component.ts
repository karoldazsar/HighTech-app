import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  investment: object[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.investment = this.dataService.getInvestment();
  }

}
