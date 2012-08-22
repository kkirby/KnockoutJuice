Role('joose.argument.RTypeCheck',{
	have: {
		type: false
	},
	around: {
		getSetter: function(original){
			var me = this;
			original = original.apply(this,[]);
			if(this.type){
				return function(value){
					Helper.ValidateArguments([me.type],value);
					original.apply(this,[value]);
				}
			}
			else {
				return original;
			}
		}
	}
})