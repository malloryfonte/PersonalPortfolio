import React from "react";

const BulletList = ({ items }) => {
  return (
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="mb-1">
          {item.text}

          {/* If there are sub-points, recurse */}
          {item.subPoints && item.subPoints.length > 0 && (
            <div className="ml-6 mt-1">
              <BulletList items={item.subPoints} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
