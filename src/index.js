import {getUsers, deleteUser} from './api/userApi';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
    <td class='d-sm-table-cell'><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td class='d-none d-md-table-cell'>${user.id}</td>
    <td class='d-sm-table-cell'>${user.firstName}</td>
    <td class='d-sm-table-cell'>${user.lastName}</td>
    <td class='d-sm-table-cell'>${user.email}</td>
    <tr>`;
  });
  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks =  global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassName only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});

const frontpageTestBtn = global.document.getElementById("frontpage-test-btn");

frontpageTestBtn.addEventListener('click', function(event) {
  const starterH1 = global.document.getElementById("starter-h1");
  starterH1.innerText = "Button has been clicked!";

});
