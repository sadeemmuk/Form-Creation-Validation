addEventListener('DOMContentLoaded', fetchUserData());

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
      const response = await fetch(apiUrl);
  
      const users = await response.json();

      dataContainer.innerHTML = '';
      users.forEach(element => {
        const lis = document.createElement('li');
        const list = document.createElement('ul');
        dataContainer.append(list);
        lis.textContent = element.name;
        lis.style.listStyle = 'none';
        list.append(lis);
        
      });
    } catch (error) {
      error = 'Faild to laod user data'
      dataContainer.textContent = error;
    }
  }

fetchUserData();
