import {wizard} from './Builder/wizard';
import {patternFollower} from './Builder/patternFollower';
export class builderClient {
    public constructUsingWizard () : void {
        let x: wizard = new wizard('Schaumburg project');
        x.Foundation = '';
        x.PaintColor = 'White';
        x.RoofColor = 'Red';
    }
    public constructUsingBuilder () : void {
        let y: patternFollower = new patternFollower ('Rosemont mall');
    }
}
