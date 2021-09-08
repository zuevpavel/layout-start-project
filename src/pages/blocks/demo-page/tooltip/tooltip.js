import ready from 'Utils/documentReady.js';

ready(function(){
    // show tooltip
    let  tooltip = document.querySelectorAll(".tooltip");
    tooltip.forEach(element => {
        element.addEventListener("mouseover", mOver, false);
        element.addEventListener("mouseout", mOut, false);

        function mOver() {
            this.classList.add("tooltip--show");
        }

        function mOut() {
            this.classList.remove("tooltip--show");
        }
    });
});
