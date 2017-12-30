import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCount = 4;
  searchQuery = '';

  securitiesData = [];
  filteredSecurities = [];

  myControl: FormControl = new FormControl();

  constructor(private router: Router, private _data: DataService) {
    this._data.getSecurityJSON().subscribe(res => { // Load data on creation of Home instance
      this.securitiesData = res;
      console.log(res);
    });
  }

  ngOnInit() {
  }

  showResults(security) { // To show details on selecting from Autocomplete
    this._data.setResults(security);
    this.searchQuery = security.Description;
    this.router.navigate(['/details']);
  }

  fillAutocomplete() { // filling Autocomplete on every key stroke
    this._data.getFilteredSecurities(this.searchQuery)
      .subscribe(res => {
        if (res.length <= 10) { // Limiting to 10 results in Autocomplete
          this.filteredSecurities = res;
        } else {
          this.filteredSecurities = [];
          for (let i = 0; i < 10; i++) {
            this.filteredSecurities.push(res[i]);
          }
        }
      });
  }
}
