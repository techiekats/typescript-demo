namespace Demo.Builder
{
    export class patternImplementation {
        /**
         *Constructor for the builder pattern class
         */
        constructor(public projectName : string) {
            console.log(`Project ${projectName} initialized`);
        }
    }
}