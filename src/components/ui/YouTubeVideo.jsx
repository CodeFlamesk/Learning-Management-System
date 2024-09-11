import React from 'react';

const YouTubeVideo = () => {
    return (
        <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',

            backgroundColor: '#000',
            borderRadius: '16px'
        }}>
            <iframe
                src="https://www.youtube.com/embed/SWPXwPKI-SI"
                title="YouTube video player"
                frameBorder="0"
                allow="fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px'
                }}
            ></iframe>
        </div>
    );
}

export default YouTubeVideo;