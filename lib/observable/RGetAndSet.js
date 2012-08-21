Role('observable.RGetAndSet',{
	override: {
		getGetter: function(){
			var me = this;
			return function(){
				return this[me.name]();
			}
		},
		getSetter: function(){
			var me = this;
			return function(value){
				this[me.name](value);
			}
		}
	}
});