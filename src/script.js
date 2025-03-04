const navDialog = document.getElementById("nav-dialog");

function handleMenu(){
    navDialog.classList.toggle('hidden');
}

let persons = {
    names: ['setu' , 'rahiq', 'rana'],
    sayHello: function (){
        console.log('Hello' + this.names);
        
    }
}


persons.sayHello();