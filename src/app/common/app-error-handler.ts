import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
	handleError(error) {
		console.error("An unexpected error occurred.");
		console.error(error);
	}
}