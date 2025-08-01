function Title(props) {
// function Title(children) { //destruction
    return (
        <h1 className="text-3xl text-slate-100 font-bold text-center">
            {props.children}
        </h1>
    )
}

export default Title;