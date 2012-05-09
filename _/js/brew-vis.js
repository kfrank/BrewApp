// JSLint options:
/*global jQuery, $, Highcharts */
/*jslint browser: true, vars: true */

$(function() {
	"use strict";
	
	var brew = window.brew;
	
	if (brew) {
		
		var data = [],
			list = brew.data.grains(),
			chart,
			i;
			
		for (i in list) {
			if (list.hasOwnProperty(i)) {
				data.push( [list[i].type, parseInt(list[i].weight)] );
			}
		}
		
		chart = new Highcharts.Chart({
		    chart: {
		        renderTo: 'grains-chart',
				backgroundColor: null,
		        plotBackgroundColor: null,
		        plotBorderWidth: null,
		        plotShadow: false
		    },
			credits: {
				enabled: false
			},
		    title: {
		        text: ''
		    },
		    tooltip: {
		        formatter: function () {
		            return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
		        }
		    },
		    plotOptions: {
		        pie: {
		            allowPointSelect: false,
					showInLegend: true,
		            cursor: 'pointer',
		            dataLabels: {
		                enabled: false
		            }
		        }
		    },
		    series: [{
		        type: 'pie',
		        name: 'Browser share',
		        data: data
		    }]
		});
	}
});