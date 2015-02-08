(function($) {
$.fn.selectext = function() {
	var _sel = function($ob) {
		var _range;

		if (document.body.createTextRange) {
			_range = document.body.createTextRange();
			_range.moveToElementText($ob);
			_range.select();
		} else if (window.getSelection) {
			var _selection = window.getSelection();
			_range = document.createRange();
			_range.selectNodeContents($ob);
			_selection.removeAllRanges();
			_selection.addRange(_range);
		}
	};

	return this.each(function() {
		_sel(this);
		return true;
	});
};
}(jQuery));
