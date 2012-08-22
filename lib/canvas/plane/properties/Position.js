Require('Observable').$(function(){
	Class('canvas.plane.properties.Position',{
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