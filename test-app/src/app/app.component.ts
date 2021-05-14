import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  test() {
    let $rxjsTest = document.querySelector('.rxjs-test')
    const secondsCounter = interval(2000);
    const subscription = secondsCounter.subscribe(n =>
      {
        let rxjsNumber = Number($rxjsTest?.textContent)
        rxjsNumber++;
        if($rxjsTest) {
          $rxjsTest!.textContent = rxjsNumber.toString();
        }
      });
  }
}
