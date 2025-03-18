import React  from "react";
 function Card(){
  return(
    <div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt=""
     src="https://images.pexels.com/photos/31150620/pexels-photo-31150620/free-photo-of-scenic-view-of-lush-green-hills-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  </div>
  <div class="flex">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gra">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
 }

 export default Card