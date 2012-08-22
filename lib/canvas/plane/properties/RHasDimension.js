Require('Observable','canvas.plane.properties.Dimension').$(function(){
	Role('canvas.plane.properties.RHasDimension',{
		requires: ['getDimension','setDimension'],
		has: {
			dimension: {
				meta: Observable,
				is: 'rw',
				type: canvas.plane.properties.Dimension,
				init: function(){
					return new canvas.plane.properties.Dimension;
				}
			}
		}
	});
});