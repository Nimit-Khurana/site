import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

const viewer = new Viewer(document.getElementById('images'), {
    inline: true,
    viewed() {
        viewer.zoomTo(1);
    },
});
// Then, show the image by click it, or call `viewer.show()`.

// View a list of images
//const gallery = new Viewer(document.getElementByClassName('images'));