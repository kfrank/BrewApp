var model; 

function createHopsUI(hops) {
	var template = $.tmpl( $('#UI-hops').text(), hops);
	
	template.find('.removeBtn').click(function(){
		$(this).closest('.panel').remove();
		var i = model.hops.indexOf(hops);
		model.hops.splice(i, 1);
	});
	
	template.find('.hopType').change(function(){
		hops.type = $(this).val();
	});
	template.find('.hopTime').change(function(){
		hops.time = $(this).val();
	});
	template.find('.hopAlpha').change(function(){
		hops.alpha = $(this).val();
	});
	template.find('.hopIBU').change(function(){
		hops.ibu = $(this).val();
	});
	
	return template;
}

$(document).ready(function() {

	model = new Brew();
	
	$('#brewName').val(model.name);
	$('#brewStyle').val(model.style);
	$('#batchSize').val(model.batchSize);
	$('#brewType').val(model.type);
	$('#boilVolume').val(model.boilVolume);

	$('#addGrains').click(function(evt){
		evt.preventDefault();
		var grain = new Grain();
		model.grains.push(grain);
		$.tmpl( $('#UI-grains').text(), grain ).appendTo($(this).parent().find('.contain'));
	});
	
	$('#addHops').click(function(evt){
		evt.preventDefault();
		var hops = new Hops(model.icount++);
		model.hops.push(hops);
		createHopsUI(hops).appendTo($(this).parent().find('.contain'));
	});
	
	$('#addYeast').click(function(evt){
		evt.preventDefault();
		var yeast = new Yeast();
		model.yeast.push(yeast);
		$.tmpl( $('#UI-yeast').text(), yeast ).appendTo($(this).parent().find('.contain'));
	});
	
	$('#addAdjuncts').click(function(evt){
		evt.preventDefault();
		var adjunct = new Adjunct();
		model.adjuncts.push(adjunct);
		$.tmpl( $('#UI-adjunct').text(), yeast ).appendTo($(this).parent().find('.contain'));
	});
	
	$('#save').click(function(evt){
		evt.preventDefault();
		var data = JSON.stringify(model);
		localStorage.brew = data;
	});
	$('#load').click(function(evt){
		evt.preventDefault();
		if(localStorage.brew) {
			model = JSON.parse( localStorage.brew );
			
			console.log(model.hops.length);
			
			for(var i=0; i < model.hops.length; i++) {
				var hops = model.hops[i];
				createHopsUI(hops).appendTo($('#hops .contain'));
			}
			
			
			
		}
	});

});