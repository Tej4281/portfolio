import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

data:any=[
  {
    'year':'/assets/images/2022.jpg',
    'bachelor_degree':'Bachelor of Science in Information Technology',
    'college':'Mahatma Gandhi Mission College of Engineering and Technology Navi mumbai.',
    'text':'completed BSc.IT in INFORMATION TECHNOLOGY WITH 7.97 CGPA'
  },
  {
    'year':'/assets/images/2019.jpg',
    'bachelor_degree':'HSC ( Higher Secondary School Certificate )',
    'college':'Karnatak Lingayat Education Society College in Navi Mumbai',
    'text':'completed HSC WITH 51%'
  },

  {
    'year':'/assets/images/2017.1.jpg',
    'bachelor_degree':'SSC ( Secondary School Certificate )',
    'college':'Sanjivani Sainiki School & Jr. College.kopargaon',
    'text':'completed SSC WITH 74%'
  }
]
}
