import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    constructor(private dialogService: DialogService) {}

    openLoginDialog() {
        this.dialogService.openLoginDialog();
    }

    ngOnInit(): void {}
}
