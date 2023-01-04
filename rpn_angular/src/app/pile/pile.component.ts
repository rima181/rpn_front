import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { PileOperationsService } from '../pile-operations.service';

@Component({
  selector: 'app-pile',
  templateUrl: './pile.component.html',
  styleUrls: ['./pile.component.css']
})
export class PileComponent implements OnInit {


  stackList: number[] = [];
  message = '';
  rpnForm: FormGroup;

  constructor(private fb: FormBuilder, private pileOperationsService: PileOperationsService) {

    this.rpnForm = this.fb.group({
      stack: '',
    });
  }
  ngOnInit(): void {

  }


  onSubmit() {
    this.stackList.push(this.rpnForm.controls['stack'].value)
    this.rpnForm.controls['stack'].setValue(0)
    console.log(this.stackList);
  }
  operate(operand: string) {

    this.pileOperationsService.operate(this.stackList, operand)
    .pipe(
      tap((response) => { this.stackList = response['stack'], this.message = response['message'] }
      )).subscribe();
  }
  empty() {
    this.rpnForm.controls['stack'].setValue(0)
    this.stackList = []
  }

}
