Require('canvas.plane.RHasLayout').$(function(){
	Role('canvas.RRenderable',{
		does: [canvas.plane.RHasLayout],
		requires: ['render'],
		after: {
			initialize: function(properties){
				if(properties.width){
					this.getDimension().setWidth(properties.width);
				}
				if(properties.height){
					this.getDimension().setHeight(properties.height);
				}
				if(properties.x){
					this.getPosition().setX(properties.x);
				}
				if(properties.y){
					this.getPosition().setY(properties.y);
				}
			}
		}
	});
});