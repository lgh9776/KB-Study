//member.js
import {defineStore} from 'pinia';

export const useMemberStore = defineStore('member', {
    state: () => ({
        id:"kimmulti",
        pw:"1234",
        name:"kim",
        address:"kang",
        tel:"010"
    }),

    actions: {

    }
});
