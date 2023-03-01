import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
  activeTab: string='chats'
  constructor() { }

  segmentChange(e:any){
    this.activeTab = e.target.value;
  }
  ngOnInit() {
  }

}
