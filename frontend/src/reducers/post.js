const reducer = ( post = [], action ) =>
{
    switch ( action.type )
    {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE POST":
            return post;

        default:
            return post;
    }
}

export default reducer;