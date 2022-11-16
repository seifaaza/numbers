t=[]

// fill the table by random numbers 
function display(){
    for(i=0 ; i<20 ; i++){
        t[i]=Math.floor(Math.random()*100)
       
    }
    N=20
    for(i=0 ; i<N ; i++){
        document.querySelector('#t'+i).innerHTML=t[i]
    }
}

// delete all table values
function empty(){
    for(i=0 ; i<25 ; i++){
        document.querySelector('#t'+i).value=""
    }
}

// sum of all numbers in the table
function sum(){
    s=0
    for(i=0 ; i<N ; i++){
        s=s+t[i]
    }
    alert("The sum is : " +s)
}

function maximum(){
    max = t[0]
    for (i=1; i<N ; i++){
        if(max<t[i]){
            max = t[i]
        }
    }
    alert("The maximum is : " +max)
}

function minimum(){
    min = t[0]
    for (i=1; i<N ; i++){
        if(min>t[i]){
            min = t[i]
        }
    }
    alert("The minimum is : " +min)
}

// search any number in the table
function search(){
    x=parseFloat(prompt("enter the searched value"))
    i=0
    while(x!=t[i] && i<N){
        i++}
        if(i==N){
            alert(x+ " not exist")
        }
        else{
            alert(x+ " exist in position "+ (i+1))
        }
        
    }

// number insertion
function insert(){
    X=parseFloat(prompt("enter the inserted value"))
    p=parseInt(prompt("enter the position"))
    for (i=N ; i>=p ; i--){
        t[i]=t[i-1]
    }
    t[p-1]=X
    N=N+1
    for(i=0 ; i<N ; i++){
        document.querySelector('#t'+i).innerHTML=t[i]
    }  
}

// delete any number in the table
function Delete(){
    N=N-1
    p=parseInt(prompt("enter the value to delete"))
    for(i=p-1 ; i<N-1 ; i++){
        t[i]=t[i+1]
    }
    for(i=0 ; i<N ; i++){
        document.querySelector('#t'+i).innerHTML=t[i]
    }
}

// numbers sort ascending
function sort(){
    for (i=0 ; i<N ;i++){
        min=t[i]
        p=i
        for(j=i+1; j<N; j++){
            if(min>t[j]){
                min=t[j]
                p=j
            }
        }     
        t[p]=t[i]
        t[i]=min
                   
    }
    for(i=0 ; i<N ; i++){
        document.querySelector('#t'+i).innerHTML=t[i]
    }
}

// numbers sort descending
function sortDesc(){
    for (i=0 ; i<N ;i++){
        max=t[i]
        p=i
        for(j=i+1; j<N; j++){
            if(max<t[j]){
                max=t[j]
                p=j
            }
        }    
        t[p]=t[i]
        t[i]=max
    }    
    for(i=0 ; i<N ; i++){
        document.querySelector('#t'+i).value=t[i]   
    }
    
}

function initialize() {
    for(i=0 ; i<25 ; i++){
        document.querySelector('#t'+i).value=""   
    }
    document.querySelector('#r').innerHTML= ""
    initialize()
}