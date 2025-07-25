   document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })

        function myFunction() {
            let radius = document.getElementById("input").value;
            let select = document.getElementById("Choice").value;
            let circle;
            let circumference;
            let result;

            if (select == "circumference") {
                circumference = 2 * 3.14 * radius;
                result = `You Entered ${radius} & The Area of Circle ${circumference}`;
                document.getElementById("output").style.background = "red"

            }
            else if (select == "circle") {
                circle = 3.14 * (radius ** 2);
                result = `You Entered ${radius} & The Area of Circle ${circle}`
                document.getElementById("output").style.background = "green"
            }
            else {
                result = "Please Enter Valid Value"
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;

        }
  