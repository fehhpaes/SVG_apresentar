var data = "Heading (info:info) \n info: \n \t and so on "; 

$("#code_window").html(data);


function coracao()
{
    document.getElementById("code_window").value = 
`<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">

        <path 
                d=" M 10,30
                    A 20,20 0,0,1 50,30
                    A 20,20 0,0,1 90,30
                    Q 90,60 50,90
                    Q 10,60 10,30 z"
        
        stroke="red"
        fill="lightgray"
        
        />
</svg>`

var codigoCoracao = document.getElementById("code_window").value;
    document.getElementById("svg").outerHTML = codigoCoracao;
}

function infinito()
{
    document.getElementById("code_window").value = 
`<svg id="svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    <path
        fill="none"
        stroke="lightgrey"
        d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

    <circle r="5" fill="darkorange">
        <animateMotion
        dur="10s"
        repeatCount="indefinite"
        path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
    </circle>
</svg>`
    
    var codigoInfinito = document.getElementById("code_window").value;
        document.getElementById("svg").outerHTML = codigoInfinito;
}

function circulo()
{
    document.getElementById("code_window").value = 
`<svg id="svg" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">

    <circle cx="50" cy="50" r="45" 
    fill="lightgray"
    stroke="green"
    />
    
</svg>`
    
    var codigoInfinito = document.getElementById("code_window").value;
        document.getElementById("svg").outerHTML = codigoInfinito;

}

function run()
{
    var novoCod = document.getElementById("code_window").value;
    document.getElementById("svg").innerHTML = novoCod;

}