import { Component, OnInit } from '@angular/core';
import { popularRoute, services, vourchers } from 'Data/popular_route';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
    popularRoute: any;
    vourchers: any;
    services: any;

    constructor() {}

    ngOnInit(): void {
        this.popularRoute = popularRoute;
        this.vourchers = vourchers;
        this.services = services;
    }
}
