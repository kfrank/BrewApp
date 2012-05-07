$(function() {
	
	// GRAIN
	var Grain = function(data) {
		data = (data || {});
		this.weight = ko.observable(data.weight || 3);
		this.type = ko.observable(data.type || '');
		this.color = ko.observable(data.color || 1.5);
	};
	Grain.prototype = {
		types: [
			{ name: 'Rahr 2-row pale', color: '' },
			{ name: 'Rahr 6-row pale', color: '' },
			{ name: 'Briess Carapils', color: '' },
			{ name: 'Briess Caramel 10L', color: '' },
			{ name: 'Briess Caramel 40L', color: '' },
			{ name: 'Rahr White Wheat Malt', color: '' },
			{ name: 'Briess Victory', color: '' },
			{ name: 'Briess Special Roast', color: '' },
			{ name: 'Briess Caramel 120L', color: '' },
			{ name: 'Gambrinus Honey Malt', color: '' },
			{ name: 'Briess Caramel 20L', color: '' },
			{ name: 'Briess Caramel 60L', color: '' },
			{ name: 'Briess Caramel 80L', color: '' },
			{ name: 'Briess Caramel 90L', color: '' },
			{ name: 'Briess Organic 2-Row', color: '' },
			{ name: 'Briess Organic Munich', color: '' },
			{ name: 'Briess Organic Chocolate', color: '' },
			{ name: 'Rahr Premium Pilsner', color: '' },
			{ name: 'Belgian Pale Ale', color: '' },
			{ name: 'Belgian Aromatic Malt', color: '' },
			{ name: 'Belgian Caramel Pils', color: '' },
			{ name: 'Belgian Caravienne', color: '' },
			{ name: 'Belgian Caramunich', color: '' },
			{ name: 'Belgian Special B', color: '' },
			{ name: 'Belgian Biscuit Malt', color: '' },
			{ name: 'Belgian Debittered Black Malt', color: '' },
			{ name: 'German Pilsner', color: '' },
			{ name: 'German Vienna Malt', color: '' },
			{ name: 'German Munich', color: '' },
			{ name: 'German Dark Munich', color: '' },
			{ name: 'Weyermann® Pale Wheat', color: '' },
			{ name: 'Weyermann® Carawheat®', color: '' },
			{ name: 'Weyermann® Chocolate Wheat', color: '' },
			{ name: 'Weyermann® Carafoam®', color: '' },
			{ name: 'Weyermann® Carahell®', color: '' },
			{ name: 'Weyermann® Caramunich® I', color: '' },
			{ name: 'Weyermann® Caramunich® II', color: '' },
			{ name: 'Weyermann® Caramunich® III', color: '' },
			{ name: 'Weyermann® CaraRed®', color: '' },
			{ name: 'Weyermann® CaraAmber®', color: '' },
			{ name: 'Weyermann® CaraAroma®', color: '' },
			{ name: 'Weyermann® Melanoidin', color: '' },
			{ name: 'Weyermann® Smoked Malt', color: '' },
			{ name: 'Weyermann® Acidulated', color: '' },
			{ name: 'Weyermann® Dehusked Carafa® I', color: '' },
			{ name: 'Weyermann® Dehusked Carafa® II', color: '' },
			{ name: 'Weyermann® Dehusked Carafa® III', color: '' },
			{ name: 'German Kolsch Malt', color: '' },
			{ name: 'Francobelges Kiln Coffee', color: '' },
			{ name: 'English Maris Otter', color: '' },
			{ name: 'British Golden Promise', color: '' },
			{ name: 'Simpsons CaraMalt', color: '' },
			{ name: 'English Medium Crystal', color: '' },
			{ name: 'English Dark Crystal', color: '' },
			{ name: 'Fawcett Pale Chocolate', color: '' },
			{ name: 'English Chocolate Malt', color: '' },
			{ name: 'English Black Malt', color: '' },
			{ name: 'English Roasted Barley', color: '' },
			{ name: 'Crisp Amber Malt', color: '' },
			{ name: 'English Brown Malt', color: '' },
			{ name: 'English Extra Dark Crystal', color: '' },
			{ name: 'Simpsons Golden Naked Oats', color: '' },
			{ name: 'British Peated Malt', color: '' },
			{ name: 'Fawcett Oat Malt', color: '' },
			{ name: 'Flaked Barley', color: '' },
			{ name: 'Flaked Maize', color: '' },
			{ name: 'Flaked Oats', color: '' },
			{ name: 'Flaked Rye', color: '' },
			{ name: 'Flaked Wheat', color: '' },
			{ name: 'Torrified Wheat', color: '' },
			{ name: 'Briess Cherrywood Smoked Malt', color: '' },
			{ name: 'Weyermann® Chocolate Rye Malt', color: '' },
			{ name: 'Weyermann® Bohemian Pilsner', color: '' },
			{ name: 'Rahr Pale Ale Malt', color: '' },
			{ name: 'Briess Ashburne Mild Ale Malt', color: '' },
			{ name: 'Gambrinus ESB Pale Malt', color: '' },
			{ name: 'Warminster Floor-Malted Maris Otter', color: '' },
			{ name: 'Weyermann® Floor Malted Bohemian Pale Wheat', color: '' },
			{ name: 'Weyermann® Oak-Smoked Pale Wheat Malt', color: '' },
			{ name: 'Weyermann® Floor Malted Bohemian Dark Malt', color: '' },
			{ name: 'Briess Bonlander Munich Malt', color: '' },
			{ name: 'Weyermann® Abbey Malt', color: '' },
			{ name: 'Breiss Blackprinz Malt', color: '' },
			{ name: 'Briess Midnight Wheat Malt',  color: '' },
		]
	};
	
	
	// HOPS
	var Hops = function(data) {
		data = (data || {});
		this.weight = ko.observable(data.weight || '');
		this.type = ko.observable(data.type || '');
		this.form = ko.observable(data.form || '');
		this.alphaAcid = ko.observable(data.alphaAcid || '');
		this.time = ko.observable(data.time || '');
		this.ibu = ko.observable(data.ibu || '');
	};
	Hops.prototype = {
		types: [
			{ name: 'Ahtanum', alpha: '80' },
			{ name: 'Amarillo', alpha: '11' },
			{ name: 'Apollo', alpha: '' },
			/*{ name: 'Cascade', alpha: '' },
			{ name: 'Centennial', alpha: '' },
			{ name: 'Chinook', alpha: '' },
			{ name: 'Citra', alpha: '' },
			{ name: 'Cluster', alpha: '' },
			{ name: 'Columbus', alpha: '' },
			{ name: 'Crystal', alpha: '' },
			{ name: 'Falconers 7Cs Blend', alpha: '' },
			{ name: 'Falconers Flight', alpha: '' },
			{ name: 'French Stisselspalt', alpha: '' },
			{ name: 'Galena', alpha: '' },
			{ name: 'Brewers Gold (German)', alpha: '' },
			{ name: 'Saaz (Czech)', alpha: '' },
			{ name: 'Hallertau (German)', alpha: '' },
			{ name: 'Herkules (German)', alpha: '' },
			{ name: 'Hersbrucker (German)', alpha: '' },
			{ name: 'Magnum (German)', alpha: '' },
			{ name: 'Merkur (German)', alpha: '' },
			{ name: 'Northern Brewer (German)', alpha: '' },
			{ name: 'Opal (German)', alpha: '' },
			{ name: 'Perle (German)', alpha: '' },
			{ name: 'Saphir (German)', alpha: '' },
			{ name: 'Select (German)', alpha: '' },
			{ name: 'Smaragd (German)', alpha: '' }
			{ name: 'Spalt (German)', alpha: '' },
			{ name: 'Tettnang (German)', alpha: '' },
			{ name: 'Tradition (German)', alpha: '' },
			{ name: 'Glacier', alpha: '' },
			{ name: 'Horizon', alpha: '' },
			{ name: 'Liberty', alpha: '' },
			{ name: 'Millennium', alpha: '' },
			{ name: 'Mt. Hood', alpha: '' },
			{ name: 'Mt. Rainier', alpha: '' },
			{ name: 'Green Bullet (New Zealand)', alpha: '' },
			{ name: 'Hallertau (New Zealand)', alpha: '' },
			{ name: 'Motueka (New Zealand)', alpha: '' },
			{ name: 'Pacific Gem (New Zealand)', alpha: '' },
			{ name: 'Super Alpha (New Zealand)', alpha: '' },
			{ name: 'Newport', alpha: '' },
			{ name: 'Nugget', alpha: '' },
			{ name: 'Fuggle (UK)', alpha: '' },
			{ name: 'Palisade', alpha: '' },
			{ name: 'Santiam', alpha: '' },
			{ name: 'Simcoe', alpha: '' },
			{ name: 'Sorachi', alpha: '' },
			{ name: 'Sterling', alpha: '' },
			{ name: 'Styrian Aurora', alpha: '' },
			{ name: 'Styrian Bobek', alpha: '' },
			{ name: 'Styrian Celeja', alpha: '' },
			{ name: 'Styrian Goldings', alpha: '' },
			{ name: 'Summit', alpha: '' },
			{ name: 'Admiral (UK)', alpha: '' },
			{ name: 'Brambling Cross (UK)', alpha: '' },
			{ name: 'Challenger (UK)', alpha: '' },
			{ name: 'First Gold (UK)', alpha: '' },
			{ name: 'Kent Goldings (UK)', alpha: '' },
			{ name: 'Northdown (UK)', alpha: '' },
			{ name: 'Phoenix (UK)', alpha: '' },
			{ name: 'Pilgrim (UK)', alpha: '' },
			{ name: 'Progress (UK)', alpha: '' },
			{ name: 'Target (UK)', alpha: '' },
			{ name: 'Whitbread Goldings (UK)', alpha: '' },
			{ name: 'Brewers Gold (US)', alpha: '' },
			{ name: 'Fuggle (US)', alpha: '' },
			{ name: 'Goldings (US)', alpha: '' },
			{ name: 'Hallertau (US)', alpha: '' },
			{ name: 'Mangum (US)', alpha: '' },
			{ name: 'Northern Brewer (US)', alpha: '' },
			{ name: 'Perle (US)', alpha: '' },
			{ name: 'Saaz (US)', alpha: '' },
			{ name: 'Tettnang (US)', alpha: '' },
			{ name: 'Vanguard', alpha: '' },
			{ name: 'Warrior', alpha: '' },
			{ name: 'Willamette', alpha: '' },
			{ name: 'Zythos', alpha: '' }*/
		]
	};
	
	
	// YEAST
	var Yeast = function(data) {
		data = (data || {});
		this.type = ko.observable(data.type || '');
	};
	Yeast.prototype = {
		types: [
			'Yeast 1',
			'Yeast 2'
		]
	};
	
	
	// BREW
	var Brew = function(id, data) {
		var self = this,
			list;
			
		this.id = id;
		this.brewName = ko.observable(data.brewName || '');
		this.brewStyles = ['Type 1', 'Type2'];
		this.brewStyle = ko.observable( data.brewStyle || this.brewStyles[0] );
		this.batchSize = ko.observable( data.batchSize || 0 );
		this.brewType = ko.observable( data.brewType || '' );
		this.boilVolume = ko.observable( data.boilVolume || 1 );
		
		list = data.grains ? $.map(data.grains, function(dat) { return new Grain(dat); }) : [];
		this.grains = ko.observableArray(list);
		
		list = data.hops ? $.map(data.hops, function(dat) { return new Hops(dat); }) : [];
		this.hops = ko.observableArray(list);
		
		list = data.yeast ? $.map(data.yeast, function(dat) { return new Yeast(dat); }) : [];
		this.yeast = ko.observableArray(list);
		
		// Add
		self.addGrain = function() {
			self.grains.push( new Grain() );
		};
		self.addHops = function() {
			self.hops.push( new Hops() );
		};
		self.addYeast = function() {
			self.yeast.push( new Yeast() );
		};
		
		// Remove
		self.removeGrain = function(model) {
			self.grains.remove(model);
		};
		self.removeHops = function(model) {
			self.hops.remove(model);
		};
		self.removeYeast = function(model) {
			self.yeast.remove(model);
		};
		
		// Save
		self.save = function() {
			$('#brew-id').val( this.id );
			$('#brew-name').val( this.brewName() );
			$('#brew-data').val( ko.toJSON(this) );
			$('#brew-form').submit();
		};
	};
	
	// Default data values.
	window.brewId = window.brewId || '';
	window.brewName = window.brewName || '';
	window.brewData = window.brewData || {};
	
	ko.applyBindings(new Brew( window.brewId, window.brewData ));
});