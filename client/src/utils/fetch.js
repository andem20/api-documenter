async function REQUEST(url, data = {}, method = 'GET', contentType = 'application/json') {
   const metadata = {
      method: method,
      headers: {
         'Content-Type': contentType
      }
   }

   if(method === 'POST') metadata.body = JSON.stringify(data);

   const response = await fetch(process.env.REACT_APP_API_URL + url, metadata);
   
   return response.json();
}

module.exports = REQUEST;