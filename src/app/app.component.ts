import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'searchingMovie';
  seriesList: any;
  selectedType: any;
  searchType = [
    {
      id: 1,
      name: 'movie',
    },
    {
      id: 2,
      name: 'series',
    },
  ];

  constructor(private api: ApiService) {}
  ngOnInit() {
    this.selectedType = this.searchType.filter((x) => x.id == 1)[0];
  }

  public onChange(type, value) {
    this.selectedType = this.searchType.filter((x) => x.id == value)[0];
  }

  public loadfilterMovie(event) {
    this.api.getAllMovie(event, this.selectedType).subscribe((res) => {
      this.seriesList = res.Search;
      console.log('seriesList', this.seriesList);
    });
  }
}
