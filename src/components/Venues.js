import React from 'react';

const Venues = ({ data }) => {
  const clientId = 'EP4ZZTBXPWE3LVNLTLM2GJ4QITRAP00T3JZ2QNLRXATBGK2L';
  const clientSecret = 'A53P043ZL0PT1WV5J1B1O1BZMCL3LUC5PYA1AR25WIFW4SMD';
  const url = 'https://api.foursquare.com/v2/venues/explore?near=';
  const date= new Date();
     const year=date.getFullYear();
     const month=date.getMonth();
     const dateToday=date.getDate();
    const dateString=`${year}${month<10? '0'+month : month}${date<10? '0'+date : date}`;
    
    const getVenues = async () => {
      // const city = input.value;
      const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${dateString}`;
     
      try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
          const jsonResponse = await response.json();
          const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
          console.log(venues);
          return venues;
        }
      } catch (error) {
        console.log(error);
      }
    };
    render(){

    }
}

export default Venues;
 




  // venues render
  //   loop => {
  //     const venue = venues[index];
  //   venueIcon =venue.categories[0].icon;
  //     img =`${venueIcon.prefix}bg_64${venueIcon.suffix}`;
  //     const venueContent = 
  //VenueHTML(venue.name, venue.location, venueImgSrc... );
  //     venue.append(venueContent);
  //   });
  //   `<h2>${venues[0].location.city}</h2>`;
  // 