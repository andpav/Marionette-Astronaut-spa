import 'backbone';

class AstronautItem extends Backbone.Model{
    constructor(){
        super();
        this.defaults={
            name: '',
            date: '',
            days: '',
            mission: '',
            isMultiple: ''
        }
    }
}

export default AstronautItem