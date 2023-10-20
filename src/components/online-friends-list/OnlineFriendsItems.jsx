import OnlineFriendItem from "./OnlineFriendItem"
export default function onlineFriendsItems({items}){
    return(
        <div className="flex flex-col gap-3">
            {items.map((item , index)=>(<div key={index}><OnlineFriendItem item={item}/></div>))}
        </div>
    )
}