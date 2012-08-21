Require('Observable').$(function(){
	Class('Position',{
		has: {
			x: {
				meta: Observable,
				is: 'rw',
				type: 'number'
			},
			y: {
				meta: Observable,
				is: 'rw',
				type: 'number'
			}
		}
	});
});