import {defineStore} from 'pinia';

export let useTeamStore = defineStore('team', {
    state: () => ({
        name: '',
        spots: 0,
        members: []
    }),

    actions: {
        async fill() {
            let r = await import('@/team.json');
            let data = r.default;

            //Updates any changed to the state
            this.$patch({
                name: data.name,
                spots: data.spots,
                members: data.members
            })
        },
        grow(spots){
            this.spots = spots;
        }
    },

    getters: {
        spotsRemaining(){
            return this.spots - this.members.length
        }
    }
});
