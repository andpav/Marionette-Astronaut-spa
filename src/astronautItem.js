import 'backbone';

export default Backbone.Model.extend({
    defaults: {
        name: '',
        date: '',
        days: '',
        mission: '',
        isMultiple: ''
    }
});