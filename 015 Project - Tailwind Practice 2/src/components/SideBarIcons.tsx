interface T {
    icon:any
    text?:string
}

const SideBarIcons:React.FC<T> = (prop:T) => {
    const {icon,text='tooltip'} = prop
    return (
                <div className="sidebar-icon group">
                    {icon}
                    <span className="sidebar-tooltip group-hover:scale-100">
                        {text}
                    </span>
                </div>

    )
}

export default SideBarIcons;