export default function CardVideos({
  imageUrl,
  title,
  description,
  instructor,
  rating,
  price,
}) {
  return (
    <div className="card bg-white w-full rounded-xl p-4 shadow-lg flex flex-col gap-y-3">
      <div className="flex gap-4 items-center md:flex-col">
        <img
          src={imageUrl}
          className="h-25 md:w-full md:h-48 md:object-cover rounded-lg"
          alt={title}
        />

        <div className="flex flex-col gap-y-2">
          <h3 className="font-semibold text-base leading-tight">{title}</h3>
          <p className="text-gray-500 hidden md:block text-sm">{description}</p>
          <div className="flex items-center gap-3 mt-3">
            <img
              src={instructor.avatarUrl}
              className="h-9 w-9"
              alt={instructor.name}
            />
            <div>
              <p className="text-sm font-medium">{instructor.name}</p>
              <p className="text-xs text-gray-500 mt-1">
                {instructor.position}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          {/* Render rating stars based on rating.stars */}
          <RatingStars stars={rating.stars} />
          <p className="text-xs text-gray-500 underline">
            {rating.stars}({rating.count})
          </p>
        </div>
        <p className="font-semibold text-xl text-primary">{price}</p>
      </div>
    </div>
  )
}

// Komponen bintang rating terpisah
function RatingStars({ stars }) {
  const fullStars = Math.floor(stars)
  const hasHalfStar = stars % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} filled />
      ))}
      {hasHalfStar && <Star half />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} />
      ))}
    </div>
  )
}

function Star({ filled = false, half = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {filled ? (
        <path
          d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
          fill="#FCE91B"
        />
      ) : half ? (
        <>
          <path
            d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
            fill="#FCE91B"
          />
          <path
            d="M9 12.9525L4.365 15.75L5.595 10.4775L1.5 6.93L6.8925 6.4725L9 1.5L11.1075 6.4725L16.5 6.93L12.405 10.4775L13.635 15.75L9 12.9525Z"
            fill="#3A3541"
            fillOpacity="0.12"
          />
        </>
      ) : (
        <path
          d="M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z"
          fill="#3A3541"
          fillOpacity="0.12"
        />
      )}
    </svg>
  )
}
