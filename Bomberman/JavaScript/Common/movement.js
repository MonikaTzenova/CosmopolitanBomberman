function updateBomberManPosition(bomberMan,canvas,dirDeltas,dir) {
    bomberMan.x = (bomberMan.x+canvas.width)% canvas.width
    bomberMan.y = (bomberMan.y+canvas.height)% canvas.height;
    bomberMan.x +=dirDeltas[dir].x;
    bomberMan.y +=dirDeltas[dir].y;
}