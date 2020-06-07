import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Result } from "../../interface/result";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  sliderArray: object[];
  transform: number;
  selectedIndex = 0;
  constructor(private dataService: DataService) {
    this.sliderArray = [];
  }

 
  ngOnInit() {
    this.sliderArray = this.dataService.getSlider();
  }

  selected(x) {
    this.nextSelected(x);
    this.selectedIndex = x;
   }

   keySelected(x) {
    this.nextSelected(x);
    this.selectedIndex = x;
  }

   nextSelected(i) {
   this.transform =  100 - (i) * 100;
     this.selectedIndex = this.selectedIndex + 1;
     if (this.selectedIndex > 3) {
       this.selectedIndex = 0;
     }
   }

}
