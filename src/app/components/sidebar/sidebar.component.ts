import { Component } from '@angular/core';
import { SidebarServiceService } from 'src/app/service/sidebar-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isSelected: string = ''
  constructor(public sidebarService: SidebarServiceService) {}

  setFilter(type: string) {
    this.sidebarService.setFilterType(type);
    this.isSelected = type
  }
}
