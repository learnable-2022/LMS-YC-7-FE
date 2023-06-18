import React, { useState, useEffect, useRef } from 'react'
import './StudentGeneral.scss'
import ToggleButton from '../../ToggleButton/ToggleButton'
import blank from '../../../assets/blank.webp'
import OtherInformation from './OtherInformation/OtherInformation'
import MiscellaneousInfo from './MiscellaneousInfo/MiscellaneousInfo'

const StudentGeneral = ({closePop, onImageSelection}) => {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [uploadedImage, setUploadedImage] = useState('');
    const popRef = useRef(null)

    useEffect((closePop) => {
      if(closePop){
        popRef.current.classList.add('zoomIn')
        popRef.current.classList.remove('zoomOut')
      }else{
          popRef.current.classList.add('zoomOut')
          popRef.current.classList.remove('zoomIn')
      }
    }, [closePop]);
    

    const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

        reader.onload = (e) => {
            setSelectedImage(e.target.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handlePasswordToggle = (field) => {
        if (field === 'password') {
          setIsVisiblePassword((prevState) => !prevState);
        } else if (field === 'confirmPassword') {
          setIsVisibleConfirmPassword((prevState) => !prevState);
        }
    };

    const handleToggleButtonClick = () => {
        setUploadedImage(selectedImage);
        closePop(uploadedImage);
        popRef.current.classList.remove('zoomIn');
        popRef.current.classList.add('zoomOut');
    };

  return (
    <div id='st-general' className={`st-general animate__animated ${ closePop ? 'animate__zoomIn' : 'animate__zoomOut'}`} ref={popRef}>
        <div id="st-gen-top">
            <h1>General</h1>
            <ToggleButton text={'X'} onClick={handleToggleButtonClick} />
        </div>

        <form action="">
            <section>
                <aside>
                    <span>
                        <label htmlFor="first">First Name</label>
                        <input type="text" name="first" id="first" />
                    </span>
                    <span>
                        <label htmlFor="last">Last Name</label>
                        <input type="text" name="last" id="last" />
                    </span>
                    <span>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </span>
                    <span>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name="phone" id="phone" />
                    </span>
                    <span>
                        <label htmlFor="class">Class</label>
                        <input type="text" name="class" id="class" />
                    </span>
                    <span>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </span>
                    <span>
                        <label htmlFor="password">Password</label>
                        <input type={isVisiblePassword ? 'text' : 'password'} name="password" id="password" />
                        <ToggleButton onClick={() => handlePasswordToggle('password')} className={'visi-btn'}>
                            <i className={`fa-solid fa-${isVisiblePassword ? 'eye' : 'eye-slash'}`} />
                        </ToggleButton>
                    </span>
                    <span>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type={isVisibleConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            id="confirmPassword"
                        />
                        <ToggleButton onClick={() => handlePasswordToggle('confirmPassword')} className={'visi-btn'}>
                            <i className={`fa-solid fa-${isVisibleConfirmPassword ? 'eye' : 'eye-slash'}`} />
                        </ToggleButton>
                    </span>
                </aside>

                <div id='st-pr-img'>
                    <img src={selectedImage || blank} alt="" />

                    <label htmlFor="fileInput" className="file-label">
                        {selectedImage ? 'Image selected' : 'Choose an image'}
                    </label>
                    <input
                    type="file" 
                    id="fileInput"
                    accept="image/*"
                    onChange={handleImageChange}
                    />
                </div>

            </section>

            <OtherInformation />

            <MiscellaneousInfo />

            <span>
                <ToggleButton text={'Save Changes'} className={'sbt-btn'} onClick={handleToggleButtonClick} />
            </span>
        </form>
    </div>
  )
}

export default StudentGeneral