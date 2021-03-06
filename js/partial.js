Function.prototype.partial = function() {
	var fn = this, args  = Array.prototype.slice.call(arguments);

	return function() {
		fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
	};
	
};
