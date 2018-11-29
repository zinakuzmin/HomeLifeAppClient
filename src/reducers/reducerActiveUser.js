export default function (state=null, actions) {
    switch (actions.type){
        case "USER_SELECTED":
            return actions.payload;
            break;
    }
    return state;
}