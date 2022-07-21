interface Props {
    thumbnail: string,
    title: string,
    channelTitle: string
}

export const Video = ({ thumbnail, title, channelTitle }: Props) => {


    return (
        <div className="video-container">
            <div className="thumbnail-container">
                <img src={ thumbnail } alt="test-img" id="video-thumbnail" />
                <div id="video-time">13:00</div>
                <div id="hover-info">Keep hovering to play</div>
            </div>

            <div className="video-body">
                <img src="logo512.png" alt="test-pp" id="pp-thumbnail"/>
                <div className="video-details">
                    <h2 id="video-title">{ title }</h2>
                    <p id="channel-name">{ channelTitle }</p>
                    <p id="other-details"><span>100k views . 10 hours ago</span></p>
                </div>
                <span id="option-icon" className="material-symbols-outlined">more_vert</span>
            </div>
        </div>
    )
}