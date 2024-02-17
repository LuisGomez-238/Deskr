import {
    // eslint-disable-next-line no-unused-vars
    MultiChatSocket,
    useMultiChatLogic,
    MultiChatWindow,
} from 'react-chat-engine-advanced';
import '../App.css'

export function ChatsPage(props) {
    const chatProps = useMultiChatLogic(
        '4c76521a-468c-4464-a075-fd29840c1ef3',
        props.user.username,
        props.user.secret
    );
    
    return (
            <MultiChatWindow {...chatProps} />
    );
}

  export default ChatsPage;