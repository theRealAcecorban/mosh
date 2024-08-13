import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
	static passwordsMismatch(control: AbstractControl) : ValidationErrors | null {
		let newPassword = control.get('newPassword');
		let confirmPassword = control.get('confirmPassword');
		if(newPassword.value !== confirmPassword.value)
			return {
				passwordsMismatch: true
			};
		return null;
	}

	static invalidOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(control.value != 'password')
					resolve({ invalidOldPassword: true});
				else
					resolve(null);
			}, 2000);
		});
	}
}