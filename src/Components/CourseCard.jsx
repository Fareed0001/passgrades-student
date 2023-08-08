const { useState } = require("react");
import Image from "next/image";
import { useRouter } from "next/router";

export const CourseCard = ({ image, title, description, price, id }) => {
  const [showDescription, setShowDescription] = useState(false);
  const router = useRouter();

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
            className={`courses-card-text ${
              showDescription ? "" : "course-card-text-hide"
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

          <div
            className="text-sm font-bold text-blue-300 cursor-pointer"
            onClick={() => {
              router.push(`/Dashboard/Class/${id}`);
            }}
          >
            view class
          </div>
        </div>
      </div>
    </div>
  );
};
