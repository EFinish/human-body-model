//element to contain canvas
var containerElement = document.getElementById("human-body-model-renderer-container");

//make it nice and square :p
var canvasWidth = containerElement.offsetWidth - 200;
var canvasHeight = canvasWidth;

//initialize scene object
var scene = new THREE.Scene();

//initlialize camera object
var camera = new THREE.PerspectiveCamera( 75, canvasWidth/canvasHeight, 0.1, canvasHeight );

//initialize renderer object
var renderer = new THREE.WebGLRenderer();
renderer.setSize(
    canvasWidth, 
    canvasHeight 
);

//append renderer to element we want the 3d model contained to
containerElement.appendChild(renderer.domElement);

//create humanshape to eventaully be put into geometry object
var humanShape = new THREE.Shape();

//define x and y for shape creation
var x = 0, y = 0;

humanShape.moveTo( x + 5, y + 5 );
humanShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
humanShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
humanShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
humanShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
humanShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
humanShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

//initialize geometry object
var geometry = new THREE.ShapeGeometry(humanShape);

//initialize material object
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

//create mesh object by adding the two together
var humanMesh = new THREE.Mesh(geometry, material);

//add mesh to scene
scene.add(humanMesh);

camera.position.z = 50;
var animate = function () {
    requestAnimationFrame( animate );

    humanMesh.rotation.x += 0.01;
    humanMesh.rotation.y += 0.01;

    renderer.render(scene, camera);
};
animate();