import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  
  id: string;

  constructor() {

    this.id = ''

  }
  searchText: string = ' ';

  onSearchTextEntered(searchValue: string) {
		this.searchText = searchValue;
		console.log(this.searchText);
	}


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  grabID(id: string) {
    this.id = id;
  }
  
}
