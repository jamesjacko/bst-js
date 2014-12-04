function runBSTTest(){
	var start = new Date().getTime();
	var comps = [['Size', 'Comparisons']];
	var max = 0;
	for(var i = 100; i < 10000; i++){
		var tree = new BST();
		var numbers = Array.apply(0, Array(i)).map(function(val, i) { return i; });

		numbers.sort(function(){ return Math.random() - 0.5});
		for(var j = 0; j < numbers.length; j++){
			tree.add(numbers[j]);
		}
		var comparisons = 0;
		for(var j = 0; j < 1000; j ++){
			var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
			comparisons += tree.contains(randomNumber);
		}
		delete tree;
		comparisons /= 1000;
		max = comparisons > max? comparisons: max;
		comps.push([i, comparisons]);
	}
	console.log(comps);
	var end = new Date().getTime();
	var diff = end - start;
	drawChart(comps, max);
}

function runArrayTest(){
	var start = new Date().getTime();
	var comps = [['Size', 'Comparisons']];
	var max = 0;
	for(var i = 100; i < 10000; i++){
		var numbers = Array.apply(0, Array(i)).map(function(val, i) { return i; });
		var comparisons = 0;
		for(var j = 0; j < 1000; j ++){
			var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
			comparisons += binarySearch(numbers, randomNumber);
		}
		comparisons /= 1000;
		max = comparisons > max? comparisons: max;
		comps.push([i, comparisons]);
	}
	var end = new Date().getTime();
	var diff = end - start;
	drawChart(comps, max);
}

function binarySearch(array, find){
	var start = 0;
	var end = array.length - 1;
	var mid = 0;
	var currentElem;
	var comps = 0;


	while(start <= end){
		comps++;
		mid = (start + end) / 2 | 0;
		currentElem = array[mid];
		if(find > currentElem)
			start = mid + 1;
		else if(find < currentElem)
			end = mid - 1;
		else
			return comps;
	}
	return -1;
}

function drawChart(array, max) {
        var data = google.visualization.arrayToDataTable(array);

        var options = {
          title: 'Size Vs Comparisons',
          hAxis: {title: 'Size', minValue: 0, maxValue: 10000},
          vAxis: {title: 'Comparisons', minValue: 0, maxValue: max},
          legend: 'none',
          pointSize: 1,
          trendlines: { 0: {} }  
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }