const authorization = "Bearer sk_9cf02bc4b9e0dd6ced7b31ef33f6f479";
// Make an AJAX request to Clearbit to recover informations about an email address.
// 1. Add listener on the form
// 2. Prevent the submission of the form with .preventDefault()
// 3. Make an AJAX request to the Clearbit API using fetch
// 4. Read the json returned and display the results in the table

const form = document.getElementById('clearbitForm');

const updateHtml = (data) => {
  const userName = document.querySelector('#userName');
  const userEmail = document.querySelector('#userEmail');
  const userBio = document.querySelector('#userBio');
  const userLocation = document.querySelector('#userLocation');

  userName.innerText = data.name.fullName;
  userEmail.innerText = data.email;
  userBio.innerText = data.bio;
  userLocation.innerText = data.location;
}


const callApi = (email) => {
  const url = `https://person.clearbit.com/v1/people/email/${email}`;
  fetch(url, { headers: { Authorization: authorization } })
  .then(response => response.json())
  .then((data) => {
    updateHtml(data);
  });
};


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('clearbitEmail').value;
  callApi(email);
});



// You can pass HTTP Headers to fetch. For example:
// fetch(url, {
//   headers: {
//     'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1'
//   }
// });
// Alternatively pass a Bearer token in an Authorization header.
// curl 'https://person.clearbit.com/v1/people/email/alex@alexmaccaw.com' \
//         -H 'Authorization: Bearer sk_9cf02bc4b9e0dd6ced7b31ef33f6f479'










