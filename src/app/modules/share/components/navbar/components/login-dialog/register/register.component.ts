import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    hidePassword = true;
    hideRequirePassword = true;

    togglePassword() {
        this.hidePassword = !this.hidePassword;
    }

    toggleRequirePassword() {
        this.hideRequirePassword = !this.hideRequirePassword;
    }

    constructor() {}

    ngOnInit(): void {}
}
