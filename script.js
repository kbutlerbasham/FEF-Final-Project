var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(loadrepos){
        $("#repos").empty();
            let url = "https://api.github.com/kbutlerbasham/" +
                    $("#username").val() + "/repos";
            $.loadRepos({
                url,
                success: displayRepos,
                error: displayError
            });
            function displayRepos(respos) {
                for (let repo of respos) {
                    let link = $('<a>').text(repo.full_name);
                    link.attr('href', repo.html_url);
                    $("#repos").append($('<li>').append(link));
                }
            }

            function displayError(err) {
                $("#repos").append($("<li>Error</li>"));
}
            if(this.readyState == 4 && this.status == 200){
                let data = JSON.parse(this.responseText)
                document.getElementById("button").value
        }
    };
    xhttp.open("GET", "https://api.github.com/users/kbutlerbasham/repos", true);
        xhttp.send();