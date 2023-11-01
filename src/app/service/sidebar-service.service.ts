import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarServiceService {
  public filterTypeSubject = new BehaviorSubject<string>('');
  filterType$ = this.filterTypeSubject.asObservable();

  setFilterType(type: string) {
    this.filterTypeSubject.next(type) ;
  }
}
