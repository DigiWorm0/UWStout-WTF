import ChannelDB from '../types/ChannelDB';
import ChannelBanner from './ChannelBanner';
import ChannelBannerSmall from './ChannelBannerSmall';

export default function ChannelList(props: { searchQuery: string, small?: boolean }) {
    return (
        <div>
            {ChannelDB?.map((channel) => {
                if (!channel.name.toLowerCase().includes(props.searchQuery.toLowerCase())
                    && !channel.category.toLowerCase().includes(props.searchQuery.toLowerCase())
                    && !channel.number.toString().includes(props.searchQuery.toLowerCase()))
                    return null;
                return (
                    props.small ? (
                        <ChannelBannerSmall
                            key={channel.number}
                            channel={channel}
                        />
                    ) : (
                        <ChannelBanner
                            key={channel.number}
                            channel={channel}
                        />
                    )
                );
            })}
        </div>
    )
}