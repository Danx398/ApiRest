$(document).ready(()=>{
    $('#').on('submit',(e)=>{
        e.preventDefault();
        let datos = new FormData();
        fetch('http://localhost:3000/api/haruka/2',{
            method:'patch',
            body:datos
        }).then()
    })
})