document.getElementById('MessageForm').addEventListener('submit',function(event){
    event.preventDefault();

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const message=document.getElementById('message').value;

    if(name && email && message){
        document.getElementById('successMessage').style.display='block';

        document.getElementById('MessageForm').reset();
    }
    
});


