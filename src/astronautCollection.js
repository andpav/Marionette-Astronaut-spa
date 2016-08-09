import 'backbone';
import AstronautItem from './astronautItem';

class AstronautCollection extends Backbone.Collection{
    constructor(){
        super();
        this.model= new AstronautItem();
    }
}

export default AstronautCollection