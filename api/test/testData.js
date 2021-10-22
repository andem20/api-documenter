const data = [
   {
     _id: '617264c46a0e589fd24f1685',
     title: 'Skill-Tracker',
     endpoints: [
       {
         requestType: 'POST',
         endpoint: '/users/:id',
         description: 'This is some description of POST',
         output: '{test: "POST"}'
       },
       {
         requestType: 'GET',
         endpoint: '/users/:id',
         description: 'This is some description of GET',
         output: '{test: "GET"}'
       },
       {
         requestType: 'DELETE',
         endpoint: '/users/:id',
         description: 'This is some description of DELETE',
         output: '{test: "DELETE"}'
       }
     ]
   },
   {
     _id: '61726525f092b0b2cda18eae',
     title: 'Some Other API',
     endpoints: [
       {
         requestType: 'POST',
         endpoint: '/something/:id',
         description: 'This is some description of POST',
         output: '{test: "POST"}'
       },
       {
         requestType: 'GET',
         endpoint: '/something/:id',
         description: 'This is some description of GET',
         output: '{test: "GET"}'
       },
       {
         requestType: 'DELETE',
         endpoint: '/something/somethingElse/:id',
         description: 'This is some description of DELETE',
         output: '{test: "DELETE"}'
       }
     ]
   },
   {
     _id: '61726535bff99d01ccd89985',
     title: 'Some Other API again',
     endpoints: [
       {
         requestType: 'POST',
         endpoint: '/something/:id',
         description: 'This is some description of POST',
         output: '{test: "POST"}'
       },
       {
         requestType: 'GET',
         endpoint: '/something/:id',
         description: 'This is some description of GET',
         output: '{test: "GET"}'
       },
       {
         requestType: 'DELETE',
         endpoint: '/something/somethingElse/:id',
         description: 'This is some description of DELETE',
         output: '{test: "DELETE"}'
       }
     ]
   }
 ];

 module.exports = data;