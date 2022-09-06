const humanYearsInput = document.getElementById('humanYears');
const humanYearsError = document.getElementById('humanYearsError');
const catYears = document.getElementById('catYears');
const dogYears = document.getElementById('dogYears');
const catImg = document.getElementById('catImg');
const godImg = document.getElementById('dogImg');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', () => {
    calculateYears();
});


function calculateYears(){
    let humanYears = parseInt(humanYearsInput.value);

    let cy = 0, dy = 0;
    
    if( isNaN(humanYears) ){ 
        humanYearsError.classList.remove('hide');
    }else{
        humanYearsError.classList.add('hide');
        for(let i = 1; i <= humanYears; i++){
            if(i === 1){
                cy += 15;
                dy += 15;
            } else if(i === 2){
                cy += 9;
                dy += 9;
            } else{
                cy += 4;
                dy += 5;
            }
        }

        catYears.innerText = cy;
        dogYears.innerText = dy;
        
        if(cy <= 24){
            catImg.src = './images/babyCat.png';
        }else if(cy > 24 && cy <= 44){
            catImg.src = './images/adultCat.gif';
        } else{
            catImg.src = './images/oldCat.jpeg';
        }

        if(cy <= 24){
            dogImg.src = './images/babyDog.webp';
        }else if(cy > 24 && cy <= 44){
            dogImg.src = './images/adultDog.png';
        } else{
            dogImg.src = './images/oldDog.png';
        }

    }


}