import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:any=[{
    'pdf':'/assets/images/JS2 (1).pdf'
  }]

//   downloadMyFile(){
//     const link = document.createElement('a');
//     link.setAttribute('target', '_blank');
//     link.setAttribute('href', '/assets/images/JS2 (1).pdf');
//     link.setAttribute('download', `products.pdf`);
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
// }
}
