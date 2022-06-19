mybutton = document.getElementById("btn");
                window.onscroll = function() {
                    scrollFunction()};
                function scrollFunction() {
                    if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20 ) {
                        mybutton.style.display = "block";
                    }
                }
                function topFunction() {
                    document.documentElement.scrollTop = 0;
                    document.body.scrollTop = 0;
                }