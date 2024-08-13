import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name:"summary"
})
export class SummaryPipe implements PipeTransform {
	transform(value: any, limit?: number) {
			if(!value)
				return null;
			let maxLength = (limit) ? limit : 50;
			if(value.length < maxLength)
				return value;
			return value.substr(0, maxLength) + '...';
	}
}