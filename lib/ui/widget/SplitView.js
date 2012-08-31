Require('canvas.Plane','canvas.RRenderable','Observable').$(function(){
	Class('ui.widget.SplitView',{
		does: [canvas.RRenderable],
		has: {
			leftView: {
				meta: Observable,
				is: 'rw'
			},
			rightView: {
				meta: Observable,
				is: 'rw'
			},
			seperateAt: {
				meta: Observable,
				is: 'rw'
			}
		},
		after: {
			initialize: function(properties){
				if(properties.leftView){
					this.setLeftView(properties.leftView);
				}
				if(properties.rightView){
					this.setRightView(properties.rightView);
				}
				if(properties.seperateAt){
					this.setSeperateAt(properties.seperateAt);
				}
			}
		},
		methods: {
			render: function(){
				var container = $([
					'<div class="SplitView-container">',
						'<div class="SplitView-left"></div>',
						'<div class="SplitView-right"></div>',
					'</div>'
				].join(''));
				
				$('.SplitView-left',container).css({
					position: 'absolute',
					top: 0,
					left: 0,
					bottom: 0
				});
				$('.SplitView-right',container).css({
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0
				});
				ko.computed(function(){
					var width = this.getSeperateAt();
					$('.SplitView-left',container).css('width',width);
					$('.SplitView-right',container).css('left',width);
				},this);
				ko.computed(function(){
					$('.SplitView-left',container).children().remove();
					if(this.getLeftView()){
						this.getLeftView().getDimension().setWidth(-1);
						this.getLeftView().getDimension().setHeight(-1);
						this.getLeftView().getPosition().setX(0);
						this.getLeftView().getPosition().setY(0);
						$('.SplitView-left',container).append(this.getLeftView().getRendered());
					}
				},this);
				ko.computed(function(){
					$('.SplitView-right',container).children().remove();
					if(this.getRightView()){
						this.getRightView().getDimension().setWidth(-1);
						this.getRightView().getDimension().setHeight(-1);
						this.getRightView().getPosition().setX(0);
						this.getRightView().getPosition().setY(0);
						$('.SplitView-right',container).append(this.getRightView().getRendered());
					}
				},this);
				return container;
			}
		}
	});
});