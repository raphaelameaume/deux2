/**
 * Mouse Manager
 */

class MouseManager {


    static start( checkMouseSpeed = false ) {

        // speed
        window.mouseSpeedX = 0;
        window.mouseSpeedY = 0;

        window.mouseLastX = 0;
        window.mouseLastY = 0;

        // direction
        window.mouseDirectionX = 0;
        window.mouseDirectionY = 0;

        // position
        window.mouseX = 0;
        window.mouseY = 0;

        if(checkMouseSpeed) window.setInterval( MouseManager.getSpeed, 30 );

        window.addEventListener('mousemove', MouseManager.move );
    }

    static move(e) {

        window.mouseX = e.clientX;
        window.mouseY = e.clientY;

        MouseManager.getDirection(e);
    }

    static getDirection(e) {

        // x
        if (window.mouseX < e.pageX)
            window.mouseDirectionX = 1;
        else if (window.mouseX > e.pageX)
            window.mouseDirectionX = -1;
        else
            window.mouseDirectionX = 0;

        // y
        if (window.mouseY < e.pageY)
            window.mouseDirectionY = 1;
        else if (window.mouseY > e.pageY)
            window.mouseDirectionY = -1;
        else
            window.mouseDirectionY = 0;
    }

    static getSpeed() {
        window.mouseSpeedX = window.mouseX - window.mouseLastX;
        window.mouseSpeedY = window.mouseY - window.mouseLastY;

        window.mouseLastX = window.mouseX;
        window.mouseLastY = window.mouseY;
    }
    
}

export default MouseManager;