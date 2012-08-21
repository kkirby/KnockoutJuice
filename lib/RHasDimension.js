Require('Dimension','Observable').$(function(){
	Role('RHasDimension',{
		requires: ['getDimension','setDimension'],
		has: {
			dimension: {
				is: 'rw',
				init: function(){
					return new Dimension;
				},
				meta: Observable,
				type: Dimension
			}
		}
	});
});