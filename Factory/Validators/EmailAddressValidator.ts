import { IValidator } from "./IValidator";

export class EmailAddressValidator implements IValidator{
    validate(text: string): boolean {
        if (text.indexOf('@') !== 0) {
            return true;
        }
        return false;
    }
}