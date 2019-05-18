document.addEventListener("DOMContentLoaded", (e)=>{

    const inputs = document.querySelectorAll('.controls input');
    function handleUpdate(){
        const suffix = this.dataset.sizing || '';// return object with all dataset name: value pairs; ''empty string not to get undefined if lack of it ex with color
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
        

        // name o inputs are same as --css var. like blur etc
        //console.log(suffix)
        //console.log(this.value);

    }

inputs.forEach(input=> input.addEventListener('change', handleUpdate));
inputs.forEach(input=> input.addEventListener('mousemove', handleUpdate));


});