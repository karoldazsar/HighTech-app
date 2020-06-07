import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  goals: object[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.goals = this.dataService.getGoals();
  }

}
