import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../components/navbar/components/login-dialog/login-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(private dialog: MatDialog) {}

    openLoginDialog() {
        this.dialog.open(LoginDialogComponent, {
            width: '600px',
            height: '400px',
        });
    }
}
