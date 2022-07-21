import { Video } from './Main/Video'
import { MainContext, useContext } from '../context/MainContext'

export const Main: React.FC = () => {
    const { data } = useContext<any>(MainContext)
    
    return (
        <main>
            { data?.map((data: any) => (
                    <Video 
                        thumbnail={data.snippet.thumbnails.medium.url}
                        title={data.snippet.title}
                        channelTitle={data.snippet.channelTitle}
                    />

            )) }

        </main>
    )
}