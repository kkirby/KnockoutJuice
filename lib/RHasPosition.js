Require('Observable','Coordinates').$(function(){
	Role('RHasPosition',{
		has: {
			position: {
				meta: Observable,
				is: 'rw',
				type: Position;
				init: function(){
					return new Position;
				}
			}
		}
	})
});