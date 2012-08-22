Require('canvas.plane.properties.RHasDimension','canvas.plane.properties.RHasPosition').$(function(){
	Role('canvas.plane.RHasLayout',{
		does: [canvas.plane.properties.RHasDimension, canvas.plane.properties.RHasPosition]
	});
});