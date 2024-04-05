import { AbstractControl, NgForm, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

const patternPassword = new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8}');

export const customPasswordValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!patternPassword.test(value)) {
        return { customPasswordValidator: true };
    }

    return null;

}


export const crossPasswordMatchingValidator: ValidatorFn = (
    formGroupControl: AbstractControl<{ password: string, confirmarPassword: string }>
): ValidationErrors | null => {
    const password = formGroupControl.value.password;
    const confirmarPassword = formGroupControl.value.confirmarPassword;

    return password !== confirmarPassword ? { crossConfirmPassworError: true } : null;
};

export class PasswordMatcher implements ErrorStateMatcher {
    isErrorState(control: AbstractControl, form: NgForm): boolean {
        if (!control || !control.parent) {
            return false;
        }
        return control.parent.hasError('crossConfirmPassworError');
    }
}