import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  constructor(
    private router: Router,
    ) {}

  public getDestinationPath(){
    this.router.navigate(['/Destinations'])
  }

}
