let giphy;

const getGiphy = async() => {
    const response = await fetch("https://api.giphy.com/v1/stickers/search?q=nba_funny&api_key=KK9YiaV63PbG2jeZ4FWsbKwGmriRwkmF&limit=9")
    const dataResponse = await response.json();
    // console.log(dataResponse.data);
    giphy = dataResponse.data;
    await vwData();
    // console.log(dataResponse);
}

getGiphy();

const vwData = () => {
    
    let hasil='';

    giphy.map(element => {
        console.log(element.title);
        hasil+=`<div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <img src="${element.images.preview_gif.url}" width="305" height="180">
                      <p class="card-title">${element.title}</h5>
                    </div>
                  </div>
                </div>`;
    })

    document.getElementById('giphyData').innerHTML = hasil;
}