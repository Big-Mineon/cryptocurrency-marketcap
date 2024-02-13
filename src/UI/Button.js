
function Button(props) {
    return (
        <button className="mt-8 border-2 border-green transition-all hover:shadow-[0_0px_30px_10px_rgba(0,87,72,0.8)] px-6 py-3 rounded-xl bg-green text-black cursor-pointer hover:scale-105">{props.title}</button>
    );
}

export default Button;
