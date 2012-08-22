Require('canvas.plane.property.RHasDimension','canvas.plane.property.RHasPosition').$(function(){
	Role('canvas.plane.RHasLayout',{
		does: [canvas.plane.property.RHasDimension, canvas.plane.property.RHasPosition]
	});
});