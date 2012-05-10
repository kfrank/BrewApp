// JSLint options:
/*global jQuery, $, Highcharts */
/*jslint browser: true, vars: true */

$(function() {
	"use strict";
	
	var brew = window.brew;
	
	if (brew) {
		
		var data = [],
			colors = [],
			list = brew.data.grains(),
			chart,
			i;
			
		for (i in list) {
			if (list.hasOwnProperty(i)) {
				data.push( [list[i].type, parseInt(list[i].weight)] );
				colors.push( list[i].color );
			}
		}
		
		chart = new Highcharts.Chart({
		    chart: {
				animation: false,
		        renderTo: 'grains-chart',
				backgroundColor: null,
		        plotBackgroundColor: null,
		        plotBorderWidth: null,
		        plotShadow: false
		    },
			credits: {
				enabled: false
			},
			colors: colors,
			legend: {
				enabled: false
			},
		    title: {
		        text: ''
		    },
		    tooltip: {
		        formatter: function () {
		            return '<b>' + this.point.name + '</b>: ' + Math.round(this.percentage*100)/100 + ' %';
		        }
		    },
		    plotOptions: {
		        pie: {
					animation: false,
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