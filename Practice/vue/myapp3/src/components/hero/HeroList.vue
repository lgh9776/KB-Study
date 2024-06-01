<template lang="">
    <div>
        <table>
            <tr v-for="hero in heroList" :key="hero.id" v-on:click="click(hero)">
                <td>{{hero.id}}</td>
                <td>{{hero.name}}</td>
                <td>{{hero.description}}</td>
            </tr>
        </table>
        <hr/>
        <SelectedHero :hero="hero" />
    </div>
</template>

<script>
import SelectedHero from './SelectedHero.vue';

export default {
    components: {
        SelectedHero
    },
    data() {
        return {
            hero: { name: "", description: "", id: -1 }
        }
    },
    props: ["heroList"], // 부모로부터 데이터 리스트를 받아온다.
    methods: {
        click(hero) {
            alert("click " + hero.name);
            this.hero.name = hero.name;
            this.hero.description = hero.description;
            this.hero.id = hero.id;
        }
    }
}
</script>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    tr, td {
        border: 1px solid black;
        padding: 10px;
        text-align: left;
    }

    tr:hover {
        background-color: #f5f5f5;
    }
</style>
