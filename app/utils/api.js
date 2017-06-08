var axios = require('axios');
var id = '77fced29b573630bc20c';
var sec = '030b030897d2a38ee7e9706766af03008332757c';
var params = '?client_i=' + id + '&client_sicret=' + sec;

function getProfile(username) {
    return axios.get('http://api.github.com/users/' + username + params)
        .then(function(user) {
            return user.data;
        });
}

function getRepos(username) {
    return axios.get('http://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
        .then(function(user) {
            return user.data;
        });
}

function getStarCount(repos) {
    return repos.reduce(function(count, repo) {
        return count + repo.stargazers_count;
    }, 0)
}

function caculateScore(profile, repos) {
    var followers = profile.followers;
    var totalStars = getStarCount(repos);

    return (followers * 3) + totalStars;
}

function handleError(error) {
    console.warn(error);
    return null;
}

function getUserData(player) {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then(function(data) {
        var profile = data[0];
        var repos = data[1];

        return {
            profile: profile,
            score: caculateScore(profile, repos)
        }
    });
}

function sortPlayers(players) {
    return players.sort(function(a, b) {
        return b.score - a.score;
    });
}

module.exports = {
    battle: function(players) {
        return axios.all(players.map(getUserData)).then(sortPlayers).catch(handleError);
    },
    fetchPopularRepos: function(language) {
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

        return axios
            .get(encodedURI)
            .then(function(response) {
                return response.data.items;
            });
    }
}