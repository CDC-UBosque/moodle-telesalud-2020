if (typeof jQuery == 'undefined') {
    document.write(unescape("%3Cscript src='../src/lib/jquery.1.9.1.min.js' type='text/javascript'%3E%3C/script%3E"));
}
		
$(function() {

	$('article').each(function() {

		const _this = $(this);

		_this.readingTime({
			readingTimeTarget: _this.find('.eta'),
			wordCountTarget: _this.find('.words'),
			success: function(data) {
				console.log(data);
			},
			error: function(data) {
				_this.find('.eta').remove();
			}
		});
	});
});