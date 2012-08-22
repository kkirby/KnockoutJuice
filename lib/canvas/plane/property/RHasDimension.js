Require('Observable','canvas.plane.property.Dimension').$(function(){
	Role('canvas.plane.property.RHasDimension',{
		requires: ['getDimension','setDimension'],
		has: {
			dimension: {
				meta: Observable,
				is: 'rw',
				type: canvas.plane.property.Dimension,
				init: function(){
					return new canvas.plane.property.Dimension;
				}
			}
		}
	});
});