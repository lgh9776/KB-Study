<template>
    <div>
      <div class="container mt-3">
        <h2>Board List</h2>
        <RouterLink to="/create" class="btn btn-primary mb-3">Create New Post</RouterLink>        
        <table class="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>first-name</th>
              <th>last-name</th>
              <th>email</th>
              <th>gender</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.first_name }}</td>
              <td>{{ item.last_name}}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.gender }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios.get('http://localhost:3001/youth')
          .then(response => {
            this.items = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the data!", error);
          });
      }
    }
  };
  </script>
  
  <style>
  .container {
    margin-top: 20px;
  }
  </style>
  