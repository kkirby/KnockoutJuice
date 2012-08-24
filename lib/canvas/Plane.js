Require('canvas.RRenderable').$(function(){
	Class('canvas.Plane',{
		does: [canvas.RRenderable],
		methods: {
			render: function(){
				var root = $('<div></div>');
				root.append(this.renderChildren())
				root.appendTo('body');
			}
		}
	});
});