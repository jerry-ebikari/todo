import { Component } from '@angular/core';
import { listData } from '../../services/list-data.service';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  newList = listData.newList;
  ongoingList = listData.ongoingList;
  doneList = listData.doneList;
}
