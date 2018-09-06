import { Component } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
  public spaceScreens = [];
  public errorMsg: string;

  constructor(private _dataServiced: DataService) { }

  ngOnInit() {
    this._dataServiced.getSpacescreens()
        .subscribe(data => this.spaceScreens = data,
                    error => this.errorMsg = error
        );
  }

  likeMe(i){
    if (this.spaceScreens[i].liked == 0)
    {
      this.spaceScreens[i].liked = 1;
      console.log(this.spaceScreens[i].liked);
    }
    else
    {
      this.spaceScreens[i].liked = 0;
      console.log(this.spaceScreens[i].liked);
    }
  }

  deleteMe(i){
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }
}
