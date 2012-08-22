Require('Observable').$(function(){
	Class('canvas.plane.property.Dimension',{
		has: {
			width: {
				meta: Observable,
				init: 0,
				is: 'rw',
				type: 'number'
			},
			height: {
				meta: Observable,
				init: 0,
				is: 'rw',
				type: 'number'
			}
		}
	});
});