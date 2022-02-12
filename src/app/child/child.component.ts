import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  NgModel,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  email = '';
  passwordEntered = '';

  /*users = new FormArray([
    new FormControl('ABC'),
    new FormControl('Angular Tutorials'),
    new FormControl('React Tutorials'),
  ]);*/

  constructor(private fb: FormBuilder) {}

  reactiveForm = this.fb.group({
    firstname: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(20)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(10)],
    ],

    users: new FormArray([
      new FormControl('ABC'),
      new FormControl('Angular Tutorials'),
      new FormControl('React Tutorials'),
    ]),

    employees: new FormArray([
      this.fb.group({
        name: new FormControl('king'),
        age: new FormControl('12'),
        dept: new FormControl('admin'),
      }),
    ]),
  });

  /* addSkillFormFroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      proficiency: ['', Validators.required],
    });
  }*/

  ngOnInit(): void {
    //console.log(this.users);
    //console.log(this.users.value);
  }

  loginUser(values: NgForm) {
    console.log(values);
  }

  load(values: NgForm) {
    let obj = {
      email: 'slyboy@gmail.com',
      password: 'kkkkkkkkkk',
    };
    values.setValue(obj);
  }

  reset(values: NgForm) {
    values.reset();
  }

  // Reactive form
  reactiveObj = {
    firstname: 'slyboy@gmail.com',
    password: 'kkkkkkkkkk',
  };

  submitForm() {
    console.log(this.reactiveForm.value);
    this.resetReactive();
  }

  loadReactive() {
    this.reactiveForm.patchValue(this.reactiveObj);
  }

  resetReactive() {
    this.reactiveForm.reset();
  }

  get usersArray(): FormArray {
    return this.reactiveForm.get('users') as FormArray;
  }

  get employeesArray(): FormArray {
    return this.reactiveForm.get('employees') as FormArray;
  }

  addEmployees() {
    let employeesArr = this.employeesArray;
    let newEmployees = this.fb.group({
      name: '',
      age: '',
      dept: '',
    });

    employeesArr.push(newEmployees);
  }

  removeEmployees(i: number) {
    let employeesArr = this.employeesArray;
    employeesArr.removeAt(i);
  }

  assignDept(i: number) {
    let employeesArr = this.employeesArray;
    let values = employeesArr.value;
    if (employeesArr.value[i].age > 55) {
      employeesArr.value[i].dept = 'ADMIN';
    } else {
      employeesArr.value[i].dept = 'CSE';
    }
    this.employeesArray.setValue(employeesArr.value);
  }
}
