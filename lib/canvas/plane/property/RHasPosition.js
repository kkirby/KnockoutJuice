Require('Observable','canvas.plane.property.Position').$(function(){
	Role('canvas.plane.property.RHasPosition',{
		has: {
			position: {
				meta: Observable,
				is: 'rw',
				type: canvas.plane.property.Position,
				init: function(){
					return new canvas.plane.property.Position;
				}
			}
		}
	});
});