import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PileOperationsService {
  url=environment.url

  constructor(private http: HttpClient) { }
  operate(stackList: number[], operand: string) {
   return this.http.post<any>(`${this.url}/operate`, { stack: stackList,operand:operand });
  }

}
