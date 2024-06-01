<template lang="">
    <div>
        <br/>
        <h2>이날치 멤버</h2>
        <br/>

        <div class="row row-cols-1 row-cols-md-4">
            <div v-for="member in members" :key="member.id" class="col mb-4">
                <div class="d-flex flex-column align-items-center">
                    <img :src="member.photo" class="img-thumbnail mb-2" :alt="member.name">
                    <a :href="'/members/' + member.id" class="text-center">{{ member.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            members: []
        };
    },
    mounted() {
        fetch('src/members.json')
            .then(response => response.json())
            .then(data => {
                this.members = data;
            })
            .catch(error => {
                console.error('Error loading members:', error);
            });
    }
}
</script>

<style lang="">
    
</style>
