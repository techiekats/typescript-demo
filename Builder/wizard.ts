export class wizard 
{
    private foundation: string;
    private paintColor: string;
    private roofColor : string;
    constructor(public projectName: string) {
        console.log(
            'Object initialized'
        );
    }
    public set Foundation (value: string) {
        this.foundation = value;
    }
    public set PaintColor (value : string) {
        this.paintColor = value;
    }
    public set RoofColor (value: string) {
        this.roofColor = value;
    }
}