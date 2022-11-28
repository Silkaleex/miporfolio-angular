import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  color: any;
  constructor() {}

  ngOnInit(): void {}
  cambiofondo() {
    this.color = !this.color;
  }

  alert() {
    alert('Gracias por visitar mi pagina web =)');
  }
}
