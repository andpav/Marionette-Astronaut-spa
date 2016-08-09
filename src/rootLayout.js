import 'backbone';
import  'backbone.marionette';
import AstronautCompositeView from './astronautCompositeView';

export default  Marionette.LayoutView.extend({
    el:'body',
    initialize: function() {
        this.mainRegion.show(new AstronautCompositeView());
    },
    regions: {
        mainRegion: "#main"
    }
})
