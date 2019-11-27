

function myFunction(){
    alert("strUser")
    var e = document.getElementById("rentalPeriod");
    var strUser = e.options[e.selectedIndex].value;
    
    var e = document.getElementById("rentalPeriod");
    var strUser = e.options[e.selectedIndex].text;
    alert(strUser)}

    function myFunction1(){
        alert("strUser")
        var e = document.getElementById("typemaison");
        var strUser = e.options[e.selectedIndex].value;
        
        var e = document.getElementById("typemaison");
        var strUser = e.options[e.selectedIndex].text;
        alert(strUser)}
        
        
        function myFunction2(){
            alert("strUser")
            var e = document.getElementById("buildage");
            var strUser = e.options[e.selectedIndex].value;
            
            var e = document.getElementById("buildage");
            var strUser = e.options[e.selectedIndex].text;
            alert(strUser)}
           
                 
        function myFunction3(){
            alert("strUser")
            var e = document.getElementById(" nbbedrooms");
            var strUser = e.options[e.selectedIndex].value;
            
            var e = document.getElementById(" nbbedrooms");
            var strUser = e.options[e.selectedIndex].text;
            alert(strUser)}

           
                
                function myFunction4(){
                    alert("strUser")
                    var e = document.getElementById(" nbbathroomss");
                    var strUser = e.options[e.selectedIndex].value;
                    
                    var e = document.getElementById(" nbbathrooms");
                    var strUser = e.options[e.selectedIndex].text;
                    alert(strUser)}
                    
                    function myFunction5(){
                        alert("strUser")
                        var e = document.getElementById(" nbkitchen");
                        var strUser = e.options[e.selectedIndex].value;
                        
                        var e = document.getElementById(" nbkitchen");
                        var strUser = e.options[e.selectedIndex].text;
                        alert(strUser)}
    
                        
                        function myFunction6(){
                            alert("strUser")
                            var e = document.getElementById(" nbgarage");
                            var strUser = e.options[e.selectedIndex].value;
                            
                            var e = document.getElementById(" nbgarage");
                            var strUser = e.options[e.selectedIndex].text;
                            alert(strUser)}

                            function myFunction7(){
                                alert("strUser")
                                var e = document.getElementById(" choix");
                                var strUser = e.options[e.selectedIndex].value;
                                
                                var e = document.getElementById("choix");
                                var strUser = e.options[e.selectedIndex].text;
                                alert(strUser)}

                                function myFunction8(){
                                    alert("strUser")
                                    var e = document.getElementById(" choix2");
                                    var strUser = e.options[e.selectedIndex].value;
                                    
                                    var e = document.getElementById(" choix2");
                                    var strUser = e.options[e.selectedIndex].text;
                                    alert(strUser)}

                                  


                                    function myFunction9(){
                                        alert("strUser")
                                        var e = document.getElementById("  choix3 ");
                                        var strUser = e.options[e.selectedIndex].value;
                                        
                                        var e = document.getElementById("   choix3");
                                        var strUser = e.options[e.selectedIndex].text;
                                        alert(strUser)}

                                        function myFunction10(){
                                            alert("strUser")
                                            var e = document.getElementById("  choix4 ");
                                            var strUser = e.options[e.selectedIndex].value;
                                            
                                            var e = document.getElementById(" choix4");
                                            var strUser = e.options[e.selectedIndex].text;
                                            alert(strUser)}





function addAnnonce() {

    // book a space on localstorage as a list
    let listAnnonce= JSON.parse(localStorage.getItem("Annonce"));
    let loggedUser
    if (listAnnonce == null) {
        listAnnonce = [];
    }
    if (
        (document.getElementById("property_title").value !== "") &&
        ((document.getElementById("property_address").value !== "") &&(document.getElementById("rentinput").value !== "") 
        &&(document.getElementById("rentalPeriod").value !== "") &&(document.getElementById("property_description").value !== "")
        ) 
     ) {
        // structure of object to add in localstorage
        var Annonce = {
            id: Math.floor(Math.random() * 1000 + 1),
            title: document.getElementById("property_title").value,
            Adress: document.getElementById("property_address").value,
            rent: document.getElementById("rentinput").value,
            periode: document.getElementById("rentalPeriod").value,
            descr: document.getElementById("property_description").value,
           
            map: document.getElementById("map_address").value,
            owner: JSON.parse(localStorage.getItem('loggedUser')).id
        };
        // push the structure and setitem as a string
        listAnnonce.push(annonce);
        localStorage.setItem("annonce", JSON.stringify(listannonce));
        console.log(localStorage.getItem("annonce"));
    } else {
        console.log("you have to enter details ");
    }
}