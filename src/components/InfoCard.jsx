import PropTypes from 'prop-types';

export default function InfoCard({imgValue, title, info, extraClasses}){
    return(
        <div className={`flex items-center gap-3 ring-2 ring-inset h-25 ring-zinc-50/10 rounded-sm p-3 bg-gray-300/30 ${extraClasses?.bgColor || "hover:bg-gray-300"} transition-colors group`}>
            {/* <figure className="bg-zinc-700/50 rounded-b-full overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors"> */}
                {/* <img 
                    src={imgValue}
                    width={32}
                    height={32}
                    alt={title}
                /> */}
                <svg viewBox={imgValue.viewBox} className="fill-currentColor stroke-currentColor group-hover:fill-white group-hover:stroke-white transition-colors" width="60" height="60">
                    {imgValue.paths.map((path, index) => (
                        <path
                            key={index}
                            d={path.d}
                            // fill={path.fill === "none" ? "none" : "currentColor"}
                            // stroke={path.stroke === "none" ? "none" : "currentColor"}
                            strokeLinecap={path.strokeLinecap}
                            strokeLinejoin={path.strokeLinejoin}
                            strokeWidth={path.strokeWidth}
                        />
                    ))}
                </svg>
            {/* </figure> */}
            <div>
                <h3>{title}</h3>
                <p className='text-zinc-400 group-hover:text-white text-md'>
                    {info}
                </p>
            </div>

        </div>
    )
}

// Using Proptypes as an error catching method, used for development-time error catching
InfoCard.PropTypes = {
    imgValue: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    extraClasses: PropTypes.string
}