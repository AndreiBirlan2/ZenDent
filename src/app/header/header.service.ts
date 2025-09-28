import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private menuValueSubject = new BehaviorSubject<boolean>(false);
  menuValue$ = this.menuValueSubject.asObservable();

  setMenuValue(value: boolean) {
    this.menuValueSubject.next(value);
  }
}
