const reducer = ( posts = [], action ) =>
{
    switch ( action.type )
    {
        case "FETCH_ALL":
            return action.payload;
        case "DELETE":
            return posts.filter((post) => post._id !== action.payload)
        case "UPDATE":
            return posts.map((posts) => (posts._id === action.payload._id) ? action.payload : posts);
        case "CREATE":
            return [...posts, action.payload];

        default:
            return posts;
    }
}

export default reducer;