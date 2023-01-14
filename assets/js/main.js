
// // when icon is clicked
function myFunction(){
    document.getElementById("mydropdown").classList.toggle("show");
}



// // close the dropdown when user clicks out
window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdowncontent");

        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }

    }
}



