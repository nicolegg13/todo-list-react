function Button(props) {
    return (
        <button {...props}
        // onClick={props.onClick}
        className="bg-slate-400 text-white p-2 rounded-md">
            {/* conteudo - o que passa para dentro do componente */}
            {props.children}
        </button>
    )
}

export default Button;