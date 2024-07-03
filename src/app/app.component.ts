import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiContentProjectionComponent } from './multi-content-projection/multi-content-projection.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MultiContentProjectionComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-app';
}
