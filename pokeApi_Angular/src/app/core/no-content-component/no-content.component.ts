import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'no-content-component',
    templateUrl: './no-content.component.html',
    styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent implements OnInit {
    imgURL = 'assets/no-results-image.png';
    @Input()
    message: string = 'your search.';

    constructor() {}

    ngOnInit() {

    }
}