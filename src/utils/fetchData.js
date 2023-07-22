export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '49d477231bmsh9a91c45e1db2bfep15cd59jsn4617ae8e5273',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  // url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  // params: {
  //   id: 'UCE_M8A5yxnLfW0KghEeajjw'
  // },
  headers: {
    'X-RapidAPI-Key': '49d477231bmsh9a91c45e1db2bfep15cd59jsn4617ae8e5273',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}