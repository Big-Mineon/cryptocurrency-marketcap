
function Container(props) {
    return (
        <div className="text-gray-light mx-3 rounded-2xl border-2 p-2 md:p-7 bg-light-blue w-full md:w-2/5 md:mx-auto lg:max-w-content lg:mx-14 mb-5">
            {props.children}
        </div>
    );
}

export default Container;
