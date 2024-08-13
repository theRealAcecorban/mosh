import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
	selector: 'courses',
	template: `
		<h1>Click it</h1>
		<span (click)="toggleStar()" [class]="(selected ? selectedClass : unselectedClass)" style="font-size:3em; cursor:pointer;"></span>
	`	
})
export class CoursesComponent {
	selected = true;
	selectedClass = "bi-star-fill";
	unselectedClass = "bi-star";
	text="Lorem ipsum odor amet, consectetuer adipiscing elit. Quisque rutrum ultrices lobortis condimentum fusce velit pretium ante. Arcu tortor ligula mi cras scelerisque imperdiet. Nascetur sodales dis, justo suspendisse venenatis sed. Ac dolor phasellus vulputate; ac nulla tempus nunc nec magna. Fringilla ullamcorper sit et leo laoreet urna ante luctus. Consectetur nunc finibus tempus integer in elementum tincidunt. Elit gravida ligula egestas, ullamcorper facilisis aenean integer."

	toggleStar() {
		this.selected = !this.selected;
	}
}