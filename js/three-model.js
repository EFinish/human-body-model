//element to contain canvas
var containerElement = document.getElementById("human-body-model-renderer-container");
var canvasHeight = 1000;
var canvasWidth = containerElement.offsetWidth;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, canvasWidth/canvasHeight, 0.1, canvasHeight );

var renderer = new THREE.WebGLRenderer();
renderer.setSize(
    canvasWidth, 
    canvasHeight 
);
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();