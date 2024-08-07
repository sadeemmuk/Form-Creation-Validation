document.addEventListener('DOMContentLoaded', fetchUserData);

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
      const response = await fetch(apiUrl);
  
      const users = await response.json();

      dataContainer.innerHTML = '';
      users.forEach(element => {
        const userList = document.createElement('ul');
        const li = document.createElement('li');
        dataContainer.append(userList);
        userList.style.listStyle = 'none';
        li.textContent = element.name;
        userList.appendChild(li);
        
        
      });
    } catch (error) {
      dataContainer.innerHTML = '';
      error = 'Failed to load user data';
      dataContainer.textContent = error;
    }
  }

fetchUserData();
