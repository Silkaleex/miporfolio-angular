import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  styles: [],
})
export class InicioComponent implements OnInit {
  ImagePath: string;
  color = false;
  constructor(private router: Router) {
    this.ImagePath = '../../assets/img/IMG-20221103-WA0002.jpg';
  }
  ngOnInit(): void {}

  enlace() {
    this.router.navigate(['/informacion']);
  }
  cambioColor() {
    this.color = !this.color;
  }
  mensaje() {
    alert('Todos los derechos reservados');
  }
}
