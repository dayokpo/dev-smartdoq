import React from 'react';

const ArrowRightCircle = ({ disabled, onClick }) => {
    return (
        <div onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right-circle"
            >
                <line x1="-1" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </div>
    );
};

export default ArrowRightCircle;
