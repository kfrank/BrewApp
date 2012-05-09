$(function() {
	
	var opts = {
		styles: [
			'Lite American Lager',
			'Standard American Lager',
			'Premium American Lager',
			'Munich Helles',
			'Dortmunder Export',
			'German Pilsner',
			'Bohemian Pilsner',
			'Classic American Pilsner',
			'Vienna Lager',
			'Oktoberfest/Marzen',
			'Dark American Lager',
			'Munich Dunkel',
			'Schwarzbier',
			'Maibock/Helles Bock',
			'Traditional Bock',
			'Doppelbock',
			'Eisbock',
			'Cream Ale',
			'Blonde Ale',
			'Kolsch',
			'American Wheat or Rye',
			'Northern German Altbier',
			'California Common',
			'Dusseldorf Altbier',
			'Standard/Ordinary Bitter',
			'Special/Best/Premium Bitter',
			'Extra Special/Strong Bitter',
			'Scottish Light 60/-',
			'Scottish Heavy 70/-',
			'Scottish Export 80/-',
			'Irish Red Ale',
			'Strong Scotch Ale',
			'American Pale Ale',
			'American Amber Ale',
			'American Brown Ale',
			'English Brown Ale',
			'Brown Porter',
			'Robust Porter',
			'Baltic Porter',
			'Dry Stout',
			'Sweet Stout',
			'Oatmeal Stout',
			'Foreign Extra Stout',
			'American Stout',
			'Russian Imperial Stout',
			'English IPA',
			'American IPA',
			'Imperial IPA',
			'Weizen/Weissbier',
			'Dunkelweizen',
			'Weizenbock',
			'Roggenbier',
			'Witbier',
			'Belgian Pale Ale',
			'Saison',
			'Biere de Garde',
			'Belgian Speciality Ale',
			'Berliner Weisse',
			'Flanders Red Ale',
			'Flanders Brown Ale',
			'Gueuze',
			'Fruit Lambic',
			'Belgian Blond Ale',
			'Belgian Dubbel',
			'Belgian Tripel',
			'Belgian Golden Strong Ale',
			'Belgian Dark Strong Ale',
			'Old Ale',
			'English Barleywine',
			'American Barleywine'
		],
		types: [
			'Extract',
			'Partial Mash',
			'All-Grain'
		],
		grains: [
			{ name: 'Belgian Aromatic Malt', color: '' },
			{ name: 'Belgian Biscuit Malt', color: '' },
			{ name: 'Belgian Caramel Pils', color: '' },
			{ name: 'Belgian Caramunich', color: '' },
			{ name: 'Belgian Caravienne', color: '' },
			{ name: 'Belgian Debittered Black Malt', color: '' },
			{ name: 'Belgian Pale Ale', color: '' },
			{ name: 'Belgian Special B', color: '' },
			{ name: 'Breiss Blackprinz Malt', color: '' },
			{ name: 'Briess Ashburne Mild Ale Malt', color: '' },
			{ name: 'Briess Bonlander Munich Malt', color: '' },
			{ name: 'Briess Caramel 10L', color: '' },
			{ name: 'Briess Caramel 120L', color: '' },
			{ name: 'Briess Caramel 20L', color: '' },
			{ name: 'Briess Caramel 40L', color: '' },
			{ name: 'Briess Caramel 60L', color: '' },
			{ name: 'Briess Caramel 80L', color: '' },
			{ name: 'Briess Caramel 90L', color: '' },
			{ name: 'Briess Carapils', color: '' },
			{ name: 'Briess Cherrywood Smoked Malt', color: '' },
			{ name: 'Briess Midnight Wheat Malt', color: '' },
			{ name: 'Briess Organic 2-Row', color: '' },
			{ name: 'Briess Organic Chocolate', color: '' },
			{ name: 'Briess Organic Munich', color: '' },
			{ name: 'Briess Special Roast', color: '' },
			{ name: 'Briess Victory', color: '' },
			{ name: 'British Golden Promise', color: '' },
			{ name: 'British Peated Malt', color: '' },
			{ name: 'Crisp Amber Malt', color: '' },
			{ name: 'English Black Malt', color: '' },
			{ name: 'English Brown Malt', color: '' },
			{ name: 'English Chocolate Malt', color: '' },
			{ name: 'English Dark Crystal', color: '' },
			{ name: 'English Extra Dark Crystal', color: '' },
			{ name: 'English Maris Otter', color: '' },
			{ name: 'English Medium Crystal', color: '' },
			{ name: 'English Roasted Barley', color: '' },
			{ name: 'Fawcett Oat Malt', color: '' },
			{ name: 'Fawcett Pale Chocolate', color: '' },
			{ name: 'Flaked Barley', color: '' },
			{ name: 'Flaked Maize', color: '' },
			{ name: 'Flaked Oats', color: '' },
			{ name: 'Flaked Rye', color: '' },
			{ name: 'Flaked Wheat', color: '' },
			{ name: 'Francobelges Kiln Coffee', color: '' },
			{ name: 'Gambrinus ESB Pale Malt', color: '' },
			{ name: 'Gambrinus Honey Malt', color: '' },
			{ name: 'German Dark Munich', color: '' },
			{ name: 'German Kolsch Malt', color: '' },
			{ name: 'German Munich', color: '' },
			{ name: 'German Pilsner', color: '' },
			{ name: 'German Vienna Malt', color: '' },
			{ name: 'Rahr 2-row pale', color: '' },
			{ name: 'Rahr 6-row pale', color: '' },
			{ name: 'Rahr Pale Ale Malt', color: '' },
			{ name: 'Rahr Premium Pilsner', color: '' },
			{ name: 'Rahr White Wheat Malt', color: '' },
			{ name: 'Simpsons CaraMalt', color: '' },
			{ name: 'Simpsons Golden Naked Oats', color: '' },
			{ name: 'Torrified Wheat', color: '' },
			{ name: 'Warminster Floor-Malted Maris Otter', color: '' },
			{ name: 'Weyermann® Abbey Malt', color: '' },
			{ name: 'Weyermann® Acidulated', color: '' },
			{ name: 'Weyermann® Bohemian Pilsner', color: '' },
			{ name: 'Weyermann® CaraAmber®', color: '' },
			{ name: 'Weyermann® CaraAroma®', color: '' },
			{ name: 'Weyermann® Carafoam®', color: '' },
			{ name: 'Weyermann® Carahell®', color: '' },
			{ name: 'Weyermann® Caramunich® I', color: '' },
			{ name: 'Weyermann® Caramunich® II', color: '' },
			{ name: 'Weyermann® Caramunich® III', color: '' },
			{ name: 'Weyermann® CaraRed®', color: '' },
			{ name: 'Weyermann® Carawheat®', color: '' },
			{ name: 'Weyermann® Chocolate Rye Malt', color: '' },
			{ name: 'Weyermann® Chocolate Wheat', color: '' },
			{ name: 'Weyermann® Dehusked Carafa® I', color: '' },
			{ name: 'Weyermann® Dehusked Carafa® II', color: '' },
			{ name: 'Weyermann® Dehusked Carafa® III', color: '' },
			{ name: 'Weyermann® Floor Malted Bohemian Dark Malt', color: '' },
			{ name: 'Weyermann® Floor Malted Bohemian Pale Wheat', color: '' },
			{ name: 'Weyermann® Melanoidin', color: '' },
			{ name: 'Weyermann® Oak-Smoked Pale Wheat Malt', color: '' },
			{ name: 'Weyermann® Pale Wheat', color: '' },
			{ name: 'Weyermann® Rye Malt', color: '' },
			{ name: 'Weyermann® Smoked Malt', color: '' }
		],
		hops: [
			{ name: 'Ahtanum', alpha: '80' },
			{ name: 'Amarillo', alpha: '11' },
			{ name: 'Apollo', alpha: '' },
			{ name: 'Cascade', alpha: '' },
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
			{ name: 'Smaragd (German)', alpha: '' },
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
			{ name: 'Zythos', alpha: '' }
		],
		yeasts: [
			'Wyeast 1007 German Ale',
			'Wyeast 1010 American Wheat',
			'Wyeast 1028 London Ale',
			'Wyeast 1056 American Ale',
			'Wyeast 1084 Irish Ale',
			'Wyeast 1098 British Ale',
			'Wyeast 1099 Whitbread Ale',
			'Wyeast 1187 Ringwood Ale',
			'Wyeast 1214 Belgian Abbey',
			'Wyeast 1272 American Ale II',
			'Wyeast 1275 Thames Valley Ale',
			'Wyeast 1318 London Ale III',
			'Wyeast 1332 Northwest Ale',
			'Wyeast 1335 British Ale II',
			'Wyeast 1388 Belgian Strong Ale',
			'Wyeast 1450 Dennys Favorite 50',
			'Wyeast 1469 West Yorkshire Ale',
			'Wyeast 1728 Scottish Ale',
			'Wyeast 1762 Belgian Abbey',
			'Wyeast 1887 Thames Valley II',
			'Wyeast 1945 NB NeoBritannia',
			'Wyeast 1969 London ESB',
			'Wyeast 2000 Budvar',
			'Wyeast 2001 Pilsner Urquell',
			'Wyeast 2007 Pilsen Lager',
			'Wyeast 2035 American Lager',
			'Wyeast 2042 Danish Lager',
			'Wyeast 2112 California Lager',
			'Wyeast 2124 Bohemian Lager',
			'Wyeast 2206 Bavarian Lager',
			'Wyeast 2278 Czech Pils',
			'Wyeast 2308 Munich Lager',
			'Wyeast 2352 Munich Lager II',
			'Wyeast 2487 Hella Bock',
			'Wyeast 2565 Kolsch',
			'Wyeast 2575 Kolsch II',
			'Wyeast 2633 Oktoberfest Blend',
			'Wyeast 3056 Bavarian Wheat Blend',
			'Wyeast 3068 Weihenstephan Wheat',
			'Wyeast 3278 Lambic Blend',
			'Wyeast 3333 German Wheat',
			'Wyeast 3463 Forbidden Fruit',
			'Wyeast 3522 Belgian Ardennes',
			'Wyeast 3638 Bavarian Wheat',
			'Wyeast 3711 French Saison',
			'Wyeast 3724 Belgian Saison',
			'Wyeast 3725 Bier De Garde',
			'Wyeast 3762 Roseselare Ale',
			'Wyeast 3787 Trappist High',
			'Wyeast 3942 Belgian Wheat',
			'Wyeast 3944 Belgian Wit',
		],
		forms: [
			'Pellet',
			'Leaf'
		]
	};
	
	// GRAIN
	var Grain = function() {};
	Grain.prototype = {
		weight: 3,
		type: opts.grains[0].name,
		color: 1.5
	};
	
	// HOPS
	var Hops = function() {};
	Hops.prototype = {
		weight: 'Weight',
		type: opts.hops[0].name,
		form: opts.forms[0],
		time: 'Time'
	};
	
	// YEAST
	var Yeast = function() {};
	Yeast.prototype = {
		type: opts.yeasts[0]
	};

	// BREW
	var Brew = function(id, saved) {
		this.options = opts;
		this.data = {};
		
		var self = this,
			data = this.data;
		
		data.id = id;
		data.brewName = ko.observable( saved.brewName || 'Brew Name' );
		data.brewStyle = ko.observable( saved.brewStyle || this.options.styles[0] );
		data.batchSize = ko.observable( saved.batchSize || 'Batch Size' );
		data.brewType = ko.observable( saved.brewType || this.options.types[0] );
		data.boilVolume = ko.observable( saved.boilVolume || 'Boil Volume' );
		data.grains = ko.observableArray( saved.grains || [] );
		data.hops = ko.observableArray( saved.hops || [] );
		data.yeasts = ko.observableArray( saved.yeasts || [] );
		
		// Add
		self.addGrain = function() {
			data.grains.push( new Grain() );
		};
		self.addHops = function() {
			data.hops.push( new Hops() );
		};
		self.addYeast = function() {
			data.yeasts.push( new Yeast() );
		};
		
		// Remove
		self.removeGrain = function(model) {
			data.grains.remove(model);
		};
		self.removeHops = function(model) {
			data.hops.remove(model);
		};
		self.removeYeast = function(model) {
			data.yeasts.remove(model);
		};
		
		// Save
		self.done = function() {
			$('#brew-next').val('view.php');
			self.save();
		};
		self.save = function() {
			$('#brew-id').val( data.id );
			$('#brew-name').val( data.brewName() );
			$('#brew-data').val( ko.toJSON(data) );
			$('#brew-form').submit();
		};
	};
	
	// Default data values.
	window.brewId = window.brewId || '';
	window.brewName = window.brewName || '';
	window.brewData = window.brewData || {};
	ko.applyBindings(new Brew( window.brewId, window.brewData ));
});