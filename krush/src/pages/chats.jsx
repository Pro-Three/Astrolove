import React, { Component } from 'react'
// import { Launcher } from 'react-chat-window'
// import { Launcher } from '@wealize/react-chat-window'

// class Demo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       messageList: messageHistory,
//       newMessagesCount: 0,
//       isOpen: false
//     };
//   }

//   _onMessageWasSent(message) {
//     this.setState({
//       messageList: [...this.state.messageList, message],
//       newMessagesCount: 0
//     });
//   }

//   _onFilesSelected(fileList) {
//     const objectURL = window.URL.createObjectURL(fileList[0]);

//     this.setState({
//       messageList: [...this.state.messageList, {
//         type: 'file', author: 'me',
//         data: {
//           url: objectURL,
//           fileName: fileList[0].name
//         }
//       }]
//     });
//   }

//   _sendMessage(text) {
//     if (text.length > 0) {
//       const newMessagesCount = this.state.newMessagesCount + 1;
//       this.setState({
//         newMessagesCount: newMessagesCount,
//         messageList: [...this.state.messageList, {
//           author: 'them',
//           type: 'text',
//           is_chatbot: true,
//           data: { text }
//         }]
//       });
//     }
//   }

//   _handleClick() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

//   _handleReadMessages () {
//     this.setState({
//       newMessagesCount: 0
//     })
//   }

//   render() {
//     return <div>
//       <TestArea
//         onMessage={this._sendMessage.bind(this)}
//       />
//       <Launcher
//         agentProfile={{
//           teamName: 'My bot',
//           teamExplanation: 'A bot'
//         }}
//         onMessageWasSent={this._onMessageWasSent.bind(this)}
//         onFilesSelected={this._onFilesSelected.bind(this)}
//         messageList={this.state.messageList}
//         newMessagesCount={this.state.newMessagesCount}
//         handleReadMessages={this._handleReadMessages.bind(this)}
//         handleClick={this._handleClick.bind(this)}
//         isOpen={this.state.isOpen}
//         showEmoji
//         showFileIcon
//         verticalQuickReplies={true}
//       />
//     </div>;
//   }
// }









const Chats = () => {
    return (
        
        <div className="container">
            <div className="row grey lighten-3">

            <h3 className="center">You talk here</h3>
            

            </div>
        </div>
    )
}

export default Chats


// https://www.npmjs.com/package/@wealize/react-chat-window
// https://www.npmjs.com/package/react-chat-window