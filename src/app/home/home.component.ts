import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {
    }
    blogs = [];
    blog = {};
    ngOnInit() {
        this.blogs = JSON.parse(localStorage.getItem('blogs'));
        // this.getBlog = JSON.parse(localStorage.getItem(localStorage.key(2)));
        this.blog = this.blogs[0];
    }

}
