function initLevel(numberLevel, scene,  world){
	for ( i = scene.children.length - 1; i >= 0 ; i -- ) {
        obj = scene.children[ i ];
        scene.remove(obj);
	}
	
	for ( i = world.bodies.length - 1; i >= 0 ; i -- ) {
        obj = world.bodies[ i ];
        world.remove(obj);
	}
	
	//ajout du design de la fronde
    makeSupportProjectile(scene, world);
                
	switch(numberLevel){
		case 1 : 
			initLevelOne(scene,world);
			break;
		default :
			break;
	}

}

function initLevelOne( scene, world){
	var mass;
	var gravity = -1000;

	var mesh;
	var edges;
   
	makeObstacleTexture(scene, world, 250, 250, 60, -400, 'bois.jpeg');

	makeObstacleTexture(scene, world, 250, 250, 325, -400, 'bois.jpeg');

	makeObstacleTexture(scene, world, 250, 250, 625, -400, 'bois.jpeg');

    // définition d'un obstacle en petit morceau ;

    makeObstacleColor(scene, world, 250, 50, 875, -300, "#ce873e");

	makeObstacleColor(scene, world, 50, 250, 775, -400, "#ce873e");

	makeObstacleColor(scene, world, 50, 250, 975, -150, "#ce873e");
   
	makeObstacleColor(scene, world, 250, 50, 875, -50, "#ce873e");

	makeObstacleColor(scene, world, 50, 250, 775, -150, "#ce873e");

	makeObstacleColor(scene, world, 50, 250, 975, -400, "#ce873e");

    
	makeObstacleTexture(scene, world, 250, 250, 625, -150, 'bois.jpeg');

    // on créé la cube et on lui applique une texture sous forme d’image
    makeFloor(scene, world);

	missile = makeProjectile(scene, world);

    
}