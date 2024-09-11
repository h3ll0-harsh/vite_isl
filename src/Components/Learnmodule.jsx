import React, { useState } from 'react';
import Modal from 'react-modal';
import './LearnGestures.css';

// Example video URLs, replace with your actual video URLs
const videos = {
  Aa: 'https://www.signingsavvy.com/media2/mp4-ld/26/26710.mp4',
  Bb: 'https://www.signingsavvy.com/media2/mp4-ld/26/26711.mp4',
  Cc: 'https://www.signingsavvy.com/media2/mp4-ld/26/26712.mp4',
  Dd: 'https://www.signingsavvy.com/media2/mp4-ld/26/26713.mp4',
  Ee: 'https://www.signingsavvy.com/media2/mp4-ld/26/26714.mp4',
  Ff: 'https://www.signingsavvy.com/media2/mp4-ld/26/26715.mp4',
  Gg: 'https://www.signingsavvy.com/media2/mp4-ld/26/26716.mp4',
  Hh: 'https://www.signingsavvy.com/media2/mp4-ld/26/26717.mp4',
  Ii: 'https://www.signingsavvy.com/media2/mp4-ld/26/26718.mp4',
  Jj: 'https://www.signingsavvy.com/media2/mp4-ld/26/26719.mp4',
  Kk: 'https://www.signingsavvy.com/media2/mp4-ld/26/26720.mp4',
  Ll: 'https://www.signingsavvy.com/media2/mp4-ld/26/26721.mp4',
  Mm: 'https://www.signingsavvy.com/media2/mp4-ld/26/26722.mp4',
  Nn: 'https://www.signingsavvy.com/media2/mp4-ld/26/26723.mp4',
  Oo: 'https://www.signingsavvy.com/media2/mp4-ld/26/26724.mp4',
  Pp: 'https://www.signingsavvy.com/media2/mp4-ld/26/26725.mp4',
  Qq: 'https://www.signingsavvy.com/media2/mp4-ld/26/26726.mp4',
  Rr: 'https://www.signingsavvy.com/media2/mp4-ld/26/26727.mp4',
  Ss: 'https://www.signingsavvy.com/media2/mp4-ld/26/26728.mp4',
  Tt: 'https://www.signingsavvy.com/media2/mp4-ld/26/26729.mp4',
  Uu: 'https://www.signingsavvy.com/media2/mp4-ld/26/26730.mp4',
  Vv: 'https://www.signingsavvy.com/media2/mp4-ld/26/26731.mp4',
  Ww: 'https://www.signingsavvy.com/media2/mp4-ld/35/35706.mp4',
  Xx: 'https://www.signingsavvy.com/media2/mp4-ld/26/26733.mp4',
  Yy: 'https://www.signingsavvy.com/media2/mp4-ld/26/26734.mp4',
  Zz: 'https://www.signingsavvy.com/media2/mp4-ld/26/26735.mp4',
  // Add more video URLs for each gesture
};

const gestures = [
  { name: 'Aa', image: '/images/Aa.jpg' },
  { name: 'Bb', image: '/images/bb.png' },
  { name: 'Cc', image: '/images/cc.jpg' },
  { name: 'Dd', image: '/images/dd.jpg' },
  { name: 'Ee', image: '/images/ee.jpg' },
  { name: 'Ff', image: '/images/ff.jpg' },
  { name: 'Gg', image: '/images/gg.jpg' },
  { name: 'Hh', image: '/images/hh.jpg' },
  { name: 'Ii', image: '/images/ii.jpg' },
  { name: 'Jj', image: '/images/jj.jpg' },
  { name: 'Kk', image: '/images/kk.jpg' },
  { name: 'Ll', image: '/images/ll.jpg' },
  { name: 'Mm', image: '/images/mm.jpg' },
  { name: 'Nn', image: '/images/nn.jpg' },
  { name: 'Oo', image: '/images/oo.jpg' },
  { name: 'Pp', image: '/images/pp.jpg' },
  { name: 'Qq', image: '/images/qq.jpg' },
  { name: 'Rr', image: '/images/r.jpg' },
  { name: 'Ss', image: '/images/ss.jpg' },
  { name: 'Tt', image: '/images/nn.jpg' },
  { name: 'Uu', image: '/images/uu.jpg' },
  { name: 'Vv', image: '/images/vv.jpg' },
  { name: 'Ww', image: '/images/ww.jpg' },
  { name: 'Xx', image: '/images/xx.jpg' },
  { name: 'Yy', image: '/images/yy.jpg' },
  { name: 'Zz', image: '/images/zz.jpg' },
  // Add more gestures here
];

const LearnGestures = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (gestureName) => {
    setVideoUrl(videos[gestureName]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoUrl('');
  };

  return (
    <div className="learn-gestures-container">
      <h2 className="learn-gestures-title">Learn Gestures</h2>
      <div className="gesture-grid">
        {gestures.map((gesture, index) => (
          <div key={index} className="gesture-item">
            <img
              src={gesture.image}
              alt={gesture.name}
              onClick={() => openModal(gesture.name)}
            />
            <p>{gesture.name}</p>
          </div>
        ))}
      </div>

      {/* Modal for video */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-modal-btn">X</button>
        <video controls autoPlay className="video-player">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </div>
  );
};

export default LearnGestures;

