import React from "react";
import '../../styles/activity.css'
 const ActivityItem = ( { activities } ) => {
   console.log(activities)
  return (
    <div className="container">
    {activities?.map((activity, index) => (
                  <div className="container-section" key={index}>
                  <img
                    className="activityImage"
                    src={activity.image}
                    alt={activity.name}
                  />
                  <p className="activityName">{activity.name}</p>
                </div>
            ))}
      
        </div>)}
export default ActivityItem
