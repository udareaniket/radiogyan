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
						radioSelect();
					});
					$('.copy').bind("click", function() {
						copy();
					});
					$('[data-toggle="tooltip"]').tooltip();
					var multiplier = 0.5;
					document.getElementById('genericId').click();
					function radioSelect() {
						if (document.getElementById('genericId').checked) {
							document.getElementById('selectedType').innerHTML = 'Generic Ellipsoid Volume';
							multiplier = 0.523;
						} else if (document.getElementById('urinaryId').checked) {
							document.getElementById('selectedType').innerHTML = 'Urinary Bladder Volume';
							multiplier = 0.625;
						} else if (document.getElementById('testicularId').checked) {
							document.getElementById('selectedType').innerHTML = 'Testicular Volume';
							multiplier = 0.71;
						} else if (document.getElementById('renalId').checked) {
							document.getElementById('selectedType').innerHTML = 'Renal Volume';
							multiplier = 0.523;
						} else if (document.getElementById('prostateId').checked) {
							document.getElementById('selectedType').innerHTML = 'Prostate Volume';
							multiplier = 0.523;
						} else if (document.getElementById('thyroidId').checked) {
							document.getElementById('selectedType').innerHTML = 'Thyroid Volume';
							multiplier = 0.523;
						}
						volume();
					}
					function volume() {
						var length = Number($('#length').val());
						var breadth = Number($('#breadth').val())
						var width = Number($('#width').val());
						console.log($('#length')[0].value)
						if (!($('#length')[0].value == ''
								|| $('#breadth')[0].value == '' || $('#width')[0].value == '')) {
							var result = ((length * breadth * width * multiplier))
									.toFixed(3);
							$('#totalVolume').html(result);
							document.getElementById('totalVolume').value = result;
							$('#copyButton').prop("disabled", false);
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
						}, 500);
					}
				});