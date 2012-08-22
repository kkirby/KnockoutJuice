Require('Observable').$(function(){
	Class('canvas.plane.property.Position',{
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
			},
			relativeTo: {
				meta: Observable,
				is: 'rw'
			}
		}
	});
});