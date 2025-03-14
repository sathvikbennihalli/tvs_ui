import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { TEAM_REVIEW_DATA } from '../../shared/data/team-review-table-data';
import { Employee } from '../../shared/types/employee.type';
import { TeamReviewTableComponent } from '../../tables/team-review-table/team-review-table.component';

@Component({
  selector: 'app-team-review',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TeamReviewTableComponent],
  templateUrl: './team-review.component.html',
  styleUrl: './team-review.component.scss',
})
export class TeamReviewComponent {
  displayedColumns: string[] = [
    'number',
    'name',
    'type',
    'role',
    'status',
    'action',
  ];

  dataSource = new MatTableDataSource<Employee>(TEAM_REVIEW_DATA);
}
