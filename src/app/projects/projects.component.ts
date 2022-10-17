import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

data:any=[
  {
  'project':'https://gurukrupa-ed3d7.web.app/',
  'info':' e-commerce website.'
},
{
  'project':'https://oyo23-88f51.web.app/',
  'info':'responsive  page  .'
},
]
}
