Require('Observable','observable.Array').$(function(){
	Role('canvas.plane.RHasChildren',{
		has: {
			children: {
				meta: observable.Array,
				is: 'rw',
				init: function(){
					return this.getChildViews();
				}
			}
		},
		methods: {
			getChildrenRendred: function(children){
				var returnRendered = [];
				children = children || this.getChildren();
				for(var i = 0; i < children.length; i++){
					returnRendered.push(children[i].getRendered());
				}
				return returnRendered;
			},
			getChildViews: function(){}
		}
	});
});