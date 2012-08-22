Require('Observable','canvas.plane.properties.Position').$(function(){
	Role('canvas.plane.properties.RHasPosition',{
		has: {
			position: {
				meta: Observable,
				is: 'rw',
				type: canvas.plane.properties.Position,
				init: function(){
					return new canvas.plane.properties.Position;
				}
			}
		}
	});
});