import ShareIcon from "./ShareIcon.jsx"
export default function shareIcons({icons}){
    return(
        <div className="flex justify-center  flex-wrap gap-8">
            {icons.map((icon , index)=>(<div key={index}><ShareIcon icon={icon}/></div>))}
        </div>
    )
}