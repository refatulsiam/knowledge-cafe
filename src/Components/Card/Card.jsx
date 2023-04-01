import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Card = ({ card, addReadingTime, addBookMark }) => {

    const { Blog_image, Author_image, Blog_title, Read_time, Publish_Date, Author_name } = card;

    const [bookmarked, setBookmarked] = useState(false);

    const toggleBookmark = () => {
        setBookmarked(!bookmarked);
        addBookMark(Blog_title);
    }

    return (
        <div className='mb-3'>
            <div className="card">
                <img src={Blog_image} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-1">
                            <div className="">
                                <img src={Author_image} width="70px" height="70px" className="rounded-circle" alt="" />
                            </div>
                            <div>
                                <p className="mb-0 fw-bold fs-5">{Author_name}</p>
                                <p>{Publish_Date}</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-start">
                            <p>{Read_time} min read</p>
                            <button onClick={toggleBookmark} className="border-0 bg-body">
                                <FontAwesomeIcon icon={faBookmark} color={bookmarked ? 'red' : 'black'} />
                            </button>
                        </div>
                    </div>
                    <h5 className="card-title fs-2 my-2">{Blog_title}</h5>
                    <p className="card-text text-secondary">
                        #beginners  #programming
                    </p>
                    <a href="#" onClick={() => addReadingTime(Read_time)}  >
                        Mark as read
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
