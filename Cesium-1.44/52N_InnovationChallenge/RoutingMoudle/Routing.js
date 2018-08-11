
// const R3route = {
//   start: {R3117: 1},
//   R31181: {R3117: 1},
//   R3117: {start: 1, R31181: 1, R3119:2},
//   R3119: {R3117:2, LeftCorridor:1},
//   R31151: {LeftCorridor:2},
//   R3116: {LeftCorridor:1},
//   R3115: {LeftCorridor:1},
//   R3114: {LeftCorridor:2},
//   R3113: {LeftCorridor:4},
//   R3112: {LeftCorridor:3},
//   R3111: {LeftCorridor:2},
//   LeftCorridor: {R3116:1, R3115:1, R21151:2, R3119:2, R3114:1, R3113:4, R3112:3, R3111:1, MidCorridor:3},
//   MidCorridor: {LeftCorridor:3, R3110:1, R3102:2,R3111:3, RightCorridor:3, R3101:2, Finish: 3},
//   RightCorridor: {MidCorridor:3, R3103:1, R3105:1, R3106:2, R3107:3, R3108:4, R3109:3},
//   R3105: {RightCorridor: 1},
//   R3106: {RightCorridor: 2},
//   R3107: {RightCorridor: 3},
//   R3108: {RightCorridor: 4},
//   R3109: {RightCorridor: 3},
//   finish: {}
// };

// const R3route = {
//   //Level-1
//   "R3-118": {"R3-117": 1},
//   "R3-118-1": {"R3-117": 1},
//   "R3-117": {"R3-119":2},
//   "R3-119": {"Level-1-Left-Corridor":1},
//   "R3-115-1": {"Level1-Left-Corridor":2},
//   "R3-116": {"Level-1-Left-Corridor":1},
//   "R3-115": {"Level-1-Left-Corridor":1},
//   "R3-114": {"Level-1-Left-Corridor":2},
//   "R3-113": {"Level-1-Left-Corridor":4},
//   "R3-112": {"Level-1-Left-Corridor":3},
//   "R3-111": {"Level-1-Left-Corridor":2},
//   "R3-110": {"Level-1-Mid-Corridor":1},
//   "R3-102": {"Level-1-Mid-Corridor":1},
//   "R3-103": {"Level-1-Right-Corridor":2},
//   "Level-1-Left-Corridor": {"Level-1-Mid-Corridor":3, "Left-Door": 2},
//   "Level-1-Mid-Corridor": {"Main-Door": 3},
//   "Level-1-Right-Corridor": {"Level-1-Mid-Corridor":3, "Right-Door": 2},
//   "R3-105": {"Level-1-Right-Corridor": 1},
//   "R3-106": {"Level-1-Right-Corridor": 2},
//   "R3-107": {"Level-1-Right-Corridor": 3},
//   "R3-108": {"Level-1-Right-Corridor": 4},
//   "R3-109": {"Level-1-Right-Corridor": 3},
//   "Left-Stairs-1-2": {"Level-1-Left-Corridor": 2},
//   "Right-Stairs-1-2": {"Level-1-Right-Corridor": 1},
//   "Main-Door":{finish: 1},
//   "Left-Door":{finish: 1},
//   "Right-Door":{finish: 1},
//   finish: {},
//   //Level-2
//   "Right-Stairs-2-1": {"Right-Stairs-1-2": 2},
//   "Level-2-Right-Corridor": {"Right-Stairs-2-1": 2, "Level-2-Mid-Corridor": 4},
//   "R3-201": {"Level-2-Right-Corridor":3},
//   "R3-202": {"Level-2-Right-Corridor":4},
//   "R3-203": {"Level-2-Right-Corridor":4},
//   "R3-204": {"Level-2-Right-Corridor":3},
//   "R3-204-1": {"Level-2-Right-Corridor":2},
//   "R3-205": {"Level-2-Right-Corridor":1},
//   "R3-206": {"Level-2-Right-Corridor":3},
//   "R3-207": {"Level-2-Right-Corridor":4},
//   "R3-208": {"Level-2-Right-Corridor":3},
//   "R3-209": {"Level-2-Right-Corridor":2},
//   "Level-2-Mid-Corridor": {"Level-2-Right-Corridor":3,"Level-2-Left-Corridor":3},
//   "R3-211": {"Level-2-Mid-Corridor":3, "Level-2-Right-Corridor":1},
//   "R3-213": {"Level-2-Mid-Corridor":2, "Level-2-Right-Corridor":2},
//   "R3-215": {"Level-2-Mid-Corridor":1},
//   "R3-217": {"Level-2-Mid-Corridor":2, "Level-2-Left-Corridor":2},
//   "R3-219": {"Level-2-Mid-Corridor":3, "Level-2-Left-Corridor":1},
//   "R3-210": {"Level-2-Mid-Corridor":3, "Level-2-Right-Corridor":1},
//   "R3-212": {"Level-2-Mid-Corridor":2, "Level-2-Right-Corridor":2},
//   "R3-214": {"Level-2-Mid-Corridor":1},
//   "R3-216": {"Level-2-Mid-Corridor":2, "Level-2-Left-Corridor":2},
//   "R3-218": {"Level-2-Mid-Corridor":3, "Level-2-Left-Corridor":1},
//   "Left-Stairs-2-1": {"Left-Stairs-1-2": 2},
//   "Level-2-Left-Corridor": {"Left-Stairs-2-1": 2, "Level-2-Mid-Corridor": 4 },
//   "R3-233": {"Level-2-Left-Corridor":1},
//   "R3-220": {"Level-2-Left-Corridor":3},
//   "R3-221": {"Level-2-Left-Corridor":4},
//   "R3-222": {"Level-2-Left-Corridor":4, "R3-221":1, "R3-223":2},
//   "R3-223": {"Level-2-Left-Corridor":2},
//   "R3-224": {"Level-2-Left-Corridor":1},
//   "R3-225": {"Level-2-Left-Corridor":1.5},
//   "R3-226": {"Level-2-Left-Corridor":2},
//   "R3-227": {"Level-2-Left-Corridor":3},
//   "R3-229": {"Level-2-Left-Corridor":4},
//   "R3-231": {"Level-2-Left-Corridor":5},
//   "R3-232": {"Level-2-Left-Corridor":5},
//   "R3-230": {"Level-2-Left-Corridor":4},
//   "R3-228": {"Level-2-Left-Corridor":3}
// };

