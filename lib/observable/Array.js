Require('observable.RGetAndSet','joose.argument.RTypeCheck').$(function(){
	Class('observable.Array',{
		isa: Joose.Managed.Attribute,
		does: [
			{
				role: observable.RGetAndSet,
				exclude: 'getSetter'
			},
			joose.argument.RTypeCheck
		],
		have: {
			genericType: false
		},
		methods: {
			wrapArray: function(value){
				Joose.O.each(
					ko.observableArray.fn,
					function(func,name){
						var actualValue = value();
						var oldFunc = actualValue[name];
						var newFunc = value[name] = actualValue[name] = function(){
							actualValue[name] = oldFunc;
							var ret = func.apply(value,arguments);
							actualValue[name] = newFunc;
							return ret;
						}
					}
				);
			},
			initFromConfig: function(instance,config){
				var value = null;
				value = config[this.name];
				if(!value && this.init){
					if (Joose.O.isFunction(this.init) && !Joose.O.isClass(this.init)){
						value = this.init.call(instance, config, this.name);
					}
					else {
						value = this.init;
					}
				}
				value = ko.observableArray(value || []);
				this.wrapArray(value);
				this.setRawValueTo(instance, value);
			},
			getSetter: function(){
				var me = this;
				return function(value){
					var value = this[me.name](value);
					me.wrapArray(this[me.name]);
				}
			}
		}
	});
});