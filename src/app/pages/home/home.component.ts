import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Result } from "src/app/interface/result";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  showData = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((result: Result) => {
      if (result) {
        this.showData = true;
      }
    });
  }
}
