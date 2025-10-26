

export const reducer=(state,action)=>{
    if(action.type=="ADD_DATA")
    {
    return {
...state,
todo:[...state.todo,action.payload],
isTrue:true,
message:"Message Successfully",

}
    }
if(action.type=="Name_not_added")
{
    return {
        ...state,
        isError:true,
        message:"Add Name First",
        errorField:"name"
    }
}
if(action.type=="Work_not_added")
{
    return{
        ...state,
        isError:true,
        message:"Work not added",
        errorField:"work"
    }
}
if(action.type=="Date_not_added")
{
    return{
        ...state,
        isError:true,
        message:"Date not Added",
        errorField:"date"
    }
}
}