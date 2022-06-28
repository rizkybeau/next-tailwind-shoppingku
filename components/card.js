/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function card() {
  return (
    <div>
      <div className="w-64 h-96 relative mx-20">
        <div className="w-56 absolute top-0 left-28 z-50">
          <a href="#">
            <img
              src="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
              className="poster"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
