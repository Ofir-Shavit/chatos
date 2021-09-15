import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';

import './Input.less';
import io from 'socket.io-client';
import config from '../../../config/config';

const socket = io(`ws://${config.api}`);

export default function Input () {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        socket.on('connection', () => {
            console.log('I am connected!');
        });

        socket.on('message', (message) => {
            console.log(message);
        });
    }, []);

    const editMessage = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }, [setMessage]);

    const sendMessage = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && socket) {
            socket.emit('message', message);
            setMessage('');
        }
    }, [message]);

    return (
        <form>
            <div className="input_row">
                <input
                    className="input_field"
                    type="text"
                    value={message}
                    placeholder="הקלד/י הודעה"
                    onChange={editMessage}
                    onKeyDown={sendMessage}
                />
            </div>
        </form>
    );
}
