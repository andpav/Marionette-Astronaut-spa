import 'backbone';
import  'backbone.marionette';
import AstronautCompositeView from './astronautCompositeView';
import AstronautItem from './astronautItem';
import AstronautCollection from './astronautCollection';
import input from "../input.json";

export default  Marionette.LayoutView.extend({
    el: 'body',
    initialize: function () {

        input.forEach(function (entry) {

            var date = new Date(parseInt(entry.date) * 1000);
            entry.date = date.toLocaleDateString();
        });

        var astronautList = new AstronautCollection(input);

        this.mainRegion.show(new AstronautCompositeView({collection: astronautList}));
    },
    regions: {
        mainRegion: "#main"
    }
})
