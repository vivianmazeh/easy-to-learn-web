import { Component, OnInit } from '@angular/core';
import { CityProfileService } from 'src/app/service/city-profile.service';
import { CityProfile } from 'src/app/models/city-profile';

@Component({
  selector: 'app-city-profile',
  templateUrl: './city-profile.component.html',
  styleUrl: './city-profile.component.css'
})
export class CityProfileComponent implements OnInit{
  cityProfiles: CityProfile[] = [];
  sortColumn: string | null = null;
  sortOrder: 'asc' | 'desc' = 'asc';
  stateName : string = 'Michigan';


  constructor(private cityProfileService: CityProfileService) { }

  ngOnInit(): void {
    this.getCityProfiles(this.stateName);
  }

  getCityProfiles(stateName: string): void {
    
    this.cityProfileService.getCityProfile(stateName).subscribe(data => {
      this.cityProfiles = data;
    });
  }

  filteredCityProfiles(): CityProfile[] {
    let filtered = this.cityProfiles;

    if (this.sortColumn) {
      filtered.sort((a, b) => {
        const valueA = a[this.sortColumn as keyof CityProfile];
        const valueB = b[this.sortColumn as keyof CityProfile];

        if (valueA < valueB) {
          return this.sortOrder === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
          return this.sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }

  sortData(column: string, order: 'asc' | 'desc'): void {
    this.sortColumn = column;
    this.sortOrder = order;
  }
}
