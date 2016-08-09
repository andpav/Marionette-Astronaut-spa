import 'backbone';
import  'backbone.marionette';
import RootLayout from './rootLayout';

var MyApp = Marionette.Application.extend({
    initialize:function(){
        this.setRootLayout();
    },
    setRootLayout: function () {
        this.root = new RootLayout();
    }
});



(new MyApp()).start();