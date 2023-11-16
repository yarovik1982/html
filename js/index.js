const form = document.querySelector('form');
const inputs = Array.prototype.slice.call(form.getElementsByTagName('input'));

form.addEventListener('keydown', function(e) {
    const target = e.target;
    const index = inputs.indexOf(target);
    
    if (e.key !== "Tab") {
        return;
    }
    
    if (e.shiftKey) { // shift + tab
        if (index === 0) {
            inputs[inputs.length - 1].focus();
            e.preventDefault();
        }
    } else { // tab
        if (index === inputs.length - 1) {
            inputs[0].focus();
            e.preventDefault();
        }
    }
});
