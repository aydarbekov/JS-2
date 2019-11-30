var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('code');
console.log(param);

const indexLink = `https://restcountries.eu/rest/v2/alpha/${param}?fields=name;alpha3Code;currencies;population;flag`;

function renderData(data) {
    const container = $('.container');
    let countryDiv = $(document.createElement('div'));
    countryDiv.addClass('country');
    countryDiv.append(`<a href="index.html">Назад</a></br>`);
    countryDiv.append(`<h1>${data.name}</h1></br>`);
    countryDiv.append(`<img src="${data.flag}" alt="Флаг" style="height: 100px"><br><br>`);
    countryDiv.append(`Код: ${data.alpha3Code}<br>`);
    countryDiv.append(`Валюта: ${data.currencies[0]['code']}<br>`);
    countryDiv.append(`Население: ${data.population}<br>`);

        // let countryLink = $(document.createElement('a'));
        // countryLink.attr('href',  "country.html?code=" + data[i].alpha3Code);
        // countryLink.text('Читать дальше');
        // countryDiv.append(countryLink);
    container.append(countryDiv);
    // }
}

function jqueryParseData (response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}

function jqueryLoadIndex() {
    $.ajax({
        url: indexLink,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    })
}

$(document).ready(function () {
   data = jqueryLoadIndex();
});