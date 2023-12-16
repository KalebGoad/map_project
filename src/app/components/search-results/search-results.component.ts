import { Component, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { APIService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchDetailsComponent implements OnInit{
  // @Input() id: string = '';

  // country: Country;
  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue: string = ' ';


  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
		this.searchTextChanged.emit(this.enteredSearchValue);
}

  // constructor(private apiService: APIService) {
  //   this.country =
  //   {
  //       id: '',
  //       iso2Code: '',
  //       name: '',
  //       region: {
  //         id: '',
  //         iso2code: '',
  //         value: '',
  //       },
  //       adminregion: {
  //         id: '',
  //         iso2code: '',
  //         value: '',
  //       },
  //       incomeLevel: {
  //         id: '',
  //         iso2code: '',
  //         value: '',
  //       },
  //       lendingType: {
  //         id: '',
  //         iso2code: '',
  //         value: '',
  //       },
  //       capitalCity: '',
  //       longitude: 0,
  //       latitude: 0,
  //       datePop: '',
  //       totalPop: '',
  //       dateGDP: '',
  //       gdp: ''
  //   }
  // }

  // ngOnInit(changes: SimpleChanges): void {
  //       if (changes['id'].currentValue.length == 2) {
  //         this.apiService.GetCountry(changes['id'].currentValue)
  //         .subscribe((response: any) => {
  //           this.country.name = response[1][0].name;
  //           this.country.capitalCity = response[1][0].capitalCity;
  //           this.country.region.value = response[1][0].region.value;
  //           this.country.incomeLevel.value = response[1][0].incomeLevel.value;
  //           this.country.id = response[1][0].id;
  //           this.country.iso2Code = response[1][0].iso2Code;
  //           this.country.longitude = response[1][0].longitude;
  //           this.country.latitude = response[1][0].latitude;
  //         });
  //         this.apiService.GetTotalPop(changes['id'].currentValue)
  //         .subscribe((response: any) => {
  //           this.country.totalPop = response[1][0].value;
  //         });
  //         this.apiService.GetGDP(changes['id'].currentValue)
  //         .subscribe((response: any) => {
  //           this.country.gdp = response[1][0].value;
  //         });
  //       }
  //     }
  }
