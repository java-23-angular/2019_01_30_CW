import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTitle';
  isEnabled: boolean = false;
  email = '';
  names = ['Vasya','Petya','Vova'];

  // changeText(event: Event) {
  //   console.log((<HTMLInputElement>event.target).value);
  //   let element: HTMLInputElement = <HTMLInputElement>event.target;
  //   this.isEnabled = element.value.length >= 3;
  // }


  changeText(value: string) {
    this.isEnabled = value.length >= 3;
  }

  setTitle(value: string) {
    this.title = value;
  }
}
