import 'backbone';
import  'backbone.marionette';
import AstronautItem from './astronautItem';
import AstronautCollection from './astronautCollection';
import AstronautItemView from './astronautItemView';

export default  Marionette.CompositeView.extend({
    collection: AstronautCollection,
    childView: AstronautItemView,
    childViewContainer: 'tbody',
    template: "#table-list",
    ui: {
        modalContent:".modal_content",
        nameInput: '#nameInput',
        dateInput: '#dateInput',
        daysInput: '#daysInput',
        missionInput: '#missionInput',
        isMultipleInput: '#isMultipleInput',
        add_button: '#add_button'
    },
    events: {
        "click #add_button": 'add',
        "click #new_button": 'toggle'
    },
    childEvents: {
        'remove': 'remove'
    },

    templateHelper() {
        return {
            tableLength: this.collection.length
        }
    },

    toggle(){

        this.ui.modalContent.toggleClass("hidden_content");

    },

    add: function () {

       if (this.ui.nameInput.val() !== '' ||
           this.ui.dateInput.val() !== '' ||
           this.ui.daysInput.val() !== '' ||
           this.ui.missionInput.val() !== '' ||
           this.ui.isMultipleInput.val() !== '' ) {
           this.collection.add({
               name: this.ui.nameInput.val(),
               date: this.ui.dateInput.val(),
               days: this.ui.daysInput.val(),
               mission: this.ui.missionInput.val(),
               isMultiple: this.ui.isMultipleInput.val()

           });

           this.render();
       }

    },

    remove: function (child) {
        this.collection.remove(child.model);
        this.render();
    }
});
