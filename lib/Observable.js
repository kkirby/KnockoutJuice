Require('observable.RGetAndSet','joose.argument.RTypeCheck').$(function(){
	Class('Observable',{
		isa: Joose.Managed.Attribute,
		does: [observable.RGetAndSet,joose.argument.RTypeCheck],
		methods: {
			initFromConfig: function(instance,config){
				var value = null;
				value = config[this.name];
				if(typeof value != undefined && this.init){
					if (Joose.O.isFunction(this.init) && !Joose.O.isClass(this.init)){
						value = this.init.call(instance, config, this.name);
					}
					else {
						value = this.init;
					}
				}
				value = ko.observable(value);
				this.setRawValueTo(instance, value);
			}
		}
	});
});