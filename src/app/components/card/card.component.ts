import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card: object[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.card = this.dataService.getCard();
  }

}
