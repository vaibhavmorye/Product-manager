import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<String> = new EventEmitter();

    ngOnchanges() {
        this.starWidth = this.rating * 86 / 5;
    }
    
    onClick(): void {
        this.ratingClicked.emit(`this is rating on click :${this.rating}: `);
    }

}