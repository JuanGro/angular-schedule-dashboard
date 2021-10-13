import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appValidateEqual][formControlName],[appValidateEqual][formControl],[appValidateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }
    ]
})
export class EqualValidatorDirective implements Validator {
    constructor( @Attribute('appValidateEqual') public appValidateEqual: string,
        @Attribute('reverse') public reverse: string) {

    }

    private get isReverse() {
        if (!this.reverse) {return false; }
        return this.reverse === 'true' ? true : false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value
        const v = c.value;

        // control vlaue
        const e = c.root.get(this.appValidateEqual);

        // value not equal
        if (e && v !== e.value && !this.isReverse) {
          return {
            appValidateEqual: false
          };
        }

        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['appValidateEqual'];
            if (!Object.keys(e.errors).length) {e.setErrors(null); }
        }

        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                appValidateEqual: false
            });
        }

        return null;
    }
}
