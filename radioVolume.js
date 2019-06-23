jQuery(document)
		.ready(
				function($) {
					$('.input').bind("keyup", function() {
						volume();
					});
					$('.input').bind("change", function() {
						volume();
					});
					$('.radio').bind("click", function() {
						volume();
					});
					$('.copy').bind("click", function() {
						copy();
					});
					$('[data-toggle="tooltip"]').tooltip();
					function volume() {
						var length = Number($('#length').val());
						var breadth = Number($('#breadth').val())
						var width = Number($('#width').val());
						var multiplier = 0.5;
						if (!(length == 0 || breadth == 0 || width == 0)) {
							if (document.getElementById('genericId').checked
									|| document.getElementById('renalId').checked) {
								multiplier = 0.523;
							} else if (document.getElementById('urinaryId').checked) {
								multiplier = 0.625;
							} else if (document.getElementById('testicularId').checked) {
								multiplier = 0.71;
							}
							var result = ((length * breadth * width * multiplier))
									.toFixed(3);
							$('#totalVolume').html(result);
							document.getElementById('totalVolume').value = result;
							copy();
						}

					}
					function copy() {
						var copy = document.getElementById("totalVolume");
						copy.select();
						document.execCommand("copy");
						$('totalVolume').blur();
						$('#container').toast('show');
						$('#copyAlert').css('display', 'inline-block');
						setTimeout(function() {
							$('#copyAlert').css('display', 'none');
						}, 1000);
					}
				});