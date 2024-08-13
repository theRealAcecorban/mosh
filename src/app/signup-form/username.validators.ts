import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
	static containsSpace(control: AbstractControl) : ValidationErrors | null {
		console.log(control);
		if((control.value as string).indexOf(' ') >= 0)
			return { containsSpace: true };
		return null;
	}

	static userExists(control: AbstractControl) : Promise<ValidationErrors | null> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(control);
				if(control.value == 'jeremy')
				{
					console.log("User exists");
					resolve({ userExists: true});
				}
				else
				{
					console.log("NULL");
					resolve(null);
				}
			}, 2000);
		});
	}
}