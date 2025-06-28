
export default function Compact_Review({
    posterImage,
    imgUrl = "",
    releaseYear, 
    title,
    year,
    reviewDate,
    ratings,
    likes,
    userIcon,
    reviewText,
    className = ""
}){
    return(
        <>
            <div className="flex flex-row">
                <a
                    href={imageUrl}
                >
                    <img 
                        src={posterImage}
                        alt={title}
                        className=""

                    />
                </a>
            </div>
        </>
    )
}