Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean'),
});

//If this was a real app, I'd be sending API calls to create the model, and not use the Fixture data below

Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Learn Ember.js',
		isCompleted: true,
	},
	{
		id: 2,
		title: '???',
		isCompleted: false,	
	},
	{
		id: 3,
		title: 'Profit!',
		isCompleted: false,
	},
];