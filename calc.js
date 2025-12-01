document.querySelector('.box').innerHTML=`
        <div class="input">
            <input placeholder="0" class="display">
        </div>
            <div class="buttons">
                <button class="nums">CLR</button>
                <button class="nums">DEL</button>
                <button class="nums">%</button>
                <button class="nums">/</button>

                <button class="nums">7</button>
                <button class="nums">8</button>
                <button class="nums">9</button>
                <button class="nums">*</button>

                <button class="nums">4</button>
                <button class="nums">5</button>
                <button class="nums">6</button>
                <button class="nums">-</button>
                <button class="nums">1</button>
                <button class="nums">2</button>
                <button class="nums">3</button>
                <button class="nums">+</button>
                
        </div>
        <div class="last-row">
                <button class="nums">.</button>
                <button class="nums">0</button>
                <button id="equal" class="nums">=</button>
                </div>`

const display = document.querySelector('.display');
document.querySelectorAll('.nums').forEach(btn=>{
        btn.addEventListener('click',()=>{
            const value = btn.textContent;
            if(value === '='){
                display.value = eval(display.value);
            }
            else if(value === "DEL"){
                display.value = display.value.slice(0, -1);
            }
            else if (value === "CLR"){
                display.value = '';
            }
            else{
                display.value += value;
            }
        });
});

