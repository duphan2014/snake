function checkSupported() {
    canvas = document.getElementById('canvas');

    if (canvas.getContext){
      ctx = canvas.getContext('2d');
      // Canvas is supported
      ctx.fillStyle = "rgb(200, 0, 0)";

      var x = 50;
      var y = 50;
      var width = 10;
      var height = 10;
      this.currentPosition = {x, y};
      currentPosition['x']=50;
      currentPosition['y']=50;
      ctx.fillRect(currentPosition['x'], currentPosition['y'], width, height);
        this.previousPosition = {x, y};
        // Sets the grid dimensions as one value
        this.gridSize = 10;

        document.onkeydown = function(event) {
            console.log(event.keyCode);
            
            var keyCode;
        
            if(event == null)
            {
                keyCode = window.event.keyCode;
            }
            else
            {
                keyCode = event.keyCode;
            }
        
            switch(keyCode)
            {
            // left
            case 37:
                // set new position, and draw square at that position.
                this.previousPosition = this.currentPosition;
                currentPosition['x'] = currentPosition['x'] - gridSize;
                ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
                console.log(currentPosition['x']);
                break;
        
            // up
            case 38:
                this.previousPosition = this.currentPosition;
                currentPosition['y'] = currentPosition['y'] - gridSize;
                ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
                break;
        
            // right
            case 39:
                this.previousPosition = this.currentPosition;
                currentPosition['x'] = currentPosition['x'] + gridSize;
                ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
                break;
        
            // down
            case 40:
                this.previousPosition = this.currentPosition;
                currentPosition['y'] = currentPosition['y'] + gridSize;
                ctx.fillRect(currentPosition['x'], currentPosition['y'], gridSize, gridSize);
                break;
        
            default:
                break;
            }
            ctx.clearRect(previousPosition['x'], previousPosition['y'], gridSize, gridSize);
            console.log(currentPosition);
        }
    } else {
      // Canvas is not supported
      alert("We're sorry, but your browser does not support the canvas tag. Please use any web browser other than Internet Explorer.");
    }
}

