const { useState } = require("react");
import Image from 'next/image';

export const CourseCard = ({ image, title, description, price }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  };

  return (
    <div className="col">
      <div className="courses-card">
        <Image
          src={image}
          className="card-img-top courses-card-img"
          alt={title}
          width={200} // Set the width
          height={200} // Set the height
        />
        <div className="courses-card-body">
          <p className="courses-card-title">{title}</p>
          <p
            className={`courses-card-text ${showDescription ? "" : "course-card-text-hide"
              }`}
          >
            {description}
          </p>
        </div>
        <div className="courses-card-footer">
          <small
            className="courses-details-text"
            onClick={handleToggleDescription}
          >
            Details
          </small>
        </div>
      </div>
    </div>
  );
};
