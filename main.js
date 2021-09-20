const profileForm = document.querySelector('.profileForm');
const profile = document.querySelector('.profile');
const inName = document.querySelector('#name');
const inAge = document.querySelector('#age');
const inProf = document.querySelector('#prof');


profileForm.addEventListener('submit',function(e){
    e.preventDefault();
    const nameVal = inName.value;
    const ageVal = inAge.value;
    const profVal = inProf.value;


    if(nameVal==''){
        alert("Vai nam ta likhen age");
    }
    else if(ageVal==''){
        alert("Vai age ta likhen plz");
    }
    else if(profVal==''){
        alert("Apnar pesa likhen vai");
    }
    else{
        const content = ` <div class="profileSection">
        <p>Name: ${nameVal}</p>
        <p>Age: ${ageVal}</p>
        <p>Profession: ${profVal}</p>
    </div>`
    
    profile.innerHTML += content;
    
    inName.value = '';
    inAge.value = '';
    inProf.value = '';
    
    }
})