import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() appLink: string;
  @Input() subheaders: string[];
  @Input() previewSrc: string;

  @ViewChild('preview', { static: true }) preview: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  getBackgroundUrl() {
    return `url(${this.previewSrc})`;
  }

}
