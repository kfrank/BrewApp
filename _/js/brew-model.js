// 
function Grain () {

}

Grain.prototype = {
	id:'',
	weight: "3",
	type: "",
	color: "1.5"
};

//
function Hops (id) {
	this.id = id;
}

Hops.prototype = {
	id:'',
	weight: "",
	type: "",
	form: "",
	alphaAcid: "",
	time: "",
	ibu: ""
};

function Yeast() {

}

Yeast.prototype = {
	id:'',
	type: ""
};

function Adjunct() {

}

Adjunct.prototype = {
	id:'',
	weight: "",
	type: "",
	phase: ""
};


function Brew() {
	this.grains = [];
	this.hops = [];
	this.yeast = [];
	this.adjuncts = [];
}

Brew.prototype = {
	icount:0,
	name: "",
	style: "",
	batchSize: "0",
	boilVolume: "1",
	type: "",
	boilTime: "",
	grains: null,
	hops: null,
	yeast: null,
	adjunct: null
};