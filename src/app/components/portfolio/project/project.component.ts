import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() link: string;
  @Input() subheaders: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
