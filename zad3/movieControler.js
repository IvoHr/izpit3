function daiMiElement(type, attributes) {

    var element = document.createElement(type);
    if (attributes) {
        for (var attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                if (attr == 'text') {
                    element.innerHTML = attributes[attr];
                } else
                    element.setAttribute(attr, attributes[attr]);
            }
        }
    }

    return element;
}

var moviesJSON = [{ "Title": "Fame", "Year": "1980", "Rated": "R", "Released": "16 May 1980", "Runtime": "2 h 14 min", "Genre": "Drama, Music", "Director": "Alan Parker", "Writer": "Christopher Gore", "Actors": "Eddie Barth, Irene Cara, Lee Curreri, Laura Dean" }, { "Title": "S.O.B.", "Year": "1981", "Rated": "R", "Released": "01 Jul 1981", "Runtime": "2 h 2 min", "Genre": "Comedy", "Director": "Blake Edwards", "Writer": "Blake Edwards", "Actors": "Julie Andrews, William Holden, Marisa Berenson, Larry Hagman" }, { "Title": "Oliver Twist", "Year": "1982", "Rated": "PG", "Released": "23 Mar 1982", "Runtime": "1 h 43 min", "Genre": "Crime, Drama", "Director": "Clive Donner", "Writer": "Charles Dickens, James Goldman", "Actors": "George C. Scott, Tim Curry, Michael Hordern, Timothy West" }, { "Title": "Amityville 3-D", "Year": "1983", "Rated": "PG", "Released": "18 Nov 1983", "Runtime": "1 h 45 min", "Genre": "Horror, Thriller", "Director": "Richard Fleischer", "Writer": "William Wales", "Actors": "Tony Roberts, Tess Harper, Robert Joy, Candy Clark" }, { "Title": "1984", "Year": "1984", "Rated": "R", "Released": "14 Dec 1984", "Runtime": "1 h 53 min", "Genre": "Drama, Romance, Sci-Fi, Thriller", "Director": "Michael Radford", "Writer": "George Orwell, Michael Radford", "Actors": "John Hurt, Richard Burton, Suzanna Hamilton, Cyril Cusack" }, { "Title": "Fright Night", "Year": "1985", "Rated": "R", "Released": "02 Aug 1985", "Runtime": "1 h 46 min", "Genre": "Comedy, Horror, Thriller", "Director": "Tom Holland", "Writer": "Tom Holland", "Actors": "Chris Sarandon, William Ragsdale, Amanda Bearse, Roddy McDowall" }, { "Title": "The Transformers: The Movie", "Year": "1986", "Rated": "PG", "Released": "08 Aug 1986", "Runtime": "1 h 24 min", "Genre": "Animation, Action, Adventure, Family, Sci-Fi", "Director": "Nelson Shin", "Writer": "Ron Friedman", "Actors": "Orson Welles, Robert Stack, Leonard Nimoy, Norman Alden" }, { "Title": "The Untouchables", "Year": "1987", "Rated": "R", "Released": "03 Jun 1987", "Runtime": "1 h 59 min", "Genre": "Crime, Drama, Thriller", "Director": "Brian De Palma", "Writer": "Oscar Fraley, Eliot Ness", "Actors": "Kevin Costner, Sean Connery, Robert De Niro, Charles Martin Smith" }, { "Title": "Bright Lights, Big City", "Year": "1988", "Rated": "R", "Released": "01 Apr 1988", "Runtime": "1 h 47 min", "Genre": "Drama", "Director": "James Bridges", "Writer": "Jay McInerney, Jay McInerney", "Actors": "Michael J. Fox, Kiefer Sutherland, Phoebe Cates, Swoosie Kurtz" }, { "Title": "K-9", "Year": "1989", "Rated": "PG-13", "Released": "28 Apr 1989", "Runtime": "1 h 41 min", "Genre": "Action, Comedy, Crime", "Director": "Rod Daniel", "Writer": "Steven Siegel, Scott Myers", "Actors": "James Belushi, Mel Harris, Kevin Tighe, Ed O'Neill" }, { "Title": "Lionheart", "Year": "1990", "Rated": "R", "Released": "11 Jan 1991", "Runtime": "1 h 45 min", "Genre": "Action, Drama, Sport", "Director": "Sheldon Lettich", "Writer": "S.N. Warren, Jean-Claude Van Damme", "Actors": "Jean-Claude Van Damme, Harrison Page, Deborah Rennard, Lisa Pelikan" }, { "Title": "Hook", "Year": "1991", "Rated": "PG", "Released": "11 Dec 1991", "Runtime": "2 h 24 min", "Genre": "Adventure, Comedy, Family, Fantasy", "Director": "Steven Spielberg", "Writer": "J.M. Barrie, J.M. Barrie", "Actors": "Dustin Hoffman, Robin Williams, Julia Roberts, Bob Hoskins" }, { "Title": "Tom and Jerry: The Movie", "Year": "1992", "Rated": "G", "Released": "30 Jul 1993", "Runtime": "1 h 24 min", "Genre": "Animation, Family", "Director": "Phil Roman", "Writer": "Dennis Marks", "Actors": "Richard Kind, Dana Hill, Anndi McAfee, Tony Jay" }, { "Title": "The Three Musketeers", "Year": "1993", "Rated": "PG", "Released": "12 Nov 1993", "Runtime": "1 h 45 min", "Genre": "Action, Adventure, Comedy, Family, Romance", "Director": "Stephen Herek", "Writer": "Alexandre Dumas père, David Loughery", "Actors": "Charlie Sheen, Kiefer Sutherland, Chris O'Donnell, Oliver Platt" }, { "Title": "Pulp Fiction", "Year": "1994", "Rated": "R", "Released": "14 Oct 1994", "Runtime": "2 h 48 min", "Genre": "Crime, Thriller", "Director": "Quentin Tarantino", "Writer": "Quentin Tarantino, Roger Avary", "Actors": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis" }, { "Title": "GoldenEye", "Year": "1995", "Rated": "PG-13", "Released": "17 Nov 1995", "Runtime": "2 h 10 min", "Genre": "Action, Adventure, Thriller", "Director": "Martin Campbell", "Writer": "Ian Fleming, Michael France", "Actors": "Pierce Brosnan, Sean Bean, Izabella Scorupco, Famke Janssen" }, { "Title": "R.I.O.T.: The Movie", "Year": "1996", "Rated": "N/A", "Released": "N/A", "Runtime": "N/A", "Genre": "Family, Action", "Director": "Stephen Yake", "Writer": "Carman", "Actors": "Carman, Sam J. Jones, Skip Bradshaw, Beth Dorthnel" }, { "Title": "Titanic", "Year": "1997", "Rated": "PG-13", "Released": "19 Dec 1997", "Runtime": "3 h 14 min", "Genre": "Adventure, Drama, History, Romance", "Director": "James Cameron", "Writer": "James Cameron", "Actors": "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates" }, { "Title": "The Rugrats Movie", "Year": "1998", "Rated": "G", "Released": "20 Nov 1998", "Runtime": "1 h 19 min", "Genre": "Animation, Adventure, Comedy, Drama, Family", "Director": "Igor Kovalyov, Norton Virgien", "Writer": "David N. Weiss, J. David Stem", "Actors": "Elizabeth Daily, Christine Cavanaugh, David Spade, Whoopi Goldberg" }, { "Title": "10 Things I Hate About You", "Year": "1999", "Rated": "PG-13", "Released": "31 Mar 1999", "Runtime": "1 h 37 min", "Genre": "Comedy, Romance", "Director": "Gil Junger", "Writer": "Karen McCullah Lutz, Kirsten Smith", "Actors": "Heath Ledger, Julia Stiles, Joseph Gordon-Levitt, Larisa Oleynik" }, { "Title": "Pokémon: The Movie 2000", "Year": "1999", "Rated": "G", "Released": "21 Jul 2000", "Runtime": "1 h 39 min", "Genre": "Animation, Adventure, Family", "Director": "Michael Haigney, Kunihiko Yuyama", "Writer": "Takeshi Shudo", "Actors": "Veronica Taylor, Rachael Lillis, Madeleine Blaustein, Eric Stuart" }, { "Title": "2001: A Space Odyssey", "Year": "1968", "Rated": "G", "Released": "06 Apr 1968", "Runtime": "2 h 21 min", "Genre": "Adventure, Sci-Fi", "Director": "Stanley Kubrick", "Writer": "Stanley Kubrick, Arthur C. Clarke", "Actors": "Keir Dullea, Gary Lockwood, William Sylvester, Daniel Richter" }, { "Title": "Ultimate X: The Movie", "Year": "2002", "Rated": "PG", "Released": "17 May 2002", "Runtime": "47 min", "Genre": "Documentary, Short, Sport", "Director": "Bruce Hendricks", "Writer": "Bruce Hendricks", "Actors": "Bob Burnquist, Brian Deegan, Tony Hawk, Carey Hart" }, { "Title": "Love Actually", "Year": "2003", "Rated": "R", "Released": "14 Nov 2003", "Runtime": "2 h 15 min", "Genre": "Comedy, Drama, Romance", "Director": "Richard Curtis", "Writer": "Richard Curtis", "Actors": "Hugh Grant, Martine McCutcheon, Liam Neeson, Laura Linney" }, { "Title": "Z", "Year": "1969", "Rated": "M", "Released": "08 Dec 1969", "Runtime": "2 h 7 min", "Genre": "Crime, Drama, History, Mystery, Thriller", "Director": "Costa-Gavras", "Writer": "Vasilis Vasilikos, Jorge Semprún", "Actors": "Yves Montand, Irene Papas, Jean-Louis Trintignant, Jacques Perrin" }, { "Title": "Don't Tell", "Year": "2005", "Rated": "R", "Released": "17 Mar 2006", "Runtime": "2 h", "Genre": "Drama, Mystery", "Director": "Cristina Comencini", "Writer": "Cristina Comencini, Cristina Comencini", "Actors": "Giovanna Mezzogiorno, Luigi Lo Cascio, Alessio Boni, Stefania Rocca" }, { "Title": "The Departed", "Year": "2006", "Rated": "R", "Released": "06 Oct 2006", "Runtime": "2 h 31 min", "Genre": "Crime, Drama, Mystery, Thriller", "Director": "Martin Scorsese", "Writer": "William Monahan, Alan Mak", "Actors": "Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg" }, { "Title": "The Pirates Who Don't Do Anything: A VeggieTales Movie", "Year": "2008", "Rated": "G", "Released": "11 Jan 2008", "Runtime": "1 h 25 min", "Genre": "Animation, Adventure, Comedy, Family", "Director": "Mike Nawrocki", "Writer": "Phil Vischer", "Actors": "Tim Hodge, Mike Nawrocki, Phil Vischer, Cam Clarke" }, { "Title": "Star Trek", "Year": "2009", "Rated": "PG-13", "Released": "08 May 2009", "Runtime": "2 h 7 min", "Genre": "Action, Adventure, Sci-Fi", "Director": "J.J. Abrams", "Writer": "Roberto Orci, Alex Kurtzman", "Actors": "Chris Pine, Zachary Quinto, Simon Pegg, Leonard Nimoy" }, { "Title": "2010", "Year": "1984", "Rated": "PG", "Released": "07 Dec 1984", "Runtime": "1 h 56 min", "Genre": "Mystery, Sci-Fi, Thriller, Adventure", "Director": "Peter Hyams", "Writer": "Arthur C. Clarke, Peter Hyams", "Actors": "Roy Scheider, John Lithgow, Helen Mirren, Bob Balaban" }, { "Title": "Warrior", "Year": "2011", "Rated": "PG-13", "Released": "09 Sep 2011", "Runtime": "2 h 20 min", "Genre": "Action, Drama, Sport", "Director": "Gavin O'Connor", "Writer": "Gavin O'Connor, Anthony Tambakis", "Actors": "Tom Hardy, Nick Nolte, Joel Edgerton, Jennifer Morrison" }];

var movies = [];

for (var index = 0; index < moviesJSON.length; index++) {
    var currMov = moviesJSON[index];
    movies.push(new Movie(index, currMov.Title, currMov.Year, currMov.Rated, currMov.Released, currMov.Runtime, currMov.Genre, currMov.Director));

}

console.log(movies);

function refreshTable() {
    var table = document.querySelector('#filmitable table > tbody');
    table.innerHTML = '';
    for (var index = 0; index < movies.length; index++) {
        var currMov = movies[index];

        var tr = daiMiElement("tr", { id: currMov.nomer });
        var td1 = daiMiElement("td", { text: currMov.title });
        var td2 = daiMiElement("td", { text: currMov.year });
        var td3 = daiMiElement("td", { text: currMov.genre });
        var td4 = daiMiElement("td", { text: currMov.director });
        var td5 = daiMiElement("td", { class: "gledan" });
        var butonGl = daiMiElement("input", { type: 'checkbox' });
        td5.appendChild(butonGl);
        var td6 = daiMiElement("td", { class: "liubim" });
        var butonL = daiMiElement("input", { type: 'checkbox' });
        td6.appendChild(butonL);


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        table.appendChild(tr);
    }
}

refreshTable();


function getLiubGled(zaKude) {
    var selekciq = document.querySelectorAll("td." + zaKude + " input");
    var turseno = [];

    for (var index = 0; index < selekciq.length; index++) {
        var tekushtaKutiq = selekciq[index];
        if (tekushtaKutiq.checked) {
            turseno.push(tekushtaKutiq.parentNode.parentNode.id);
        }
    }

    var izbraniFilmi = [];
    for (var mIndex = 0; mIndex < movies.length; mIndex++) {
        var tekushtFilm = movies[mIndex];
        for (var index = 0; index < turseno.length; index++) {
            if (tekushtFilm.nomer == turseno[index]) {
                izbraniFilmi.push(tekushtFilm);
                break;
            }
        }
    }
    return izbraniFilmi;
}

getLiubGled("liubim");


document.getElementById("gledanfilm").addEventListener("click", function () {
    zarediTablica("gledan");
    document.getElementById("gledaniFilmiTable").removeAttribute("class");
}, false);

document.getElementById("liubimfilm").addEventListener("click", function () {
    zarediTablica("liubim");
    document.getElementById("liubimiFilmiTable").removeAttribute("class");
}, false);

document.getElementById("closeGledaniTable").addEventListener("click", function () {
    document.getElementById("gledaniFilmiTable").className = "hide";
}, false);

document.getElementById("closeLiubimiTable").addEventListener("click", function () {
    document.getElementById("liubimiFilmiTable").className = "hide";
}, false);


function zarediTablica(zaKude) {
    var table = document.querySelector('#' + zaKude + 'iFilmiTable table > tbody');
    table.innerHTML = '';

    var filmi = getLiubGled(zaKude);
    for (var index = 0; index < filmi.length; index++) {
        var currMov = filmi[index];

        var tr = daiMiElement("tr", { id: currMov.nomer });
        var td1 = daiMiElement("td", { text: currMov.title });
        var td2 = daiMiElement("td", { text: currMov.year });
        var td3 = daiMiElement("td", { text: currMov.genre });
        var td4 = daiMiElement("td", { text: currMov.director });
        var td5 = daiMiElement("td", { class: "gledan" });
        var butonGl = daiMiElement("button", { text: 'more Info' });
        butonGl.addEventListener('click', function () {
            document.getElementById("filmitable").className = "hide";
            document.getElementById("liubimiFilmiTable").className = "hide";
            document.getElementById("gledaniFilmiTable").className = "hide";
            zarediFilm(td1.innerText, td2.innerText);
        }, false);
        td5.appendChild(butonGl);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        table.appendChild(tr);
    }
}


function zarediFilm(title, year) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://www.omdbapi.com/?t=' + title + '&y=' + year, true);
    xhr.send(null);

    xhr.addEventListener('load', function () {
        var info = JSON.parse(xhr.responseText);
        if ((!(Error in info)) && (xhr.status >= 200 && xhr.status <= 299) || (xhr.status == 304)) {
            var div = document.getElementById('result');
            div.innerHTML = '';
            var titleEl = document.createElement('h2');
            titleEl.innerText = info.Plot;
            div.appendChild(titleEl);

            var img = document.createElement('img');
            img.src = info.Poster;
            div.appendChild(img);
        }
    }, false);
}
var dobaveniFilmi = [];
function dobaviNovFilm() {
    var title = document.getElementById('title').value;
    var runtime = document.getElementById('runtime').value;
    var year = document.getElementById('year').value;
    var rate = document.getElementById('rate').value;
    var director = document.getElementById('director').value;

    var newMovie = new Movie(dobaveniFilmi.length + movies.length, title, year, rate, year, runtime, "None", director);
    dobaveniFilmi.push(newMovie);
    window.localStorage.setItem('dobaveniFilmi', JSON.stringify(dobaveniFilmi));
}


document.getElementById('butNovFilm').addEventListener('click', dobaviNovFilm, false);
document.getElementById('iztrFilmi').addEventListener('click', function (evt) {
    dobaveniFilmi = JSON.parse(window.localStorage.getItem('dobaveniFilmi'));
    dobaveniFilmi = [];
    window.localStorage.setItem('dobaveniFilmi', JSON.stringify(dobaveniFilmi));
    evt.preventDefault();

}, false);




function sortTable(increasing) {
    var table = document.querySelector("table > tbody");
    var switching = true;

    while (switching) {

        switching = false;
        var rows = table.getElementsByTagName("tr");

        var index;
        for (index = 0; index < rows.length; index++) {

            shouldSwitch = false;
            var currentTitle = rows[index].getElementsByTagName("td")[0];
            var nextTitle = rows[index + 1].getElementsByTagName("td")[0];

            if (increasing) {
                if (currentTitle.innerHTML.toLowerCase() > nextTitle.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else {
                if (currentTitle.innerHTML.toLowerCase() < nextTitle.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rows[index].parentNode.insertBefore(rows[index + 1], rows[index]);
            switching = true;
        }
    }
}
document.getElementById('sortTable').addEventListener('click', function () { sortTable(true); }, false);
document.getElementById('sortTabledown').addEventListener('click', function () { sortTable(false); }, false);