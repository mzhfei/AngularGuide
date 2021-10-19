import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm;
  defaultSelect = "pet";
  questionAnswer = "";
  genders=['male', 'female'];
  submitted = false;
  datas = {
    userName: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(formEle: NgForm) {
    this.submitted = true;
    console.log(this.signUpForm.form)
    this.datas.userName = this.signUpForm.value.userData.username;
    this.datas.email = this.signUpForm.value.userData.email;
    this.datas.answer = this.signUpForm.value.questionAnswer;
    this.datas.question = this.signUpForm.value.secret;
    this.datas.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();

  }

  setSuggestedName() {
    const suggestedName = "New Name"
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
        }
      }
    )
  }
}
