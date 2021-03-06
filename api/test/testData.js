const data = [
   {
     _id: '617264c46a0e589fd24f1685',
     title: 'Skill-Tracker',
     endpoints: [
       {
         _id: '61726d4b33a38f70c3f93613',
         requestType: 'POST',
         endpoint: '/users/:id',
         description: 'This is some description of POST',
         output: '{test: "POST"}'
       },
       {
        _id: '61726d4b33a38f70c3f93614',
         requestType: 'GET',
         endpoint: '/users/:id',
         description: 'This is some description of GET',
         output: '{test: "GET"}'
       },
       {
        _id: '61726d4b33a38f70c3f93615',
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
         _id: '61726d4b33a38f70c3f93616',
         requestType: 'POST',
         endpoint: '/something/:id',
         description: 'This is some description of POST',
         output: '{test: "POST"}'
       },
       {
        _id: '61726d4b33a38f70c3f93617',
         requestType: 'GET',
         endpoint: '/something/:id',
         description: 'This is some description of GET',
         output: '{test: "GET"}'
       },
       {
        _id: '61726d4b33a38f70c3f93618',
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
        _id: '61726d4b33a38f70c3f93619',
         requestType: 'POST',
         endpoint: '/something/:id',
         description: 'This is some description of POST',
         output: '{test: "POST"}'
       },
       {
        _id: '61726d4b33a38f70c3f93620',
         requestType: 'GET',
         endpoint: '/something/:id',
         description: 'This is some description of GET',
         output: '{test: "GET"}'
       },
       {
        _id: '61726d4b33a38f70c3f93621',
         requestType: 'DELETE',
         endpoint: '/something/somethingElse/:id',
         description: 'This is some description of DELETE',
         output: '{test: "DELETE"}'
       }
     ]
   }
 ];

 module.exports = data;