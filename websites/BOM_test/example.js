let open_window;
function doOpen() {
    open_window = window.open("http://127.0.0.1:5501/websites/index.html", "online parking", "height=600, width=600");
  //  open_window.open(800, 800);
}
function doMove() {
    open_window = window.open("http://127.0.0.1:5501/websites/index.html", "online parking", "height=600, width=600");
    open_window.moveTo(800, 800);
}
function doClose() {
    open_window = window.open("http://127.0.0.1:5501/websites/index.html", "online parking", "height=600, width=600");
    open_window.close();
 }
 function doResize(){
    open_window = window.open("http://127.0.0.1:5501/websites/index.html", "online parking", "height=600, width=600");
    open_window.resizeTo(1600, 1200);  
 }

// let window_Operations;
// function doOpen() {
//     window_Operations = window.open("https://www.google.com", "google", "height=600,width=600");
// }
// function doMove() {
//     if (window_Operations) {
//         window_Operations.moveTo(800, 800);
//     }
// }
// function doClose() {
//     if (window_Operations) {
//         window_Operations.close();
//     }
// }