import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedIn: boolean;
  private userName: string;
  private token: string;

  get AUTH_STORAGE_MAP() { return 'auth_token'; }

  constructor(private storageMap: StorageMap) {
    this.isloggedIn = false;
    this.token = 'ced98ee6-ae7d-40de-b59d-d5491d7851af';
  }

  login(username: string, password: string) {
    this.isloggedIn = true;
    this.userName = username;
    return this.storageMap.set(this.AUTH_STORAGE_MAP, this.token);
  }

  isUserLoggedIn(): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      this.storageMap.get(this.AUTH_STORAGE_MAP).subscribe((token) => {
        if (token) {
          subscriber.next(true);
          return;
        }
        subscriber.next(false);
      }, (error) => {
        subscriber.next(false);
      }, () => {
        subscriber.complete();
      });
    });
  }

  logoutUser(): void {
    this.storageMap.delete(this.AUTH_STORAGE_MAP).subscribe();
  }
}
