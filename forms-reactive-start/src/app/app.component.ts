import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {colors} from '@angular/cli/utilities/color';
import {Observable} from 'rxjs';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna']
  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbbienEmails.bind(this))
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control)
  }

  onDeleteHobby() {
    (<FormArray>this.signUpForm.get('hobbies')).removeAt(-1);
  }

  onSubmit(){
    console.log(this.signUpForm)
  }

  forbiddenNames(control: FormControl): {[s:string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) != -1) {
      return {'nameIsForbiddened': true}
    }

    return null;
  }

  forbbienEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({'emailIsForbbidden': true});
        }else{
          resolve(null);
        }

      }, 1500);

    });
    return promise;
  };
}
