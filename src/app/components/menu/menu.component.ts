import { Component, OnInit } from '@angular/core';
import { faHome, faUserCircle, faEllipsisH, faList, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faHome = faHome;
  faUserCircle = faUserCircle;
  faEllipsisH = faEllipsisH;
  faList = faList;
  faPlusCircle = faPlusCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
