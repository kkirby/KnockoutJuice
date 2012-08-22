Require('observable.RGetAndSet','joose.argument.RTypeCheck').$(function(){
	Class('observable.Computed',{
		isa: Joose.Managed.Attribute,
		does: [observable.RGetAndSet,joose.argument.RTypeCheck],
		have: {
			set: false,
			get: false
		},
		methods: {
			initFromConfig: function(instance, config){
				var options = {owner: instance};
				if(this.hasGetter && this.get){
					if(Joose.O.isFunction(this.get)){
						options.read = this.get;
					}
					else {
						throw new Error('The getter must be a function.');
					}
				}
				else if(this.hasGetter && !this.get){
					throw new Error('A getter is required for this computed value.');
				}
				if(this.hasSetter && this.set){
					if(Joose.O.isFunction(this.set)){
						options.write = this.set;
					}
					else {
						throw new Error('The setter must be a function.');
					}
				}
				else if(this.hasSetter && !this.set){
					throw new Error('A setter is required for this computed value.');
				}
				value = ko.computed(options);
				this.setRawValueTo(instance, value);
			}
		}
	});
});