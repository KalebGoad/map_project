import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { APIService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchDetailsComponent {
  // @Input() id: string = '';
  
  @Input() country: Country;
  
  constructor(private apiService: APIService) {
    this.country =
    {
        id: '',
            iso2Code: '',
            name: '',
            region: {
              id: '',
              iso2code: '',
              value: '',
            },
            adminregion: {
              id: '',
              iso2code: '',
              value: '',
            },
            incomeLevel: {
              id: '',
              iso2code: '',
              value: '',
            },
            lendingType: {
              id: '',
              iso2code: '',
              value: '',
            },
            capitalCity: '',
            longitude: 0,
            latitude: 0,
            datePop: '',
            totalPop: '',
            dateGDP: '',
            gdp: ''

  };
}

  @Output() searchText = new EventEmitter<string>();

  getSearchText(text: string) {
    this.searchText.emit(text);
  }
}

