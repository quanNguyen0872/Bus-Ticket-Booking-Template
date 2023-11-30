import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
    selector: 'app-customer-category-slider',
    templateUrl: './customer-category-slider.component.html',
    styleUrls: ['./customer-category-slider.component.scss'],
    animations: [
        trigger('slideInOut', [
            transition(':increment', [
                animate(
                    '0.4s ease-in-out',
                    keyframes([
                        style({ transform: 'translate(100%)', offset: 0 }),
                        style({ transform: 'translateX(0)', offset: 1 }),
                    ]),
                ),
            ]),
            transition(':decrement', [
                animate(
                    '0.4s ease-in-out',
                    keyframes([
                        style({ transform: 'translateX(-100%)', offset: 0 }),
                        style({ transform: 'translateX(0)', offset: 1 }),
                    ]),
                ),
            ]),
        ]),
    ],
})
export class CustomerCategorySliderComponent implements OnInit {
    @Input() type: any;
    @Input() title: any;
    @Input() categories: any;

    startIndex = 0;

    constructor() {}

    ngOnInit(): void {}

    prevCards(): void {
        this.startIndex = Math.max(0, this.startIndex - 4);
    }

    nextCards(): void {
        this.startIndex = Math.min(this.categories.length - 4, this.startIndex + 4);
    }

    getVisibleCards(): string[] {
        const itemsToDisplay = 4;
        const endIndex = Math.min(this.startIndex + itemsToDisplay, this.categories.length);
        return this.categories.slice(this.startIndex, endIndex);
    }
}
