/*
 * Run BSTTest runs the test on the BST
 */
function runBSTTest(){
  var start = new Date().getTime();
  var comps = [['Size', 'Comparisons']];
  var max = 0;

  // loop over sizes
  for(var i = 100; i < 10000; i++){
    // create new tree
    var tree = new BST();
    var numbers = Array.apply(0, Array(i)).map(function(val, i) { return i; });
    // randomize arrat
    numbers.sort(function(){ return Math.random() - 0.5});

    // fill tree
    for(var j = 0; j < numbers.length; j++){
      tree.add(numbers[j]);
    }
    var comparisons = 0;

    // loop over tests
    for(var j = 0; j < 1000; j ++){
      // get randmom item from array
      var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      comparisons += tree.contains(randomNumber);
    }

    // delete tree (garbage collection isn't greate)
    delete tree;
    comparisons /= 1000;
    // save max value for plotting
    max = comparisons > max? comparisons: max;
    comps.push([i, comparisons]);
  }
  var end = new Date().getTime();
  var diff = end - start;
  drawChart(comps, max);
}

/*
 * Run Array Test runs the test on the Binary Search
 */
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

/**
 * Amalgamation of both test and plots both at the end, including y = log2(x)
 */
function runBothTests(){
  var start = new Date().getTime();
  var comps = [['Size', 'Binary Search', 'BST', 'Log2(n)']];
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
    var appender = [[0,0,0]];
    appender[0] = i;
    appender[1] = comparisons;
    var tree = new BST();
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
    appender[2] = comparisons;
    appender[3] = Math.log2(i);
    comps.push(appender);
  }
  var end = new Date().getTime();
  var diff = end - start;
  console.log("Finished computing, plotting graph", comps);
  drawChart(comps, max);
}

/**
 * binarySearch, searches a given array to find a given element
 */
function binarySearch(array, find){
  var start = 0;
  var end = array.length - 1;
  var mid = 0;
  var currentElem;
  var comps = 0;


  while(start <= end){
    comps++;
    mid = (start + end) >> 1;
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

/**
 * Draw google chart of data
 */
function drawChart(array, max) {
    var data = google.visualization.arrayToDataTable(array, false);
    var options = {
      title: 'Size Vs Comparisons',
      hAxis: {title: 'Size', minValue: 0, maxValue: 10000},
      vAxis: {title: 'Comparisons', minValue: 0, maxValue: max},
      legend: 'right',
      pointSize: 1
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    
    chart.draw(data, options);

    var csv = google.visualization.dataTableToCsv(data);
    console.log(csv);
    

    window.open(chart.getImageURI());
}
