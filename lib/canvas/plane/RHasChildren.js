Require('Observable','observable.Array').$(function(){
	Role('canvas.plane.RHasChildren',{
		has: {
			parent: {
				meta: Observable,
				is: 'rw'
			},
			children: {
				meta: observable.Array,
				is: 'rw',
				init: function(){
					return this.getChildViews();
				}
			}
		},
		after: {
			initialize: function(){
				ko.computed(function(){
					this.renderChildren(this.getChildren());
				},this);
			}
		},
		methods: {
			renderChildren: function(children){
				var container = $('<div></div>');
				children = children || this.getChildren();
				for(var i = 0; i < children.length; i++){
					children[i].setParent(this);
					container.append(children[i].render());
				}
				return container;
			},
			getChildViews: function(){}
		}
	});
});