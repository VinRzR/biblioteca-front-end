import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-cro',
  templateUrl: './home-cro.component.html',
  styleUrls: ['./home-cro.component.css'],
})
export class HomeCroComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
