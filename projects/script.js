// Get repos from github api
// https://api.github.com/users/{username}/repos

$(document).ready(function() {
    var url = 'https://api.github.com/users/Matt0550/repos';
    $.get(url, function(data) {
        $.each(data, function(index, repo) {
            // Get the repo name and description
            var repoName = repo.name;
            var repoDesc = repo.description;
            var repoUrl = repo.html_url;
            var repoDate = repo.created_at;
            // Format the date DD/MM/YYYY
            var date = new Date(repoDate);
            repoDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Get user name and avatar
            var userName = repo.owner.login;
            var userAvatar = repo.owner.avatar_url;

            if (repoDesc === null) {
                repoDesc = '<i>No description</i>';
            }

            // Add new project item
            $("#projects").append(`  
                <a class="project-item" href="`+repoUrl+`" target="_blank">
                    <div class="item-inner">
                        <div class="content">
                            <h3>`+repoName+`</h3>
                            <p>`+repoDesc+`</p>
                        </div>
                        <div class="item-footer">
                            <div class="item-person"><img src="`+userAvatar+`"><span>`+userName+`</span></div>
                            <div class="date">
                                <h5>`+repoDate+`</h5>
                            </div>
                        </div>
                    </div>
                </a>
            `);
        });
    });
});
