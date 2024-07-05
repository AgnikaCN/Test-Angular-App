import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  isModalOpen: boolean = false;
  isDropdownOpen: boolean = false;
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  toggleDropdown() {
    console.log(this.isDropdownOpen);
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
