import 'backbone';
import  'backbone.marionette';

class AstronautItemView extends Marionette.ItemView {

    constructor() {
        super();
        this.template = "#table-item";
        this.tagName = "li";
        this.triggers = {
            'click #destroy': 'done'
        };
    }
}

export default AstronautItemView