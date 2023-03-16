const input = document.querySelectorAll('input');
function handleUpdate(){
    //console.log(this.dataset); //This shows the attributes of data (in the form of an object) that would be manipulated
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value +suffix);
}
input.forEach(input=>input.addEventListener('change', handleUpdate));
input.forEach(input=>input.addEventListener('mousemove', handleUpdate));
