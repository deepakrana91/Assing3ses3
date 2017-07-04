import { dog, cat } from './session3';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit()
  {
   // creating the objects of the classes
    let tommy=new dog("tommy")
    tommy.makesound("bark bark")
    tommy.move(6);

    let sano= new cat("sano");
    sano.makesound("meow meow");
    sano.move(8);
  }
}
