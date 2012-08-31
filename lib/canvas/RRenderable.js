Require('canvas.plane.RHasLayout','canvas.plane.RHasChildren').$(function(){
	Role('canvas.RRenderable',{
		does: [
			canvas.plane.RHasLayout,
			canvas.plane.RHasChildren
		],
		has: {
			rendered: {
				meta: Observable,
				is: 'rw'
			}
		},
		requires: ['render'],
		methods: {
			getRendered: function(){
				if(!this.rendered()){
					this.render();
				}
				return this.rendered();
			}
		},
		around: {
			render: function(original){
				var container = $('<div></div>');
				ko.computed(function(){
					container.css({
						position: 'absolute',
						left: this.getPosition().getX(),
						top: this.getPosition().getY(),
						overflow: 'hidden'
					});
					if(this.getDimension().getWidth() == -1){
						container.css('right',0);
						container.css('width','auto');
					}
					else {
						container.css('width',this.getDimension().getWidth());
						container.css('right','auto');
					}
					if(this.getDimension().getHeight() == -1){
						container.css('bottom',0);
						container.css('height','auto');
					}
					else {
						container.css('height',this.getDimension().getHeight());
						container.css('bottom','auto');
					}
				},this);
				var content = original();
				content.css({
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				});
				container.append(content);
				this.setRendered(container);
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