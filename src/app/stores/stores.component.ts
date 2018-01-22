import { Component, OnInit } from '@angular/core';
import { StoresService } from './stores.service';
import { Stores } from './stores';

@Component({
  selector: 'printmelon-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
