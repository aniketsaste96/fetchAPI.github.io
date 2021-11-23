
let btn = document.querySelector("#btn");
const url = "https://breakingbadapi.com/api/quote/random";
btn.addEventListener("click", function () {


    const fetchData = async () => {
        try {

            //logic goes here
            const response = await fetch(url);
            const Qdata = await response.json();



            let realdata = Qdata[0];
            document.getElementById("quote").innerHTML =
                `<p>Author = ${realdata.author}</p>
     <p> Quote = ${realdata.quote}</p>`

        } catch (err) {
            console.log(err)
        }
    };

    fetchData();

});