const lowestCostNode = (costs, processed) => {
  return Object.keys(costs).reduce((lowest, node) => {
    if (lowest === null || costs[node] < costs[lowest]) {
      if (!processed.includes(node)) {
        lowest = node;
      }
    }
    return lowest;
  }, null);
};

//加入障礙物
function AddObstacle(){
  var obstacle = document.getElementById("obstacle").value;
  R3route[obstacle] = {};
  // delete R3route[obstacle];
}

//規畫路徑
function routing(){
  var start = document.getElementById("start").value;
  dijkstra(R3route,start);
}

// function that returns the minimum cost and path to reach Finish
const dijkstra = (graph,start) => {
  var graph;

  graph.start = graph[start];

  // track lowest cost to reach each node
  const costs = Object.assign({finish: Infinity}, graph.start);

  // track paths
  const parents = {finish: null};
  for (let child in graph.start) {
    // parents[child] = 'R3107';
    parents[child] = start;
  }

  // track nodes that have already been processed
  const processed = [];

  let node = lowestCostNode(costs, processed);

  while (node) {
    let cost = costs[node];
    let children = graph[node];
    for (let n in children) {
      let newCost = cost + children[n];
      if (!costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = lowestCostNode(costs, processed);
  }

  let optimalPath = ['finish'];
  let parent = parents.finish;
  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }
  optimalPath.reverse();

  const results = {
    distance: costs.finish,
    path: optimalPath
  };
  
  console.log(results);

  judgment(results);
  findCoordinates(results);
  return results;
};


//判斷樓梯是否通行
function judgment(results){
    if(results.distance == "Infinity"){
    console.log("Secnond option")
    StairBlock(start);
  }else{
    console.log("nothing");
  }
}


//如果樓梯無法通行升降梯
function StairBlock(start){
  var EscapeSling = {
  "Level-2-Right-Corridor": {"Level-2-Mid-Corridor": 4},
  "R3-201": {"Level-2-Right-Corridor":3},
  "R3-202": {"Level-2-Right-Corridor":4},
  "R3-203": {"Level-2-Right-Corridor":4},
  "R3-204": {"Level-2-Right-Corridor":3},
  "R3-204-1": {"Level-2-Right-Corridor":2},
  "R3-205": {"Level-2-Right-Corridor":1},
  "R3-206": {"Level-2-Right-Corridor":3},
  "R3-207": {"Level-2-Right-Corridor":4},
  "R3-208": {"Level-2-Right-Corridor":3},
  "R3-209": {"Level-2-Right-Corridor":2},
  "Level-2-Mid-Corridor": {"Level-2-Right-Corridor":3,"Level-2-Left-Corridor":3},
  "R3-211": {"Level-2-Mid-Corridor":3, "Level-2-Right-Corridor":1},
  "R3-213": {"Level-2-Mid-Corridor":2, "Level-2-Right-Corridor":2},
  "R3-215": {"Level-2-Mid-Corridor":1},
  "R3-217": {"Level-2-Mid-Corridor":2, "Level-2-Left-Corridor":2},
  "R3-219": {"Level-2-Mid-Corridor":3, "Level-2-Left-Corridor":1},
  "R3-210": {"Level-2-Mid-Corridor":3, "Level-2-Right-Corridor":1},
  "R3-212": {"Level-2-Mid-Corridor":2, "Level-2-Right-Corridor":2},
  "R3-214": {"Level-2-Mid-Corridor":1},
  "R3-216": {"Level-2-Mid-Corridor":2, "Level-2-Left-Corridor":2},
  "R3-218": {"Level-2-Mid-Corridor":3, "Level-2-Left-Corridor":1},
  "Level-2-Left-Corridor": {"Level-2-Mid-Corridor": 4 ,"EscapeSling": 3},
  "R3-233": {"Level-2-Left-Corridor":1},
  "R3-220": {"Level-2-Left-Corridor":3},
  "R3-221": {"Level-2-Left-Corridor":4},
  "R3-222": {"Level-2-Left-Corridor":4, "R3-221":1, "R3-223":2,"EscapeSling": 1},
  "R3-223": {"Level-2-Left-Corridor":2},
  "R3-224": {"Level-2-Left-Corridor":1},
  "R3-225": {"Level-2-Left-Corridor":1.5},
  "R3-226": {"Level-2-Left-Corridor":2},
  "R3-227": {"Level-2-Left-Corridor":3, "EscapeSling": 4},
  "R3-229": {"Level-2-Left-Corridor":4, "EscapeSling": 3},
  "R3-231": {"Level-2-Left-Corridor":5, "EscapeSling": 2},
  "R3-232": {"Level-2-Left-Corridor":5, "EscapeSling": 2},
  "R3-230": {"Level-2-Left-Corridor":4, "EscapeSling": 3},
  "R3-228": {"Level-2-Left-Corridor":3, "EscapeSling": 4},
  "EscapeSling": {finish: 1},
  finish: {}
  };

  var graph = EscapeSling;
  var start = document.getElementById("start").value;

  graph.start = graph[start];

  // track lowest cost to reach each node
  const costs = Object.assign({finish: Infinity}, graph.start);

  // track paths
  const parents = {finish: null};
  for (let child in graph.start) {
    parents[child] = start;
  }

  // track nodes that have already been processed
  const processed = [];

  let node = lowestCostNode(costs, processed);

  while (node) {
    let cost = costs[node];
    let children = graph[node];
    for (let n in children) {
      let newCost = cost + children[n];
      if (!costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = lowestCostNode(costs, processed);
  }

  let optimalPath = ['finish'];
  let parent = parents.finish;
  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }
  optimalPath.reverse();

  const results = {
    distance: costs.finish,
    path: optimalPath
  };
  
  console.log(results);
  return results;

}



// var R31F_point = Cesium.GeoJsonDataSource.load('./GeoJSON/R3_point.geojson');

// R31F_point.then(
//     function(dataSource) {
//         Models = dataSource.entities.values;
//         // for (var i = 0; i < Models.length; i++) {
//         //     Models[i].polygon.extrudedHeight = 3; // or height property
//         // }
//         viewer.dataSources.add(dataSource);
//         viewer.zoomTo(dataSource);
//     }
// );



function displayRoute(results){
  console.log(result);
}



//為了findResultNode所做的
var search;

//用來找Results裡面各的node對應的feature
function findResultNode(features){
  return features.properties.Name === search;
};

//找到Result每個Node對應feature的coordinate
function findCoordinates(results){
  var resultsWithCoordinate = [];
  for(var i=0; i<results.path.length-1; i++){
    search = results.path[i];  
    var NodeCoordinates = R3_point.features.find(findResultNode);
    resultsWithCoordinate[i] = NodeCoordinates.geometry.coordinates;
  }
//resultsWithCoordinate 是含有每個Node座標的陣列
  // console.log(resultsWithCoordinate);
  formatForCesiumPolyline(resultsWithCoordinate)
};


//將得到的座標轉換成CesiumPolyline的格式
function formatForCesiumPolyline(resultsWithCoordinate){
  var newFormat = [];
  for(var i=0; i<resultsWithCoordinate.length;i++){
    for(var j=0; j<3;j++){
      newFormat.push(resultsWithCoordinate[i][j]);
    }
  }
  // console.log(newFormat);
  RouteVisualize(newFormat);
}

var EscapeRoute;

//在Cesium中畫出路線
function RouteVisualize(newFormat){
  var EscapeRoute = viewer.entities.add({
      name : 'Escape Route',
      polyline : {
          positions : Cesium.Cartesian3.fromDegreesArrayHeights(newFormat),
          width : 20,
          followSurface : false,
          material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE)
      }
  });  
}

var R3_point = {
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": 1,
        "Name": "R3-118",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18747912624934,
          24.967953892881198,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 2,
        "Name": "R3-118-1",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18749126161435,
          24.967914848663348,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 3,
        "Name": "R3-117",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18742952954018,
          24.967914848663348,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 4,
        "Name": "R3-119",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18742952954018,
          24.967854171838308,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 5,
        "Name": "R3-115-1",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18740473118561,
          24.967857865210267,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 6,
        "Name": "R3-115",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.1873878471995,
          24.967825152487205,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 7,
        "Name": "R3-116",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18736515934319,
          24.967824097238072,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 8,
        "Name": "R3-114",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18740103781364,
          24.967733873437364,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 9,
        "Name": "R3-111",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18746540801064,
          24.967749174549766,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 10,
        "Name": "R3-113",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743216766302,
          24.96764681538405,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 11,
        "Name": "R3-112",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18747437762826,
          24.96770010546517,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 12,
        "Name": "R3-110",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18752766770938,
          24.967851006090918,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 13,
        "Name": "R3-102",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18764321748922,
          24.967847840343524,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 14,
        "Name": "R3-101",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18764321748922,
          24.967747064051505,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 15,
        "Name": "R3-103",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18773291366537,
          24.96789901992638,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 16,
        "Name": "R3-105",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18779095236758,
          24.967771862406085,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 17,
        "Name": "R3-106",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18779095236758,
          24.96773229056367,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 18,
        "Name": "R3-107",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18779253524127,
          24.967695356844082,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 19,
        "Name": "R3-108",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.1877492700269,
          24.967645232510357,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 20,
        "Name": "R3-109",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18769070370013,
          24.967701160714302,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 21,
        "Name": "Left-Stairs-1-2",
        "Type": "Stairs"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18749337211261,
          24.967854699462876,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 22,
        "Name": "Right-Stairs-1-2",
        "Type": "Stairs"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18767645783686,
          24.96775445079542,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 23,
        "Name": "Level-1-Female-WC",
        "Type": "WC"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18770864293536,
          24.967750757423463,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 24,
        "Name": "Level-1-Male-WC",
        "Type": "WC"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18745907651585,
          24.967851533715482,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 25,
        "Name": "Left-Door",
        "Type": "Exit"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18735355160275,
          24.967798771258927,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 26,
        "Name": "Right-Door",
        "Type": "Exit"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18782313746608,
          24.96779718838523,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 27,
        "Name": "Mid-Door",
        "Type": "Exit"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18757673679397,
          24.96769641209321,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 28,
        "Name": "Level-1-Left-Corridor-A",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743269528758,
          24.967704326461696,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 29,
        "Name": "Level-1-Left-Corridor-B",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18736779746602,
          24.967798771258927,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 30,
        "Name": "Level-1-Left-Corridor-C",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18738837482408,
          24.967797716009795,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 31,
        "Name": "Level-1-Left-Corridor-D",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18740525881017,
          24.967798771258927,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 32,
        "Name": "Level-1-Left-Corridor-E",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743164003845,
          24.967797716009795,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 33,
        "Name": "Level-1-Left-Corridor-F",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18746276988782,
          24.96779718838523,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 34,
        "Name": "Level-1-Left-Corridor-G",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18749442736174,
          24.96779718838523,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 35,
        "Name": "Level-1-Mid-Corridor-A",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18752766770938,
          24.967797716009795,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 36,
        "Name": "Level-1-Mid-Corridor-B",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18757251579744,
          24.967796660760666,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 37,
        "Name": "Level-1-Mid-Corridor-C",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18764585561206,
          24.967798243634363,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 38,
        "Name": "Level-1-Mid-Corridor-D",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18757568154484,
          24.9677502297989,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 39,
        "Name": "Level-1-Right-Corridor-A",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18767645783686,
          24.96779507788697,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 40,
        "Name": "Level-1-Right-Corridor-B",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18774241090755,
          24.967796660760666,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 41,
        "Name": "Level-1-Right-Corridor-C",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18777195788323,
          24.967798771258927,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 42,
        "Name": "Level-1-Right-Corridor-D",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18774346615669,
          24.967771862406085,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 43,
        "Name": "Level-1-Right-Corridor-E",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18774293853211,
          24.967728069567144,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 44,
        "Name": "Level-1-Right-Corridor-F",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18774399378125,
          24.967698522591476,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 45,
        "Name": "Elevator-1",
        "Type": "Elevator"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.1877202506758,
          24.967773972904347,
          1
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 46,
        "Name": "R3-231",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18738230714166,
          24.967962334874247,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 47,
        "Name": "R3-229",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18738283476623,
          24.96793014977575,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 48,
        "Name": "R3-227",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.1873849452645,
          24.967895854178987,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 49,
        "Name": "R3-226",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18738547288906,
          24.967863141455926,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 50,
        "Name": "R3-225",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18738600051363,
          24.96783042873286,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 51,
        "Name": "R3-224",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18738547288906,
          24.96775972704108,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 52,
        "Name": "R3-223",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18738441763992,
          24.967731762939106,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 53,
        "Name": "R3-222",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18741713036299,
          24.967636790517307,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 59,
        "Name": "R3-221",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18749416354956,
          24.967637318141875,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 58,
        "Name": "R3-220",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.1874888873039,
          24.96769693971778,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 57,
        "Name": "R3-233",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18748835967934,
          24.967769751907824,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 54,
        "Name": "R3-232",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18749099780216,
          24.967961279625115,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 56,
        "Name": "R3-230",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18749099780216,
          24.967924345905526,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 56,
        "Name": "R3-228",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18749099780216,
          24.967898492301817,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 60,
        "Name": "Level-2-Left-Female-WC",
        "Type": "WC"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18747464144063,
          24.96786841770158,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 61,
        "Name": "Level-2-Left-Male-WC",
        "Type": "WC"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18746514419846,
          24.967827790610034,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 62,
        "Name": "Level-2-Left-Corridor-A",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743612484735,
          24.96796180724968,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 63,
        "Name": "Level-2-Left-Corridor-B",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743744390879,
          24.96792883071434,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 64,
        "Name": "Level-2-Left-Corridor-C",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743691628421,
          24.967897173240406,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 65,
        "Name": "Level-2-Left-Corridor-D",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743691628421,
          24.96786235001908,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 66,
        "Name": "Level-2-Left-Corridor-E",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743691628421,
          24.967829637296017,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 67,
        "Name": "Level-2-Left-Corridor-F",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743849915792,
          24.96779692457295,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 68,
        "Name": "Level-2-Left-Corridor-G",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743955440705,
          24.967766849972715,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 69,
        "Name": "Level-2-Left-Corridor-H",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743849915792,
          24.96773572012335,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 70,
        "Name": "Level-2-Left-Corridor-I",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18743849915792,
          24.967685068165057,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 71,
        "Name": "Level-2-Left-Corridor-J",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18750075885664,
          24.96779692457295,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 72,
        "Name": "Left-Stairs-2-1",
        "Type": "Stairs"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18750181410579,
          24.967857073773423,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 73,
        "Name": "R3-218",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18752925058318,
          24.96785390802603,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 74,
        "Name": "R3-216",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18756143568169,
          24.9678528527769,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 75,
        "Name": "R3-214",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18758781690997,
          24.967853380401465,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 76,
        "Name": "R3-212",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18761683626107,
          24.967851797527768,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 77,
        "Name": "R3-210",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18764585561217,
          24.9678528527769,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 78,
        "Name": "R3-219",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18753241633058,
          24.967740468744438,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 79,
        "Name": "R3-217",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18756249093082,
          24.967740468744438,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 80,
        "Name": "R3-215",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18759256553105,
          24.967740468744438,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 81,
        "Name": "R3-213",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18761841913476,
          24.967739941119873,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 82,
        "Name": "R3-211",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18764954898413,
          24.967740996369006,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 83,
        "Name": "Level-2-Mid-Corridor-A",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18753241633058,
          24.967795341699254,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 84,
        "Name": "Level-2-Mid-Corridor-B",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18756354617994,
          24.967795869323822,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 85,
        "Name": "Level-2-Mid-Corridor-C",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18759151028192,
          24.967796396948387,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 86,
        "Name": "Level-2-Mid-Corridor-D",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18761894675933,
          24.967794286450125,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 87,
        "Name": "Level-2-Mid-Corridor-E",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18764902135956,
          24.967793758825557,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 88,
        "Name": "R3-209",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18769281419851,
          24.96786129476995,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 89,
        "Name": "R3-208",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18769228657393,
          24.96789770086497,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 90,
        "Name": "R3-207",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18774399378137,
          24.967949408072393,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 91,
        "Name": "R3-206",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18779464573966,
          24.96790139423693,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 92,
        "Name": "R3-205",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18779464573966,
          24.967769488095545,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 93,
        "Name": "R3-204-1",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18779622861335,
          24.967737830621612,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 94,
        "Name": "R3-204",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18779833911161,
          24.96769403778267,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 95,
        "Name": "R3-203",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18777354075704,
          24.967638109578726,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 96,
        "Name": "R3-202",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18768806557742,
          24.967638109578726,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 97,
        "Name": "R3-201",
        "Type": "Room"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18768384458089,
          24.967696148280933,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 98,
        "Name": "Level-2-Right-Male-WC",
        "Type": "WC"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18770389431438,
          24.96772252950921,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 99,
        "Name": "Level-2-Right-Female-WC",
        "Type": "WC"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18770283906525,
          24.96774732786379,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 101,
        "Name": "Elevator-2",
        "Type": "Elevator"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18771497443026,
          24.967771070969242,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 100,
        "Name": "Right-Stairs-2-1",
        "Type": "Stairs"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18767540258784,
          24.967744162116396,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 102,
        "Name": "Level-2-Right-Corridor-A",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18767593021241,
          24.967793231200993,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 103,
        "Name": "Level-2-Right-Corridor-B",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.1877144468057,
          24.967795341699254,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 104,
        "Name": "Level-2-Right-Corridor-C",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18774135565853,
          24.967796396948387,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 108,
        "Name": "Level-2-Right-Corridor-G",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18774293853224,
          24.96786235001908,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 109,
        "Name": "Level-2-Right-Corridor-H",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.1877450490305,
          24.967899811363232,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 105,
        "Name": "Level-2-Right-Corridor-D",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.1877434661568,
          24.96776526709902,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 106,
        "Name": "Level-2-Right-Corridor-E",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.1877418832831,
          24.967738885870745,
          4
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 107,
        "Name": "Level-2-Right-Corridor-F",
        "Type": "Corridor"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.18773133079179,
          24.967695620656368,
          4
        ]
      }
    }
  ]
};
