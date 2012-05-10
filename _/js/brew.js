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
			{ name: 'Belgian Aromatic Malt', color: '#712300' },
			{ name: 'Belgian Biscuit Malt', color: '#bb5224' },
			{ name: 'Belgian Caramel Pils', color: '#db972c' },
			{ name: 'Belgian Caramunich', color: '#ffb94b' },
			{ name: 'Belgian Caravienne', color: '#f6d564' },
			{ name: 'Belgian Debittered Black Malt', color: '#db972c' },
			{ name: 'Belgian Pale Ale', color: '#712300' },
			{ name: 'Belgian Special B', color: '#bb5224' },
			{ name: 'Breiss Blackprinz Malt', color: '#ffb94b' },
			{ name: 'Briess Ashburne Mild Ale Malt', color: '#f6d564' },
			{ name: 'Briess Bonlander Munich Malt', color: '#2d1a05' },
			{ name: 'Briess Caramel 10L', color: '#bb5224' },
			{ name: 'Briess Caramel 120L', color: '#2d1a05' },
			{ name: 'Briess Caramel 20L', color: '#bb5224' },
			{ name: 'Briess Caramel 40L', color: '#712300' },
			{ name: 'Briess Caramel 60L', color: '#db972c' },
			{ name: 'Briess Caramel 80L', color: '#ffb94b' },
			{ name: 'Briess Caramel 90L', color: '#f6d564' },
			{ name: 'Briess Carapils', color: '#2d1a05' },
			{ name: 'Briess Cherrywood Smoked Malt', color: '#bb5224' },
			{ name: 'Briess Midnight Wheat Malt', color: '#db972c' },
			{ name: 'Briess Organic 2-Row', color: '#bb5224' },
			{ name: 'Briess Organic Chocolate', color: '#712300' },
			{ name: 'Briess Organic Munich', color: '#ffb94b' },
			{ name: 'Briess Special Roast', color: '#f6d564' },
			{ name: 'Briess Victory', color: '#2d1a05' },
			{ name: 'British Golden Promise', color: '#db972c' },
			{ name: 'British Peated Malt', color: '#712300' },
			{ name: 'Crisp Amber Malt', color: '#bb5224' },
			{ name: 'English Black Malt', color: '#ffb94b' },
			{ name: 'English Brown Malt', color: '#2d1a05' },
			{ name: 'English Chocolate Malt', color: '#db972c' },
			{ name: 'English Dark Crystal', color: '#712300' },
			{ name: 'English Extra Dark Crystal', color: '#bb5224' },
			{ name: 'English Maris Otter', color: '#ffb94b' },
			{ name: 'English Medium Crystal', color: '#f6d564' },
			{ name: 'English Roasted Barley', color: '#2d1a05' },
			{ name: 'Fawcett Oat Malt', color: '#bb5224' },
			{ name: 'Fawcett Pale Chocolate', color: '#db972c' },
			{ name: 'Flaked Barley', color: '#712300' },
			{ name: 'Flaked Maize', color: '#bb5224' },
			{ name: 'Flaked Oats', color: '#ffb94b' },
			{ name: 'Flaked Rye', color: '#f6d564' },
			{ name: 'Flaked Wheat', color: '#2d1a05' },
			{ name: 'Francobelges Kiln Coffee', color: '#f6d564' },
			{ name: 'Gambrinus ESB Pale Malt', color: '#db972c' },
			{ name: 'Gambrinus Honey Malt', color: '#712300' },
			{ name: 'German Dark Munich', color: '#bb5224' },
			{ name: 'German Kolsch Malt', color: '#ffb94b' },
			{ name: 'German Munich', color: '#2d1a05' },
			{ name: 'German Pilsner', color: '#db972c' },
			{ name: 'German Vienna Malt', color: '#712300' },
			{ name: 'Rahr 2-row pale', color: '#bb5224' },
			{ name: 'Rahr 6-row pale', color: '#ffb94b' },
			{ name: 'Rahr Pale Ale Malt', color: '#f6d564' },
			{ name: 'Rahr Premium Pilsner', color: '#db972c' },
			{ name: 'Rahr White Wheat Malt', color: '#712300' },
			{ name: 'Simpsons CaraMalt', color: '#bb5224' },
			{ name: 'Simpsons Golden Naked Oats', color: '#ffb94b' },
			{ name: 'Torrified Wheat', color: '#2d1a05' },
			{ name: 'Warminster Floor-Malted Maris Otter', color: '#bb5224' },
			{ name: 'Weyermann® Abbey Malt', color: '#f6d564' },
			{ name: 'Weyermann® Acidulated', color: '#db972c' },
			{ name: 'Weyermann® Bohemian Pilsner', color: '#712300' },
			{ name: 'Weyermann® CaraAmber®', color: '#bb5224' },
			{ name: 'Weyermann® CaraAroma®', color: '#ffb94b' },
			{ name: 'Weyermann® Carafoam®', color: '#f6d564' },
			{ name: 'Weyermann® Carahell®', color: '#db972c' },
			{ name: 'Weyermann® Caramunich® I', color: '#712300' },
			{ name: 'Weyermann® Caramunich® II', color: '#bb5224' },
			{ name: 'Weyermann® Caramunich® III', color: '#ffb94b' },
			{ name: 'Weyermann® CaraRed®', color: '#f6d564' },
			{ name: 'Weyermann® Carawheat®', color: '#db972c' },
			{ name: 'Weyermann® Chocolate Rye Malt', color: '#bb5224' },
			{ name: 'Weyermann® Chocolate Wheat', color: '#712300' },
			{ name: 'Weyermann® Dehusked Carafa® I', color: '#ffb94b' },
			{ name: 'Weyermann® Dehusked Carafa® II', color: '#f6d564' },
			{ name: 'Weyermann® Dehusked Carafa® III', color: '#db972c' },
			{ name: 'Weyermann® Floor Malted Bohemian Dark Malt', color: '#712300' },
			{ name: 'Weyermann® Floor Malted Bohemian Pale Wheat', color: '#bb5224' },
			{ name: 'Weyermann® Melanoidin', color: '#ffb94b' },
			{ name: 'Weyermann® Oak-Smoked Pale Wheat Malt', color: '#f6d564' },
			{ name: 'Weyermann® Pale Wheat', color: '#db972c' },
			{ name: 'Weyermann® Rye Malt', color: '#bb5224' },
			{ name: 'Weyermann® Smoked Malt', color: '#712300' }
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
	
	// Creates an averaged color from an array of hex color values.
	function averageColor(colors) {
		var r = [],
			g = [],
			b = [],
			i;
		
		// Totals up all numbers in an array.
		function sum(arry) {
			var total = 0;
			for (i in arry) total += arry[i];
			return total;
		}
		// Creates a two-digit hexidecimal string component.
		function hex(val) {
			val = val.toString(16);
			if (val.length < 2) val = '0'+val;
			return val;
		}
		
		// Collect all individual R/G/B component values.
		for (i in colors) {
			i = colors[i];
			r.push( parseInt(i.substr(1, 2), 16) );
			g.push( parseInt(i.substr(3, 2), 16) );
			b.push( parseInt(i.substr(5, 2), 16) );
		}
		
		// Get average of R/G/B components.
		r = Math.round(sum(r) / r.length);
		g = Math.round(sum(g) / g.length);
		b = Math.round(sum(b) / b.length);
		
		// Return mean color.
		return '#' + hex(r) + hex(g) + hex(b);
	}
	
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
			var colors = [],
				i;
			
			$.each(data.grains(), function(index, grain) {
				for (i in opts.grains) {
					if (opts.grains[i].name === grain.type) {
						colors.push( opts.grains[i].color );
						break;
					}
				}
			});
			
			$('#brew-id').val( data.id );
			$('#brew-name').val( data.brewName() );
			$('#brew-data').val( ko.toJSON(data) );
			$('#brew-color').val( averageColor(colors) );
			$('#brew-form').submit();
		};
	};
	
	// Default data values.
	window.brewId = window.brewId || '';
	window.brewName = window.brewName || '';
	window.brewData = window.brewData || {};
	window.brew = new Brew( window.brewId, window.brewData );
	ko.applyBindings(window.brew);
});