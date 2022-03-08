const reducer = ( post = [], action ) =>
{
    switch ( action.type )
    {
        case "FETCH_ALL":
            return action.payload;
        case "UPDATE":
            return post.map((post) => (post._id === action.payload._id) ? action.payload : post);
        case "CREATE":
            return [...post, action.payload];

        default:
            return post;
    }
}

export default reducer;