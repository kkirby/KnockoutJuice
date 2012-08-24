Require('canvas.plane.RHasLayout','canvas.plane.RHasChildren').$(function(){
	Role('canvas.RRenderable',{
		does: [
			canvas.plane.RHasLayout,
			canvas.plane.RHasChildren
		],
		requires: ['render'],
		around: {
			render: function(original){
				var container = $('<div></div>');
				ko.computed(function(){
					container.css({
						position: 'absolute',
						left: this.getPosition().getX(),
						top: this.getPosition().getY(),
						width: this.getDimension().getWidth(),
						height: this.getDimension().getHeight(),
						overflow: 'hidden'
					});
				},this);
				container.append(original());
				return container;
			}
		},
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