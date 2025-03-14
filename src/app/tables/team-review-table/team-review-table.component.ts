import { Component, Input } from '@angular/core';
import { StatusClassPipe } from '../../shared/pipes/status.pipe';
import { NgClass } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Employee } from '../../shared/types/employee.type';

@Component({
  selector: 'app-team-review-table',
  standalone: true,
  imports: [StatusClassPipe, MatTableModule, NgClass],
  templateUrl: './team-review-table.component.html',
  styleUrl: './team-review-table.component.scss',
})
export class TeamReviewTableComponent {
  @Input() dataSource: MatTableDataSource<Employee> =
    new MatTableDataSource<Employee>();
  @Input() displayedColumns: string[] = [];
}
