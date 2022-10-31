import ChannelDB from '../types/ChannelDB';
import ChannelBanner from './ChannelBanner';

export default function ChannelList(props: { searchQuery: string }) {
    return (
        <div style={{
            paddingTop: 30
        }}>
            {ChannelDB?.map((channel) => {
                if (!channel.name.toLowerCase().includes(props.searchQuery.toLowerCase()))
                    return null;
                return (
                    <ChannelBanner
                        key={channel.number}
                        channel={channel}
                    />
                );
            })}
        </div>
    )
}