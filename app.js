var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 1000,
    image : {
        source: 'assets/HEXDEVLABSLOGO1.png',
        // stretchMode: ['stretch', 'stretch-if-bigger'],
        blendingMode: 'multiply',
        stretchMode: ['none', 'none'],
      },
      states : {
          "default-state": {
              gradients: [
                  ['#29323c', '#0037ff'],
                  ['#ff0000', '#9000ff'],
                  ['#fbff00', '#018c1d'],
                  ['#19c8cf', '#ff00ee']
              ],
              transitionSpeed: 2500
          }
      }
      });
