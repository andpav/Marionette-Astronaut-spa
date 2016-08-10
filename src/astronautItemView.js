import 'backbone';
import  'backbone.marionette';
import AstronautItem from './astronautItem';
export default  Marionette.ItemView.extend({
    model:AstronautItem,
    template:  "#table-item",
    tagName: "tr",
    triggers: {
        'click #remove': 'remove'
    }
});