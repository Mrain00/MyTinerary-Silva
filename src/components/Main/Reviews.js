import React from 'react'
import '../../styles/Testimonials.css'
import huguito from '../../img/huguito.png'
import poirtrait2 from '../../img/poirtrait-2.jpg'
import poirtrait3 from '../../img/poirtrait-1.jpg'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
function Reviews() {
    return (
        <div className="container-reviews">
            <div className="t-testimonials">
                <h3>
                    Testimonials.
                </h3>
                <div className="hr">
                </div>
                <p>
                    See what people are saying.
                </p>
            </div>
            <div className="item-container">
                <div className="item-1 item">
                    <img src={poirtrait3} className="img-item img-1" alt="poirtait-3" />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                    </p>
                    <hr className="hr-line" />
                    <div className="idstarts">
                        <div className='identify'>
                            <h6>
                                Sergio
                            </h6>
                            <p>Kinesiologist</p>
                        </div>
                        <div className="container-starts">
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon />
                        </div>
                    </div>
                </div>
                <div className="item-2 item">
                    <img src={poirtrait2} className="img-item img-2" alt='poirtait-2' />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <hr className="hr-line" />
                    <div className="idstarts">
                        <div className='identify'>
                            <h6>
                                Renzo
                            </h6>
                            <p>Musician</p>
                        </div>
                        <div className="container-starts">
                            <StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon />
                        </div>
                    </div>
                </div>
                <div className="item-3 item">
                    <img src={huguito} className="img-item img-3" alt="user" />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <hr className="hr-line" />
                    <div className="idstarts">
                        <div className='identify'>
                            <h6>
                                Huguito
                            </h6>
                            <p>English Mentor</p>
                        </div>
                        <div className="container-starts">
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews