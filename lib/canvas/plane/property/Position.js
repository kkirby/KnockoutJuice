Require('Observable').$(function(){
	Class('canvas.plane.property.Position',{
		has: {
			x: {
				meta: Observable,
				is: 'rw',
				type: 'number',
				init: function(){
					return 0;
				}
			},
			y: {
				meta: Observable,
				is: 'rw',
				type: 'number',
				init: function(){
					return 0;
				}
			},
			relativeTo: {
				meta: Observable,
				is: 'rw'
			}
		}
	});
});