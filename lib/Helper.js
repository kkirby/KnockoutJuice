/**
 * @function
 * @class Helper class
 */
Class('Helper',{
	my: {
		has: {
			required: {
				init: [],
				is: 'r'
			}
		},
		methods: {
			ValidateArguments: function(){
				var types = arguments[0];
				for(var i = 1; i < arguments.length; i++){
					var type = types[i - 1];
					if(type == 'number'){
						if(typeof arguments[i] !== 'number'){
							throw new Error('Passed argument ' + arguments[i] + ' must be a number.');
						}
						else {
							return true;
						}
					}
					if(type == 'string'){
						if(typeof arguments[i] !== 'string'){
							throw new Error('Passed argument ' + arguments[i] + ' must be a string.');
						}
						else {
							return true;
						}
					}
					if(Joose.O.isInstance(arguments[i])){
						if(!arguments[i].meta.isa(type)){
							throw new Error('Passed argument ' + arguments[i].meta.name + ' must be an instance of ' + String(type));
						}
					}
					else {
						throw new Error('Passed argument ' + String(arguments[i]) + ' must be a class instance.');
					}
				}
				return true;
			},
			Require: function(){
				$(arguments).each(function(){
					var file = this;
					file = file.replace(/\./g,'/');
					if(Joose.A.exists(Helper.getRequired(),file)){
						return true;
					}
					$('<script type="text/javascript" src="lib/' + file + '.js"></script>').appendTo('head');
					Helper.getRequired().push(file);
				});
				return Helper;
			},
			'$': function(callback){
				$(callback);
			}
		}
	}
});

var Require = Helper.Require;