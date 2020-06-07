import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Result } from "../interface/result";

const URL = "../assets/i18n/data.json";
@Injectable({
  providedIn: "root",
})
export class DataService {
  dataHome: any;
  constructor(private http: HttpClient) {}

  getData() {
    const promise = this.http.get(URL);
    promise.subscribe((result: Result) => {
      this.dataHome = result;
    });
    return this.http.get(URL);
  }

  getSlider() {
    return this.dataHome.sliderArray;
  }

  getBriefcase() {
    return this.dataHome.briefcase;
  }
  getCard() {
    return this.dataHome.card;
  }
  getGoals() {
    return this.dataHome.goals;
  }
  getHeader() {
    return this.dataHome.header;
  }
  getInvestment() {
    return this.dataHome.investment;
  }
  getSavings() {
    return this.dataHome.blog;
  }
}
