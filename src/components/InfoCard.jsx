import PropTypes from 'prop-types';

export default function InfoCard({imgValue, title, info, extraClasses}){
    return(
        <div className={'flex items-center gap-3 ring-2 ring-inset h-25 ring-zinc-50/10 rounded-sm p-3 bg-gray-300/30 hover:bg-gray-300 transition-colors group' + extraClasses}>
            {/* <figure className="bg-zinc-700/50 rounded-b-full overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors"> */}
                <img 
                    src={imgValue}
                    width={32}
                    height={32}
                    alt={title}
                />
            {/* </figure> */}
            <div>
                <h3>{title}</h3>
                <p className='text-zinc-400 text-md'>
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