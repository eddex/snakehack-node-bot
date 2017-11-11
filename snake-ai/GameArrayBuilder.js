var gameObjects = require('./GameObjects.js')

module.exports = {

    createGameArray: function(data) {

        console.log("GameBuilder.createGameArray()")

        var gameArray = createArray(data.width, data.height)

        var myId = data.you

        // put snakes on game array
        data.snakes.forEach(function(snake) {

            var isHead = true; // todo: make sure this is the head.. maybe it's the tail
            snake.coords.forEach(function(coord) {

                var objectToPlace = gameObjects.EnemySnakeBody
                if (isHead) {
                    if (snake.id == myId) {
                        objectToPlace = gameObjects.PlayerSnakeHead
                    } else {
                        objectToPlace = gameObjects.EnemySnakeHead
                    }
                } else if (snake.id == myId) {
                    objectToPlace = gameObjects.PlayerSankeBody
                }
                
                gameArray[coord[0]][coord[1]] = objectToPlace
            }, this)
        }, this)

        return gameArray
    },

    // Copy pasta from Stackoverflow. Creates 2 dimensional array
    createArray: function(length) {
        var arr = new Array(length || 0),
            i = length;

        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = createArray.apply(this, args);
        }

        return arr;
    }
}
