<template>
    <div class="col-sm-3 m-auto">
        <h2>Create Post</h2>
    </div>

    <form action="/create">
        <div class="col-sm-3 m-auto mb-3">
            <label for="first-name" class="form-label">First Name</label>
            <input type="first-name" class="form-control" id="first-name" name="first-name" v-model="post.first_name">
        </div>

        <div class="col-sm-3 m-auto mb-3">
            <label for="last-name" class="form-label">Last Name</label>
            <input type="last-name" class="form-control" id="last-name" name="last-name" v-model="post.last_name">
        </div>

        <div class="col-sm-3 m-auto mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" v-model="post.email"> 
        </div>

        <div class="col-sm-3 m-auto mb-3">
            <label for="gender" class="form-label">Gender</label>
            <select id="gender" name="gender" class="form-control" v-model="post.gender">
                <option value="Unknown">Unknown</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>

        <div class="col-sm-3 m-auto">
            <button type="button" class="btn btn-success" @click="createPost">Create</button>
            <button type="button" class="btn btn-secondary" @click="cancel">Cancel</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const post=reactive({
        id:"",
        first_name: '',
        last_name: '',
        email: '',
        gender: 'Unknown'
      });

    const fetchLatestId = async () => {
      try 
      {
        const response = await axios.get('http://127.0.0.1:3001/youth');
        const items = response.data;
        if (items.length > 0) {
          const maxId = Math.max(...items.map(item => item.id));
          return maxId + 1;
        }
        else {
          return 1;
        }
      }
      catch (error) {
        console.error("There was an error fetching the latest id!", error);
        return 1;
      }
    };

    const createPost = async () => {
      try
      {
        post.id = await fetchLatestId();
        await axios.post('http://127.0.0.1:3001/youth', post);
        alert('Post created successfully!');
        router.push({path:"/"});
      }
      catch (error) {
        console.error("There was an error creating the post!", error);
      }
    };

    const cancel = () => {
      router.push('/');
    };

    return {
      post,
      createPost,
      cancel
    };
  }
};
</script>

<style>
</style>