/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function card() {
  return (
    <div className="flex items-start gap-24">
      <div className="w-64 h-96 relative mx-0">
        <div className="w-56 absolute top-0 left-28 z-50">
          <a href="#">
            <img
              src="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
              className="poster"
            />
          </a>
        </div>
      </div>
      <div className="2xl:gap-5">
        <h1 className="font-bold">Film Review</h1>
        <p>Genre Action</p>
        <p>Rating IMDB: 6.0</p>
        <div className="mt-3">
          <button className="rounded-lg hover:drop-shadow-xl p-3 bg-indigo-600 text-white">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
