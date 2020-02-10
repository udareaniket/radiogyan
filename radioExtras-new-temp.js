jQuery(document).ready(function($) {
	$('.computeTirads').bind("click", function() {
		computeTirads();
	});
});
jQuery(document).ready(function($) {
	$('.computeSize').bind("change", function() {
		computeSize();
	});
});
jQuery(document).ready(function($) {
	$('.addTirads').bind("click", function() {
		addNodule();
	});
});
jQuery(document).ready(function($) {
	clearTirads();
	$('.clearTirads').bind("click", function() {
		clearTirads();
	});
});
jQuery(document).ready(function ($) {
	console.log($('[data-toggle="tooltip"]'))
	})
var currentNodule = 0;
var noduleList = [];
function addNodule() {
	currentNodule++;
	document.getElementById("tirads").reset();
	document.getElementById('tirads').scrollIntoView({
		behavior : 'smooth',
	});
}
function clearTirads() {
	currentNodule = 0;
	noduleList = [];
	document.getElementById("tirads").reset();
	document.getElementById("solution").innerHTML = "";
	var result0 = document.getElementById('idresult0');
	var result1 = document.getElementById('idresult1');
	var result2 = document.getElementById('idresult2');
	var result3 = document.getElementById('idresult3');
	var result4 = document.getElementById('idresult4');
	var comp = document.getElementsByName('comp');
	var compCard = document.getElementById('compCard');
	var echo = document.getElementsByName('echo');
	var echoCard = document.getElementById('echoCard');
	var shape = document.getElementsByName('shape');
	var shapeCard = document.getElementById('shapeCard');
	var margin = document.getElementsByName('margin');
	var marginCard = document.getElementById('marginCard');
	var foci = document.getElementsByName('foci');
	var fociCard = document.getElementById('fociCard');
	result0.style = "opacity:0.2";
	result1.style = "opacity:0.2";
	result2.style = "opacity:0.2";
	result3.style = "opacity:0.2";
	result4.style = "opacity:0.2";
	echoCard.style = "opacity:1";
	shapeCard.style = "opacity:1";
	marginCard.style = "opacity:1";
	fociCard.style = "opacity:1";
	for (var i = 0; i < echo.length; i++) {
			echo[i].disabled = false;
	}
	for (var i = 0; i < shape.length; i++) {
		shape[i].disabled = false;
	}
	for (var i = 0; i < margin.length; i++) {
		margin[i].disabled = false;
	}
	for (var i = 0; i < foci.length; i++) {
		foci[i].disabled = false;
	}
	document.getElementById('finalScore').style = "display:none";
	location.hash = "#tirads-calculator";
}
function computeSize(){
	var size0 = parseFloat(document.getElementsByName('size0')[0].value);
	var size1 = parseFloat(document.getElementsByName('size1')[0].value);
	var size2 = parseFloat(document.getElementsByName('size2')[0].value);
	var highestSize = Math.max(size0,size1,size2);
	var twofive = document.getElementById('twofive');
	var onefive1 = document.getElementById('onefive1');
	var onefive2 = document.getElementById('onefive2');
	var one = document.getElementById('one1');
	var one2 = document.getElementById('one2');
	var zeroFive = document.getElementById('zeroFive');
	
	twofive.style="display:none";
	onefive1.style="display:none";
	onefive2.style="display:none";
	one1.style="display:none";
	one2.style="display:none";
	if(highestSize>=2.5){
		twofive.style="display:inline-block";
	}
	if(highestSize>=1.5){
		onefive1.style="display:inline-block";
		onefive2.style="display:inline-block";
	}
	if(highestSize>=1){
		one1.style="display:inline-block";
		one2.style="display:inline-block";
	}
	if(highestSize>=0.5){
		zeroFive.style="display:inline-block";
	}
	
}
function computeTirads(fromDiv) {
	if (parseInt(fromDiv) > 3) {
		// document.getElementById('tiradsDiv'+fromDiv).scrollIntoView({
		// behavior: 'smooth', });
	}
	var nodule = {
		size0 : "",
		size1 : "",
		size2 : "",
		comp : "",
		echo : "",
		shape : "",
		margin : "",
		foci : []
	};
	var total = 0;
	var comp = document.getElementsByName('comp');
	var echo = document.getElementsByName('echo');
	var echoCard = document.getElementById('echoCard');
	var shape = document.getElementsByName('shape');
	var shapeCard = document.getElementById('shapeCard');
	var margin = document.getElementsByName('margin');
	var marginCard = document.getElementById('marginCard');
	var foci = document.getElementsByName('foci');
	var fociCard = document.getElementById('fociCard');
	var cysticSelected = false;
	var spongiSelected = false;
	for (var i = 0; i < comp.length; i++) {
		if (comp[i].checked) {
			total += parseInt(comp[i].value);
			nodule.comp = (comp[i].alt);
			var scrollToSolition = document.getElementById('solution');
			if("Cystic or almost completely cystic (0 points)" === (nodule.comp)){
				cysticSelected = true;
				echoCard.style = "opacity:0.2";
				shapeCard.style = "opacity:0.2";
				marginCard.style = "opacity:0.2";
				fociCard.style = "opacity:0.2";
				window.scrollTo({top: scrollToSolition.offsetTop,
							  left: scrollToSolition.offsetLeft,
							  behavior: 'smooth'
							});
			}else if("Spongiform (0 points)" === nodule.comp){
				spongiSelected = true;
				echoCard.style = "opacity:0.2";
				shapeCard.style = "opacity:0.2";
				marginCard.style = "opacity:0.2";
				fociCard.style = "opacity:0.2";
				window.scrollTo({top: scrollToSolition.offsetTop,
					  left: scrollToSolition.offsetLeft,
					  behavior: 'smooth'
					});
			}else{
				echoCard.style = "opacity:1";
				shapeCard.style = "opacity:1";
				marginCard.style = "opacity:1";
				fociCard.style = "opacity:1";
			}
		}
	}
	for (var i = 0; i < echo.length; i++) {
		if(cysticSelected == true || spongiSelected ==true){
			echo[i].disabled = true;
			echo[i].checked = false;
		}else{
			echo[i].disabled = false;
			if (echo[i].checked) {
				total += parseInt(echo[i].value);
				nodule.echo = (echo[i].alt);
			}
		}
		
	}
	for (var i = 0; i < shape.length; i++) {
		if(cysticSelected == true || spongiSelected ==true){
			shape[i].disabled = true;
			shape[i].checked = false;
		}else{
			shape[i].disabled = false;
		if (shape[i].checked) {
			total += parseInt(shape[i].value);
			nodule.shape = (shape[i].alt);
		}
		}
	}
	for (var i = 0; i < margin.length; i++) {
		if(cysticSelected == true || spongiSelected ==true){
			margin[i].disabled = true;
			margin[i].checked = false;
		}else{
			margin[i].disabled = false;
		if (margin[i].checked) {
			total += parseInt(margin[i].value);
			nodule.margin = (margin[i].alt);
		}
		}
	}
	for (var i = 0; i < foci.length; i++) {
		if(cysticSelected == true || spongiSelected ==true){
			foci[i].disabled = true;
			foci[i].checked = false;
		}else{
			foci[i].disabled = false;
		if (foci[i].checked) {
			total += parseInt(foci[i].value);
			nodule.foci.push(foci[i].alt);
		}
		}
	}
	nodule.total = total;
	noduleList[currentNodule] = nodule;
	document.getElementById("solution").innerHTML = "";
	var solution = document.getElementById("solution");
	var header = document.createElement("h3");
	var headText = document.createTextNode("Findings:");
	header.appendChild(headText);
	solution.appendChild(header);
	var resultLeftRight = document.createElement("div");
	resultLeftRight.classList.add("row");
	resultLeftRight.classList.add("card-body");
	resultLeftRight.style = "border: 1px solid #bee5eb;border-radius: .25rem;";
	var resultLeft = document.createElement("div");
	var noduleUl = document.createElement("ul");
	resultLeft.classList.add("col-md-8");
	resultLeft.classList.add("col-sm-12");
	var resultRight = document.createElement("div");
	resultRight.classList.add("col-md-4");
	resultRight.classList.add("col-sm-12");
	noduleUl.style = "list-style-type:none;margin:0;";
	noduleUl.classList.add("list-group");
	for (var number = 0; number < noduleList.length; number++) {
		var noduleLi = document.createElement("li");
		if (new String(noduleList[number].comp).valueOf() === new String(
				"Cystic or almost completely cystic (0 points)").valueOf()) {
			var cystDiv = document.createElement("div");
			var cystText = document
					.createTextNode("Warning! Cystic nodules are almost always benign. Check carefully the features selected above.");
			cystDiv.appendChild(cystText);
			cystDiv.style = "border: 1px solid transparent;border-radius: .25rem;padding: .75rem 1.25rem;background-color:#fff3cd;color:#856404;border-color: #f5c6cb;";
			noduleLi.appendChild(cystDiv);
		} else if (new String(noduleList[number].comp).valueOf() === new String(
				"Spongiform (0 points)").valueOf()) {
			noduleList[number].total = 0;
			var spongDiv = document.createElement("div");
			var spongText = document
					.createTextNode("Warning! For a spongiform nodule, no other features contribute points!");
			spongDiv.appendChild(spongText);
			spongDiv.classList.add('alert');
			spongDiv.classList.add('alert-warning');
			//spongDiv.style = "border: 1px solid transparent;border-radius: .25rem;padding: .75rem 1.25rem;background-color:#fff3cd;color:#856404;border-color: #f5c6cb;";
			noduleLi.appendChild(spongDiv);
		} else if (new String(noduleList[number].echo).valueOf() === new String(
				"Anechoic (0 points)").valueOf()) {
			var aneDiv = document.createElement("div");
			var aneText = document
					.createTextNode("Warning! Anechoic applies to cystic or almost completely cystic nodules.");
			aneDiv.appendChild(aneText);
			aneDiv.style = "border: 1px solid transparent;border-radius: .25rem;padding: .75rem 1.25rem;background-color:#fff3cd;color:#856404;border-color: #f5c6cb;";
			noduleLi.appendChild(aneDiv);
		}
		var noduleDiv = document.createElement("div");
		var noduleText = document.createTextNode('Nodule '
				+ parseInt(number + 1) + ': ');
		//noduleDiv.appendChild(noduleText);
		//noduleDiv.style = "font-weight:bold;";
		noduleLi.appendChild(noduleDiv);
		var totalScoreDiv = document.createElement("div");
		var totalText = document.createTextNode("TIRADS Score: "
				+ noduleList[number].total);
		totalScoreDiv.appendChild(totalText);
		totalScoreDiv.style = "font-weight:bold;padding-left: 0.75rem;";
		noduleLi.appendChild(totalScoreDiv);
		var categoryDiv = document.createElement("div");
		var cat = "";
		var recommendation = "";
		var result0 = document.getElementById('idresult0');
		var result1 = document.getElementById('idresult1');
		var result2 = document.getElementById('idresult2');
		var result3 = document.getElementById('idresult3');
		var result4 = document.getElementById('idresult4');
		result0.style = "opacity:0.2";
		result1.style = "opacity:0.2";
		result2.style = "opacity:0.2";
		result3.style = "opacity:0.2";
		result4.style = "opacity:0.2";
		//= showResult(noduleList[number].total);
		if (noduleList[number].total == 0) {
			cat = "TIRADS Category 1: Benign";
			recommendation = "No FNA";
			result0.style = "opacity:1.0";
			resultRight.innerHTML  = 
				"<div id='idresult0' style='width:100%;padding:0' class='col-md col-sm-12 mb-3'>" +
			"<div class='alert'" +
				"style='height: 100%; background-image: linear-gradient(white, green);' role='alert'>"+
				"<ul class='list-group' style='margin:0;text-align: center;list-style-type: none;'>"+
					"<li>" +
						"<h4 style='margin:0'>" +
							"<strong>TR1</strong>" +
						"</h4>" +
					"</li>" +
					"<li><strong>Benign</strong></li>" +
					"<li>No FNA</li>" +
				"</ul>" +
			"</div>" +
			"</div>"
		} else if (noduleList[number].total > 0
				&& noduleList[number].total <= 2) {
			cat = "TIRADS Category 2: Not Suspicious";
			recommendation = "No FNA";
			result1.style = "opacity:1.0";
			resultRight.innerHTML  = 
				"<div id='idresult0' style='width:100%;padding:0' class='col-md col-sm-12 mb-3'>" +
			"<div class='alert'" +
				"style='height: 100%; background-image: linear-gradient(white, yellow)' role='alert'>"+
				"<ul class='list-group' style='margin:0; text-align: center;list-style-type: none;'>"+
					"<li>" +
						"<h4 style='margin:0'>" +
							"<strong>TR2</strong>" +
						"</h4>" +
					"</li>" +
					"<li><strong>Not Suspicious</strong></li>" +
					"<li>No FNA</li>" +
				"</ul>" +
			"</div>" +
			"</div>"
		} else if (noduleList[number].total == 3) {
			cat = "TIRADS Category 3: Mildly Suspicious";
			recommendation = "If >2.5cm: FNA; If >1.5cm: Follow up at 1,3,5 years";
			result2.style = "opacity:1.0";
			resultRight.innerHTML  = 
				"<div id='idresult0' style='width:100%;padding:0' class='col-md col-sm-12 mb-3'>" +
			"<div class='alert'" +
				"style='height: 100%; background-image: linear-gradient(white, orange)' role='alert'>"+
				"<ul class='list-group' style='margin:0; text-align: center;list-style-type: none;'>"+
					"<li>" +
						"<h4 style='margin:0'>" +
							"<strong>TR3</strong>" +
						"</h4>" +
					"</li>" +
					"<li><strong>Mildly Suspicious</strong></li>" +
					"<li>FNA if > 2.5cm</li>" +
					"<li>Follow if > 1.5cm</li>" +
				"</ul>" +
			"</div>" +
			"</div>"
		} else if (noduleList[number].total >= 4
				&& noduleList[number].total <= 6) {
			cat = "TIRADS Category 4: Moderately Suspicious";
			recommendation = "If >1.5cm: FNA; If >1cm: Follow up at 1,3,5 years";
			result3.style = "opacity:1.0";
			resultRight.innerHTML  = 
				"<div id='idresult0' style='width:100%;padding:0' class='col-md col-sm-12 mb-3'>" +
			"<div class='alert'" +
				"style='height: 100%; background-image: linear-gradient(white, #ff9800)' role='alert'>"+
				"<ul class='list-group' style='margin:0; text-align: center;list-style-type: none;'>"+
					"<li>" +
						"<h4 style='margin:0'>" +
							"<strong>TR4</strong>" +
						"</h4>" +
					"</li>" +
					"<li><strong>Moderately Suspicious</strong></li>" +
					"<li>FNA if > 1.5cm</li>" +
					"<li>Follow if > 1cm</li>" +
				"</ul>" +
			"</div>" +
			"</div>"
		} else if (noduleList[number].total >= 7) {
			cat = "TIRADS Category 5: Highly Suspicious";
			recommendation = "If >1cm: FNA; If >0.5cm: Follow annually for 5 years";
			result4.style = "opacity:1.0";
			resultRight.innerHTML  = 
				"<div id='idresult0' style='width:100%;padding:0' class='col-md col-sm-12 mb-3'>" +
			"<div class='alert'" +
				"style='height: 100%; background-image: linear-gradient(white, red)' role='alert'>"+
				"<ul class='list-group' style='margin:0; text-align: center;list-style-type: none;'>"+
					"<li>" +
						"<h4 style='margin:0'>" +
							"<strong>TR5</strong>" +
						"</h4>" +
					"</li>" +
					"<li><strong>Highly Suspicious</strong></li>" +
					"<li>FNA if > 1cm</li>" +
					"<li>Follow if > 0.5cm</li>" +
				"</ul>" +
			"</div>" +
			"</div>"
		}
		var catText = document.createTextNode("" + cat);
		categoryDiv.appendChild(catText);
		categoryDiv.style = "font-weight:bold;padding-left: 0.75rem;";
		noduleLi.appendChild(categoryDiv);
		var div = document.createElement("div");
		var innerUl = document.createElement("ul");
		var sizes = [];
		if (new String(noduleList[number].size0).valueOf() !== new String("0")
				.valueOf()) {
			sizes.push(noduleList[number].size0);
		}
		if (new String(noduleList[number].size1).valueOf() !== new String("0")
				.valueOf()) {
			sizes.push(noduleList[number].size1);
		}
		if (new String(noduleList[number].size2).valueOf() !== new String("0")
				.valueOf()) {
			sizes.push(noduleList[number].size2);
		}
		var sizeText = sizes.join(' x ');
		if (sizes.length !== 0) {
			sizeText += " mm";
		}
		var sizeLi = document.createElement("li");
		var sizeLiText = "Size: " + sizeText + ".";
		var sizeLiText2 = document.createTextNode("" + sizeLiText);
		//sizeLi.appendChild(sizeLiText2);
		if (sizeText.length > 0) {
			//innerUl.appendChild(sizeLi);
		}
		var compLi = document.createElement("li");
		var comp = "Composition: " + noduleList[number].comp + ".";
		var compText = document.createTextNode("" + comp);
		compLi.appendChild(compText);
		if (noduleList[number].comp.length > 0) {
			innerUl.appendChild(compLi);
		}
		var echoLi = document.createElement("li");
		var echo = "Echogenicity: " + noduleList[number].echo + ".";
		var echoText = document.createTextNode("" + echo);
		echoLi.appendChild(echoText);
		if (noduleList[number].echo.length > 0) {
			innerUl.appendChild(echoLi);
		}
		var shapeLi = document.createElement("li");
		var shape = "Shape: " + noduleList[number].shape + ".";
		var shapeText = document.createTextNode("" + shape);
		shapeLi.appendChild(shapeText);
		if (noduleList[number].shape.length > 0) {
			innerUl.appendChild(shapeLi);
		}
		var marginLi = document.createElement("li");
		var margin = "Margin: " + noduleList[number].margin + ".";
		var marginText = document.createTextNode("" + margin);
		marginLi.appendChild(marginText);
		if (noduleList[number].margin.length > 0) {
			innerUl.appendChild(marginLi);
		}
		var fociLi = document.createElement("li");
		var foci = "Echogenic foci: ";
		var fociText = document.createTextNode("" + foci);
		fociLi.appendChild(fociText);
		var fociDiv = document.createElement("div");
		var first = 0;
		for (var fociNo = 0; fociNo < noduleList[number].foci.length; fociNo++) {
			var fociText = document.createTextNode(""
					+ noduleList[number].foci[fociNo]);
			fociDiv.appendChild(fociText);
			var br = document.createElement("br");
			fociDiv.appendChild(br);
		}
		fociLi.appendChild(fociDiv);
		if (noduleList[number].foci.length > 0) {
			innerUl.appendChild(fociLi);
		}
		div.appendChild(innerUl);
		div.style = "padding-left: 0.75rem;";
		noduleLi.appendChild(div);
		var recommendationLi = document.createElement("li");
		var recommendationDiv = document.createElement("div");
		recommendationDiv.style = "border: 1px solid transparent;border-radius: .25rem;padding: .75rem 1.25rem;background-color: #d1ecf1;color: #0c5460;border-color: #bee5eb;";
		var recommendationText = document.createTextNode("Recommendation: "
				+ recommendation);
		recommendationDiv.appendChild(recommendationText);
		noduleLi.appendChild(recommendationDiv);
		//noduleLi.style = "padding: 0.75rem 1.25rem;border: 1px solid #bee5eb;border-radius: .25rem;margin-top: 1rem;";
		noduleUl.appendChild(noduleLi);
		document.getElementById('total').innerHTML = noduleList[number].total;
		document.getElementById('finalScore').style = "display:flex";
	}
	resultLeft.appendChild(noduleUl);
	resultLeftRight.appendChild(resultLeft);
	console.log(resultRight);
	var resultRightText = document.createTextNode(resultRight.innerHtml);
	//resultRight.appendChild(resultRight);
	resultLeftRight.appendChild(resultRight);
	console.log(resultLeftRight);
	solution.appendChild(resultLeftRight);
}
