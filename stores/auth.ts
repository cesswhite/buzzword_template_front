export const useAuthStore = defineStore('useAuthStore', {
    state: () => ({
        name: 'César'
    }),
    actions: {},
    getters: {},
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}