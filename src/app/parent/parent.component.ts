import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    console.log('object');
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  openModal() {
    console.log('open modal');
  }

  onButtonClick() {
    window.alert('Clicked');
  }
}
