var App = new Marionette.Application();

App.addRegions({
    "mainRegion": "#main"
});

App.module("Table", function (Table, App, Backbone, Marionette) {
    var TableItem = Backbone.Model.extend({
        defaults: {
            name: '',
            date: '',
            days: '',
            mission: '',
            isMultiple: ''
        }
    });

    var TableCollection = Backbone.Collection.extend({
        model: TableItem
    });

    var TableItemView = Marionette.ItemView.extend({
        template: "#table-item",
        tagName: "li",
        triggers: {
            'click #destroy': 'done'
        }
    });

    var TableListView = Marionette.CompositeView.extend({
        childView: TableItemView,
        childViewContainer: 'ul',
        template: "#table-list",
        ui: {
            nameInput: '#nameInput',
            dateInput: '#dateInput',
            daysInput: '#daysInput',
            missionInput: '#missionInput',
            isMultipleInput: '#isMultipleInput'
        },
        events: {
            "click #addButton": 'add'
        },
        childEvents: {
            'done': 'done'
        },
        templateHelpers: function () {
            return {
                tableLength: this.collection.length
            };
        },

        initialize: function () {
            var table =
                [
                    {
                        "name": "Sigmund Jähn",
                        "date": 272926800,
                        "days": 7,
                        "mission": "Sojus 31 / Sojus 29",
                        "isMultiple": false
                    },
                    {"name": "Ulf Merbold", "date": 438814800, "days": 10, "mission": "STS-9", "isMultiple": true},
                    {
                        "name": "Reinhard Furrer",
                        "date": 499467600,
                        "days": 7,
                        "mission": "STS-61-A (D1)",
                        "isMultiple": false
                    },
                    {
                        "name": "Ernst Messerschmid",
                        "date": 499467600,
                        "days": 7,
                        "mission": "STS-61-A (D1)",
                        "isMultiple": false
                    },
                    {
                        "name": "Klaus-Dietrich Flade",
                        "date": 700779600,
                        "days": 7,
                        "mission": "Sojus TM-14 / Sojus TM-13",
                        "isMultiple": false
                    },
                    {
                        "name": "Hans Schlegel",
                        "date": 735768000,
                        "days": 9,
                        "mission": "STS-55 (D2)",
                        "isMultiple": true
                    },
                    {
                        "name": "Ulrich Walter",
                        "date": 735768000,
                        "days": 9,
                        "mission": "STS-55 (D2)",
                        "isMultiple": false
                    },
                    {
                        "name": "Thomas Reiter",
                        "date": 810072000,
                        "days": 179,
                        "mission": "Sojus TM-22 / Euromir 95",
                        "isMultiple": true
                    },
                    {
                        "name": "Reinhold Ewald",
                        "date": 855522000,
                        "days": 19,
                        "mission": "Sojus TM-25 / Sojus TM-24",
                        "isMultiple": false
                    },
                    {"name": "Gerhard Thiele", "date": 950216400, "days": 11, "mission": "STS-99", "isMultiple": false},
                    {
                        "name": "Alexander Gerst",
                        "date": 1401224400,
                        "days": 165,
                        "mission": "Sojus TMA-13M / ISS-Expedition 40 /ISS-Expedition 41",
                        "isMultiple": false
                    }
                ];

            table.forEach(function (entry) {

                var date = new Date(parseInt(entry.date));
                entry.date = date.toLocaleDateString();
            });

            this.collection.set(table);

        },

        add: function () {

           // var date = new Date(parseInt(this.ui.dateInput.val()));

            this.collection.add({
                name: this.ui.nameInput.val(),
               // date: date.toLocaleDateString(),
                 date: this.ui.dateInput.val(),
                days: this.ui.daysInput.val(),
                mission: this.ui.missionInput.val(),
                isMultiple: this.ui.isMultipleInput.val()

            });
            this.render();
        },
        done: function (child) {
            this.collection.remove(child.model);
            this.render();
        }

    });

    Table.addInitializer(function () {

        var table = [];
        var collection = new TableCollection(table);
        App.mainRegion.show(new TableListView({collection: collection}));


    });
});

App.start();
