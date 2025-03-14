import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamReviewComponent } from './pages/team-review/team-review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TeamReviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tvs';
}
