//The middleware lets you define custom function to be ran before rendering a page or a group of pages (layouts).
export default function(context) {
    // go tell the store to update the page
    context.store.commit('updatePage', context.route.name)
}