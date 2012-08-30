Require('canvas.RRenderable').$(function(){
	Class('canvas.Plane',{
		does: [canvas.RRenderable],
		methods: {
			render: function(){
				var root = $('<div/>');
				root.appendTo('body');
				ko.computed(function(){
					root.children().remove();
					root.append(this.getChildrenRendred());
				},this);
				return root;
			}
		}
	});
});