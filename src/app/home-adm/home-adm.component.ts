import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styleUrls: ['./home-adm.component.css'],
})
export class HomeAdmComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
