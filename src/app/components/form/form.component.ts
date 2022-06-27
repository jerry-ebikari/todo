import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { listData } from '../../services/list-data.service';

function wordCountValidator(control: AbstractControl) {
  let arrayOfWords = control.value.match(/[\w\.,'-]+/g);
  let numberOfwords: number = arrayOfWords ? arrayOfWords.length : 0;
  if (numberOfwords > 15) {
    return { maxWords: true };
  }
  return {};
}

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  wordCount: number = 0;
  constructor(private router: Router) {}
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        wordCountValidator,
      ]),
    });
    this.form.get('description').valueChanges.subscribe((value: string) => {
      this.wordCount = value.match(/[\w\.,'-]+/g)
        ? value.match(/[\w\.,'-]+/g).length
        : 0;
      console.log(this.wordCount);
    });
  }

  addTask(): void {
    if (this.form.valid) {
      listData.newList.unshift({
        title: this.form.get('title').value,
        description: this.form.get('description').value,
      });
      this.router.navigate(['/']);
    }
  }
}
