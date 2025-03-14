import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { NgClass } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { StatusClassPipe } from '../../shared/pipes/status.pipe';
import { TEAM_REVIEW_DATA } from '../../shared/data/team-review-table-data';
import { Employee } from '../../shared/types/employee.type';

@Component({
  selector: 'app-team-review',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgClass,
    StatusClassPipe,
  ],
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
