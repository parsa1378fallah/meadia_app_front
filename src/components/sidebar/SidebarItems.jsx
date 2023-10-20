import SidebarItem from "./SideBarItem.jsx"
export default function sidebarItems({items}){
    return(
        <div className="flex flex-col">
            {items.map((item , index)=>(<div key={index}><SidebarItem value={item.value} icon={item.icon} path={item.path} /></div>))}
        </div>
    )
}