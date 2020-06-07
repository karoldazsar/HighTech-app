import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-briefcase",
  templateUrl: "./briefcase.component.html",
  styleUrls: ["./briefcase.component.scss"],
})
export class BriefcaseComponent implements OnInit {
  briefcase: object[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.briefcase = this.dataService.getBriefcase();
  }
}
