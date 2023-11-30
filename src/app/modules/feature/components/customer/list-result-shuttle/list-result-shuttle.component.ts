import { Component, OnInit } from '@angular/core';
import { filters, singleFilter } from './FilterData';
import { listSeats, listSeatsB } from 'Data/seats';

@Component({
    selector: 'app-list-result-shuttle',
    templateUrl: './list-result-shuttle.component.html',
    styleUrls: ['./list-result-shuttle.component.scss'],
})
export class ListResultShuttleComponent implements OnInit {
    singleFilterData: any;
    filterData: any;
    seats: any;
    seatBs: any;

    constructor() {}

    ngOnInit(): void {
        this.singleFilterData = singleFilter;
        this.filterData = filters;
        this.seats = listSeats;
        this.seatBs = listSeatsB;
    }
}
