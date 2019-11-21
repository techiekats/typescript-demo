import { IValidator } from "./Validators/IValidator";
import { Types } from "./Validators/Types";
import { PhoneNumberValidator } from "./Validators/PhoneNumberValidator";
import { EmailAddressValidator } from "./Validators/EmailAddressValidator";

export class ValidatorFactory {
    public createInstance (type : Types) : IValidator {
        switch (type) {
            case Types.PHONE_NUMBER_VALIDATOR:
                return new PhoneNumberValidator();
            case Types.EMAIL_ADDRESS_VALIDATOR:
                return new EmailAddressValidator();
        }
    }
}