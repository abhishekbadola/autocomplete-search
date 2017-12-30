import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Security } from '../../model/security';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  searchData = new Security();
  hasData = false; // To show or hide data in detailed view

  constructor(private _data: DataService) {
  }

  ngOnInit() {
    this._data.searchedSecurityObservable.subscribe(res => {
      if (Object.keys(res).length) { // To check if there is data for the searched query
        this.hasData = true;
        this.searchData = res;
      }
    });
  }
}
