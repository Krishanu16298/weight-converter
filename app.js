
        converter();
        function converter() {
            var w = document.getElementById('winput');
            w.addEventListener("input",function(e){
                e.preventDefault();
                var inval = w.value;
                var p = inval*(2.0462);
                var o = inval*(35.274);
                var g = inval*(1000);
                if(p>=0 && o>=0 && g>=0){
                document.getElementById('output').innerHTML = `
                    <div class="card text-white bg-primary ">
                        <div class="card-header">
                            <h4>Pounds</h4>
                            <p class="card-text">`+p+`</p>
                        </div>
                    </div>
                    <br>
                    <div class="card text-white bg-success ">
                        <div class="card-header">
                            <h4>Ounces</h4>
                            <p class="card-text">`+ o +`</p>
                        </div>
                    </div>
                    <br>
                    <div class="card text-white bg-danger ">
                        <div class="card-header">
                            <h4>Grams</h4>
                            <p class="card-text">`+ g +`</p>
                        </div>
                    </div>
                `;}
            });
        }
