import {
    // eslint-disable-next-line no-unused-vars
    MultiChatSocket,
    useMultiChatLogic,
    MultiChatWindow,
} from 'react-chat-engine-advanced';
import '../App.css'

export function ChatsPage(props) {
    const chatProps = useMultiChatLogic(
        '44b27c92-3c20-447f-a782-618fa12a3021',
        props.user.username,
        props.user.secret
    );
    
    return (
            <MultiChatWindow {...chatProps} />
    );
}

  export default ChatsPage;