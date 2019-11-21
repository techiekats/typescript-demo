import { IValidator } from "./IValidator";

export class PhoneNumberValidator implements IValidator{
    validate(text: string): boolean {
        if (text.length > 10) {
            return false;
        }
        return true;
    }
}